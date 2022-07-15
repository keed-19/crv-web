import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import ProductForm from './ProductForm';
import { history } from '../../router/AppRouter';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const AddProduct = ({match}) => {
    const [product, setProduct] = useState({});

    const onSend = (data) => {
        try {
            JSON.stringify(data)
            // imagen 
            // const f = new FormData();
            // f.append("files", data.image);
            // f.append("files", data.logo);
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            api.post('/products',data)
            .then(res=>{
                console.log(res);
                console.log(data)
                if(res.status === 200) {
                    history.replace('/product')
                }
            })
            .catch(e=>{
                console.log(data)
                console.log(e)
                alert(e.message)
                return
            })
            history.push('/product');
        } catch (error) {
            alert(error)
        }
    }

    return (
        <section>
            <Header />
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-gray-900'>Agregar Productos</h1>
            </div>

            <ProductForm product={product} onSend={onSend}></ProductForm>
        </section>
    );
}

export { AddProduct as default };