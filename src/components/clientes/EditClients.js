import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import { history } from '../../router/AppRouter';
import Formclients from './FormClients';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const EditClients = ({match}) => {
    
    const [clients, setClients] = useState();

    useEffect(()=>{
        const loadData = async()=>{
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/clients/?id=' + match.params.client_id);
            setClients(apiResponse.data[0]);
        }
        loadData()
    },[])

    const onSend = (data) => {
        try {
            api.patch('/clients/'+clients._id,{data}, `Bearer ${sessionStorage.getItem("token")}`)
            .then(res=>{
                console.log(res.data);
            })
            history.replace('/clientes');
            // window.replace('/product')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <section>
            <Header />
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-gray-900'>Editar Productos</h1>
            </div>

            <Formclients clients={clients} onSend={onSend}></Formclients>
        </section>
    );
}

export { EditClients as default };