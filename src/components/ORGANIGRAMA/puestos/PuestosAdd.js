
import React, { useEffect, useState } from 'react';
import PuestosForm from './PuestosForm';
import { history } from "../../../router/AppRouter";

import Loader from '../../../Loader';
import axios from 'axios';


const PuestosAdd = () => {
    const AxiosExpenseApi = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL_API
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {

        try{

            setLoading(true);
            const axiosApi = AxiosExpenseApi();
            let res = await axiosApi.post('/puestos',{...data});
            setLoading(false);
            history.push('/organigrama');

        }

        catch(e){
            alert(e);
        }

    
    }

    return (
        <div>
            <h1>Nuevo Puesto</h1>
            { loading && <Loader />}
            { !loading && <PuestosForm onSubmit={onSubmit}/>}
        </div>
    );
}

export { PuestosAdd as default };