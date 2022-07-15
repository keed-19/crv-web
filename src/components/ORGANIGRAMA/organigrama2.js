import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/organigrama.css';
import Header from '../Header';
import { history } from '../../router/AppRouter';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const Organigrama2 = () =>{

    const [hierarchyName, setHierarchyName] = useState('');
    const [valueparent, setValueParent] = useState();
    const [workstation, setWorkstation] = useState('');
    const [keyValue, setKeyValue] = useState('');
    const [puestos, setPuestos ] = useState([]);
    const [puestoElegido, setPuestoElegido ] = useState([]);
    const [statusEdit, setStatusEdit] = useState(false);

    class TreeNode {
        constructor(id,hierarchy_name,workstation, employee){
            this.id = id;
            this.hierarchy_name =hierarchy_name;
            this.workstation = workstation;
            this.employee = employee;
            this.hijos = [];
        }
    }

    function handleClick () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    }

    const construirArbolHTML = (data, contenedor ) => {

        data.forEach( (nodo) => {

            const li = document.createElement('li');
            const span = document.createElement('span');
            // const label = document.createElement('label');
            const ul = document.createElement('ul');

            // console.log(nodo.hijos)

            // if( nodo.hijos.length ){
                span.textContent = `${nodo.hierarchy_name} (${nodo.employee})`;
                // label.style.cssText = !nodo.hierarchy_name ? 'font-style: italic;' : '';

                
                span.classList.toggle("caret");
                span.addEventListener("click",handleClick);
                ul.classList.toggle("nested");
                

                
                ul.classList.toggle("active");
                span.classList.toggle("caret-down");
                
                contenedor.appendChild(li);
                li.appendChild(span);//appendChild ayuda a crear nodos dinamicamente
                // li.appendChild(label)
                li.appendChild(ul);

                construirArbolHTML( nodo.hijos,ul);

            // } else {
                
            //     label.textContent = nodo.hierarchy_name;
            //     // label.style.cssText = !nodo.workstation ? 'font-style: italic;' : '';
            //     li.appendChild(label);
            //     contenedor.appendChild(li);
            // }

        })
    }
    
    useEffect( ()=>{
        let mounted = true;

        // console.log(valueparent)
        if( valueparent === undefined ) {
            setValueParent('Seleccionar')
        }

        if( mounted ) {
            let hierarchies = []
            const contenedor = document.querySelector("#myUL");
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            api.get('/hierarchies').then((response) =>{
                hierarchies = response.data;
                const puestos = hierarchies.map( (i) => {
                    return {
                        id: i._id,
                        workstation: i.workstation,
                        hierarchy_name: i.hierarchy_name,
                        padre: i.parent[0].id_Parent,
                        name_employee: i.name_employee
                    } 
                });
                console.log(hierarchies);
                setPuestos(hierarchies)

                const setHijos = ( nodo ) => {
                    // console.log('nodoo', nodo)
                    const h = puestos.filter( (i) => i.padre === nodo.id ).map( (obj) => new TreeNode(obj.id,obj.hierarchy_name, obj.workstation, obj.name_employee));
                    // console.log('esto tiene h', h)
                    nodo.hijos.push(...h);
                    h.forEach( (hijo) => {
                        setHijos(hijo)
                    });
                    
                }

                if( puestos )
                {
                    const root = new TreeNode( puestos[0].id, puestos[0].hierarchy_name, puestos[0].workstation, puestos[0].name_employee, true );
                    setHijos(root);
                    construirArbolHTML([root], contenedor);
                }



            })
            .catch( e=>{
                console.log(e);
            })
        
        }


        return () => {

            const toggler = document.getElementsByClassName("caret");
            // console.log("toggling toggler", toggler);
            mounted = false;
    
            for (let i = 0; i < toggler.length; i++) {
                toggler[i].removeEventListener("click", handleClick );
              }

            const contenedor = document.querySelector("#myUL");
            const rootItem = contenedor.firstElementChild;
            contenedor.removeChild(rootItem);
        } 

    }, []);

    const OnSelectPadre = (event)=>{
        // obtenemos el id del puesto pero para guardar la jerarquia tambien vamos a mandar el nombre por ende lo buscamos en el array pricipal
        setPuestoElegido(puestos.find(({_id}) => _id === event.target.value));
    }
    // console.log(puestoElegido.hierarchy_name)

    const removeAccents = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const onSave = ()=> {
        // e.preventDefault()
        const data = {
            hierarchy_name: removeAccents(hierarchyName.toUpperCase()),
            isroot: false,
            parent: [{
                id_Parent: puestoElegido._id,
                name_Parent: puestoElegido.hierarchy_name.toUpperCase()
            }],
            workstation: removeAccents(workstation.toUpperCase())
        }
        JSON.stringify(data)

        const token = `Bearer ${sessionStorage.getItem("token")}`;
        api.defaults.headers.common["Authorization"] = token;
        api.post('/hierarchies',data)
        .then(res=>{
            console.log(res);
            if(res.status === 200) {
                history.replace('/organigrama')
            }
        })
        .catch(e=>{
            console.log(e)
            return
        })
        // history.replace('/employees');
    }

    function cutString(palabra) { 
        var res = palabra.split("(");
        palabra= res[0];
        return res[0];
    }

    const onVer = (e) => {
        e.preventDefault();
        var data = cutString(e.target.innerHTML)
        const dataNoSpace = data.replace(/\s*$/,"")+""

        let datos = puestos.find(({hierarchy_name}) => hierarchy_name === dataNoSpace)

        setHierarchyName(datos.hierarchy_name);
        setWorkstation(datos.workstation);
        setValueParent(datos.parent[0].name_Parent);
        setKeyValue(datos._id)

        setStatusEdit(true);
    }

    const onClean = (e) => {
        e.preventDefault();
        setHierarchyName('');
        setWorkstation('');
        setValueParent('Seleccionar')

        setStatusEdit(false);
    }

    const onDelete = async(e) => {
        e.preventDefault();
        // console.log(keyValue)
        const token = `Bearer ${sessionStorage.getItem("token")}`;
        api.defaults.headers.common["Authorization"] = token;
        const apiResponse = await api.delete('/hierarchies/' + keyValue);
        alert(apiResponse.data)
        window.location.reload()
    }

    const onEdit = async(e) => {
        e.preventDefault();
        let data;
        if (puestoElegido.length === 0) {
            data = {
                hierarchy_name: removeAccents(hierarchyName.toUpperCase()),
                isroot: false,
                workstation: removeAccents(workstation.toUpperCase())
            }
        } else {
            data = {
                hierarchy_name: removeAccents(hierarchyName.toUpperCase()),
                isroot: false,
                parent: [{
                    id_Parent: puestoElegido._id,
                    name_Parent: puestoElegido.hierarchy_name.toUpperCase()
                }],
                workstation: removeAccents(workstation.toUpperCase())
            }
        }
        JSON.stringify(data)

        // const token = `Bearer ${sessionStorage.getItem("token")}`;
        // api.defaults.headers.common["Authorization"] = token;
        api.patch('/hierarchies/'+ keyValue, data, `Bearer ${sessionStorage.getItem("token")}`)
        .then(res=>{
            console.log(res);
            if(res.status === 200) {
                // history.replace('/organigrama')
                window.location.reload()
            }
        })
        .catch(e=>{
            console.log(e)
            return
        })
    }

    return (
        <section>
            <Header />
            <div className='md:grid md:grid-cols-4 md:gap-6'>

                <div class="md:col-span-2">
                    <h1 className='text-2xl font-bold text-gray-900'>Organigrama de puestos</h1>
                    
                    <ul className='mt-1 text-sm' onClick={onVer} id="myUL"></ul>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Puestos</h3>
                        {/* <form onSubmit={onSave}> */}
                        <form onSubmit={onSave}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Nombre de la jerarquía</label>
                                            <input type="text" value={hierarchyName} onChange={(e)=> setHierarchyName(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Puesto de trabajo</label>
                                            <input type="text" value={workstation} onChange={(e)=> setWorkstation(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Superior de la jerarquía</label>
                                            {/* <input type="text" value={puestos} onChange={(e)=> setPuestos(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" /> */}
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label>                                                        
                                                        <select onChange={OnSelectPadre}>
                                                            <option>{valueparent}</option>
                                                            {puestos?.map(item => <option value={item._id}>{item.hierarchy_name}</option>)}
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-6">
                                    {/* validacion segun el caso en el q se encuentra el formulario */}
                                    {
                                        statusEdit === true ? 
                                            <>
                                                <div className="col-span-6 sm:col-span-2 px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button onClick={onClean} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Limpiar</button>
                                                </div>
                                                <div className="col-span-6 sm:col-span-2 px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button onClick={onDelete} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Eliminar</button>
                                                </div>
                                                <div className="col-span-6 sm:col-span-2 px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button onClick={onEdit} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Editar</button>
                                                </div>
                                            </> 
                                        :
                                            <>
                                                <div className="col-span-6 sm:col-span-6 px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Guardar</button>
                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                        </form>                        
                    </div>
                </div>                
            </div>
        </section>
    );
}
export {Organigrama2 as default};