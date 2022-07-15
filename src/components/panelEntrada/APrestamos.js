import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { history } from '../../router/AppRouter'; 
import Header from '../Header';
import { Link } from 'react-router-dom';
import ClientesPanelReducer from '../../reducers/ClientesPanelReducer';


const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const A_PRESTAMOS = () => {

    const [listaAprovados, DespacharListaAprovados] = useReducer(ClientesPanelReducer,[]);

    const [clientes, setClientes ] = useState([]);
    const [tablaClientes, setTablaClientes ] = useState([]);
    const [busqueda, setBusqueda ] = useState('');
    const [tipoBusqueda, setTipoBusqueda ] = useState('');

    // validador de los botones de acciones de aceptar o rechazar un  cliente
    // const [botonActive, setBotonActive] = useState(false);

    useEffect(()=>{
        const loadData = async()=>{            
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/statusClients/PENDING');
            setClientes(apiResponse.data);
            setTablaClientes(apiResponse.data);
            console.log(apiResponse.data)
        }
        loadData()
        setTipoBusqueda('nombre')
        // console.log('consulta')
    },[])

    const onSearch = (e) => {
        e.preventDefault();
        setBusqueda(e.target.value);
        onFiltrar(e.target.value);
    }

    const onFiltrar = (terminoBusqeda) => {
        // me falta validar que tipo de busqueda es, ya esta lo de seleccionar el tipo ya solo es validar
        var resultadoBusqueda = tablaClientes.filter((item) => {
            if(tipoBusqueda === 'nombre'){
                if(item.name.toString().toLowerCase().includes(terminoBusqeda.toLowerCase())
                ){
                    return item;
                }
            } 
            if(tipoBusqueda === 'apellidoP'){
                if(item.lastname.toString().toLowerCase().includes(terminoBusqeda.toLowerCase())
                ){
                    return item;
                }
            }
            if(tipoBusqueda === 'apellidoM'){
                if(item.second_lastname.toString().toLowerCase().includes(terminoBusqeda.toLowerCase())
                ){
                    return item;
                }
            }
            if(tipoBusqueda === 'folioIne'){
                if(item.ine_folio.toString().toLowerCase().includes(terminoBusqeda.toLowerCase())
                ){
                    return item;
                }
            }
            
        });
        setClientes(resultadoBusqueda)
    }

    const OnSelect = (e) => {
        e.preventDefault();
        // setPuestoElegido(puestos.find(({_id}) => _id === event.target.value));
        // realizar el cambio de valor de la bariable para el tipo de busqueda
        // console.log(e.target.value);
        setTipoBusqueda(e.target.value);

    }

    const onRadio = (e) => {
        // e.preventDefault();
        if(buscarId(e.target.value) === true) {
            DespacharListaAprovados({
                type: 'ELIMINAR',
                value: e.target.value
            })
        } else if(buscarId(e.target.value) === false) {
            DespacharListaAprovados({
                type: 'AGREGAR',
                value: e.target.value
            })
        }
    }

    const buscarId = (valor) => {
        if(listaAprovados.indexOf(valor) > -1) {
            return true;
        } else {
            return false;
        }
    }

    const onRequest = (value) => {
        const status = value;
        listaAprovados.forEach(function(id, index) {
            api.patch('/clients/'+id, {status}, `Bearer ${sessionStorage.getItem("token")}`)
            .then(res=>{
                if(res.status === 200){
                    // para validar que se acepto de manera correcta vamos a eliminarlo de mi array de ids para evitar algun detalle
                    DespacharListaAprovados({
                        type: 'ELIMINAR',
                        value: id
                    });
                    window.location.reload(true);
                } else {
                    alert('Ha ocurrido algun error, favor de intentar nuevamente');
                }
            })
        });
    }
    // console.log(listaAprovados.length)
    

    return (
        <section>
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-2">
                        <div class="relative">
                            <div class="absolute pointer-events-auto ...">
                                <svg class="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input 
                                type="text" 
                                placeholder="Buscar" 
                                value={busqueda} 
                                onChange={onSearch} 
                                className="" 
                            />
                            <select className='absolute pointer-events-auto' onChange={OnSelect}>
                                <option></option>
                                <option value='nombre'>Nombre</option>
                                <option value='apellidoP'>Apellido paterno</option>
                                <option value='apellidoM'>Apellido materno</option>
                                <option value='folioIne'>Folio INE</option>
                                {/* {puestos?.map(item => <option value={item._id}>{item.hierarchy_name}</option>)} */}
                            </select>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4 space-x-4">
                        {/* botones de acciones de la tabla */}
                        {
                            listaAprovados.length !== 0 ?
                                <>
                                    <button class="rounded-full bg-lime-700 px-2 text-white py-1" value='aceptar' onClick={() => onRequest('APROVED')}>Aprobar</button>
                                    <button class="rounded-full bg-fuchsia-600 px-2 text-white py-1" value='rechazar' onClick={() => onRequest('DECLINED')}>Rechazar</button>
                                    <button class="rounded-full bg-red-700 px-2 text-white py-1" value='eliminar' onClick={() => onRequest('DELETED')}>Eliminar</button>
                                </>
                            :
                                <>
                                    <button class="rounded-full bg-lime-700 px-2 text-white py-1 opacity-25" disabled>Aprobar</button>
                                    <button class="rounded-full bg-fuchsia-600 px-2 text-white py-1 opacity-25" disabled>Rechazar</button>
                                    <button class="rounded-full bg-red-700 px-2 text-white py-1 opacity-25" disabled>Eliminar</button>
                                </>
                        }
                        
                    </div>
                </div>
            </div>
            <div className='min-h-full flex items-center justify-center text-center'>            
            <table className='table-auto border-separate border border-slate-500 w-full'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Cliente</th>
                                <th>Grupo</th>
                                <th>Prestamo</th>
                                <th>Cantidad</th>
                                <th>Propósito del préstamo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(p=>
                                <tr key={p._id}>
                                    {/* <td><div className='bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed'></div></td> */}
                                    <td>
                                        <div class="flex items-center h-5">
                                            <input id="comments" value={p._id} onChange={onRadio} type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                        </div>
                                    </td>
                                    <td><a href={`/cardClient/${p._id}`}>{p.name} {p.lastname} {p.second_lastname}</a></td>
                                    {/* <td><a href='/cardClient'>{p.name} {p.lastname} {p.second_lastname}</a></td> */}
                                    <td>{p.tributary_regime}</td>
                                    <td>{p.ine_folio}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                
            </div>
        </section>
    );
}

export { A_PRESTAMOS as default };