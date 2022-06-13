import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import ProductForm from './ProductForm';
import { history } from '../../router/AppRouter';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const EditProduct = ({match}) => {
    
    const [product, setProduct] = useState();

    useEffect(()=>{
        const loadData = async()=>{
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/products?id=' + match.params.product_id);
            setProduct(apiResponse.data[0]);
            console.log('re: ',apiResponse.data[0])
        }
        loadData()
    },[])

    const onSend = (data) => {
        // aqui vamos a llamar el api con trycatch
        try {
            // const token = `Bearer ${sessionStorage.getItem("token")}`;
            // api.defaults.headers.common["Authorization"] = token;
            api.patch('/products/'+product._id,{data}, `Bearer ${sessionStorage.getItem("token")}`)
            .then(res=>{
                console.log(res.data);
            })
            history.replace('/product');
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

            <ProductForm product={product} onSend={onSend}></ProductForm>
        </section>
    );
}

export { EditProduct as default };