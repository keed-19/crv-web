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

    useEffect(()=>{
        const loadData = async()=>{
            
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/clients');
            setClientes(apiResponse.data);
            console.log(apiResponse.data)
        }
        loadData()
        console.log('consulta')
    },[])

    const onDelete = async(id) => {        
        const token = `Bearer ${sessionStorage.getItem("token")}`;
        api.defaults.headers.common["Authorization"] = token;
        const apiResponse = await api.delete('/clients/' + id);
        alert(apiResponse.data)
        window.location.reload()
    }
    

    return (
        <section>
            <Header />
            <h1 className='text-3xl font-bold text-gray-900'>Clientes</h1>
            <div className='relative h-32 w-32'>
                <button className='absolute top-0 right-0 text-white px-3 py-2 bg-sky-500 rounded-md text-sm font-medium' onClick={()=>{history.push('/addclientes')}}>Add</button>
                {/* text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 bg-sky-500 rounded-md text-sm font-medium */}
            </div>

            <div className='min-h-full flex items-center justify-center text-center'>            
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido paterno</th>
                            <th>Apellido materno</th>
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
                                <td>{p.name}</td>
                                <td>{p.lastname}</td>
                                <td>{p.second_lastname}</td>
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