import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import { history } from '../../router/AppRouter';
import FormEmployee from './FormEmployee';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const EditEmployee = ({match}) => {
    
    const [employee, setEmployee] = useState();

    useEffect(()=>{
        const loadData = async()=>{
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/employees/?id=' + match.params.employee_id);
            setEmployee(apiResponse.data[0]);
            console.log('re: ',apiResponse.data[0])
        }
        loadData()
    },[])

    const onSend = (data) => {
        // aqui vamos a llamar el api con trycatch
        try {
            // const token = `Bearer ${sessionStorage.getItem("token")}`;
            // api.defaults.headers.common["Authorization"] = token;
            api.patch('/employees/'+employee._id,{data}, `Bearer ${sessionStorage.getItem("token")}`)
            .then(res=>{
                console.log(res.data);
            })
            history.replace('/employees');
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

            <FormEmployee employee={employee} onSend={onSend}></FormEmployee>
        </section>
    );
}

export { EditEmployee as default };