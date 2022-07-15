import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import { history } from '../../router/AppRouter';
import FormEmployee from './FormEmployee';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const AddEmployee = ({match}) => {
    const [employee, setEmployees] = useState({});

    const onSend = (data) => {
        try {
            JSON.stringify(data)
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            api.post('/employees',data)
            .then(res=>{
                console.log(res);
                if(res.status === 200) {
                    history.replace('/employees')
                }
            })
            .catch(e=>{
                console.log(e)
                return
            })
            history.replace('/employees');
        } catch (error) {
            alert(error)
        }
    }

    return (
        <section>
            <Header />
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-gray-900'>Agregar Personal</h1>
            </div>
            {/* <FormEmployee employee={employee} onSend={onSend}></FormEmployee> */}
            <FormEmployee employee={employee} onSend={onSend}></FormEmployee>
        </section>
    );
}

export { AddEmployee as default };