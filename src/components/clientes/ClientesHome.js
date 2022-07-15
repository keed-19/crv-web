import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { history } from '../../router/AppRouter'; 
import Header from '../Header';
import { Link } from 'react-router-dom';


const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const ClientesHome = () => {
    const [clientes, setClientes ] = useState([]);
    const [tablaClientes, setTablaClientes ] = useState([]);
    const [busqueda, setBusqueda ] = useState('');
    const [tipoBusqueda, setTipoBusqueda ] = useState('');

    useEffect(()=>{
        const loadData = async()=>{
            
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/statusClients/APROVED');
            setClientes(apiResponse.data);
            setTablaClientes(apiResponse.data);
            console.log(apiResponse.data)
        }
        loadData()
        setTipoBusqueda('nombre')
        // console.log('consulta')
    },[])

    const onDelete = async(id) => {        
        const token = `Bearer ${sessionStorage.getItem("token")}`;
        api.defaults.headers.common["Authorization"] = token;
        const apiResponse = await api.delete('/clients/' + id);
        alert(apiResponse.data)
        window.location.reload()
    }

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
    

    return (
        <section>
            <Header />
            <h1 className='text-3xl font-bold text-gray-900'>Clientes</h1>
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-2">
                        <div class="relative ...">
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
                        </div>
                        {/* <input 
                            type="text" 
                            placeholder='Buscar' 
                            value={busqueda} 
                            onChange={onSearch} 
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                        /> */}
                        {/* <button>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </button> */}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="first-name" className="block text-sm font-medium text-gray-700">Buscar por: </label>
                        {/* <input type="text" value={puestos} onChange={(e)=> setPuestos(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" /> */}
                        <div className='tarea-formulario'>
                            <div>
                                <label>                                                        
                                    <select onChange={OnSelect}>
                                        <option value='nombre'>Nombre</option>
                                        <option value='apellidoP'>Apellido paterno</option>
                                        <option value='apellidoM'>Apellido materno</option>
                                        <option value='folioIne'>Folio INE</option>
                                        {/* {puestos?.map(item => <option value={item._id}>{item.hierarchy_name}</option>)} */}
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-span-6 sm:col-span-3"></div> */}
                    <div className='col-span-6 sm:col-span-1'>
                        <button className='text-white px-3 py-2 bg-sky-500 rounded-md text-sm font-medium' onClick={()=>{history.push('/addclientes')}}>Add</button>
                        {/* text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 bg-sky-500 rounded-md text-sm font-medium */}
                    </div>
                </div>
            </div>
            <div className='min-h-full flex items-center justify-center text-center'>            
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Folio INE</th>
                            {/* <th>Fecha de nacimiento</th> */}
                            <th>Tipo de cliente</th>
                            <th>Escolaridad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(p=>
                            <tr key={p._id}>
                                <td><a href={`/cardClient/${p._id}`}>{p.name} {p.lastname} {p.second_lastname}</a></td>
                                <td>{p.email}</td>
                                <td>{p.ine_folio}</td>
                                {/* <td>{p.dob.substring(0, 10)}</td> */}
                                <td>{p.client_type}</td>
                                <td>{p.scolarship}</td>
                                <td><Link to={`/editclientes/${p._id}`}><p className='bg-lime-400 rounded-sm'>Editar</p></Link></td>
                                <td><button onClick={() => onDelete(p._id)}>X</button></td>
                            </tr>
                        )}                        
                    </tbody>
                </table>
                
            </div>
        </section>
    );
}

export { ClientesHome as default };