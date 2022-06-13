import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import { history } from '../../router/AppRouter';
import FormClients from './FormClients';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const AddClients = ({match}) => {
    const [clients, setClients] = useState({});

    const onSend = (data) => {
        try {
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            api.post('/clients',{data})
            .then(res=>{
                console.log(res);
                if(res.status === 200) {
                    history.replace('/clientes')
                }
            })
            .catch(e=>{
                console.log(e)
                return
            })
            history.replace('/clientes');
        } catch (error) {
            alert(error)
        }
    }

    return (
        <section>
            <Header />
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-gray-900'>Agregar clientes</h1>
            </div>

            <FormClients clients={clients} onSend={onSend}></FormClients>
        </section>
    );
}

export { AddClients as default };