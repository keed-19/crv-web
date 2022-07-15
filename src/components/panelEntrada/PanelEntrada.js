import React, { useEffect, useState } from 'react';
// import Loader from '../Loader';
import axios from 'axios';
import { history } from '../../router/AppRouter'; 
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../../styles/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faTrashCan, faPenToSquare, faCircleCheck, faCircleXmark, faL } from '@fortawesome/free-solid-svg-icons'
import AClientes from './AClientes';
import ClientesR from './ClientesR';
import ClientesE from './ClientesE';
import APrestamos from './APrestamos';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const PanelEntrada = () => {

    const [aClients, setAClients] = useState(false);
    const [aCreditos, setACreditos] = useState(false);
    const [clientesR, setClientesR] = useState(false);
    const [clientesE, setClientesE] = useState(false);

    useEffect(()=>{
        setAClients(true)
    },[])

    const onSelect = (e)=>{
        // console.log(e.target.value)
        if(e.target.value === 'boton1') {
            setAClients(true)
            setACreditos(false)
            setClientesR(false)
            setClientesE(false)
        } else if(e.target.value === 'boton2') {
            setAClients(false)
            setACreditos(true)
            setClientesR(false)
            setClientesE(false)
        } else if(e.target.value === 'boton3') {
            setAClients(false)
            setACreditos(false)
            setClientesR(true)
            setClientesE(false)
        } else if(e.target.value === 'boton4') {
            setAClients(false)
            setACreditos(false)
            setClientesR(false)
            setClientesE(true)
        }
    }

    return (
        <section>
            <Header />
            <h1 className='text-3xl font-bold text-gray-900'>Panel de entrada</h1>
            {/* <div className='relative h-32 w-32'>
                <button className='absolute top-0 right-0 text-white px-3 py-2 bg-sky-500 rounded-md text-sm font-medium' onClick={()=>{history.push('/productadd')}}>Add</button>
            </div> */}

            <div className='min-h-full flex items-center justify-center text-center'>            
                <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Tareas pendientes</h3>
                        {/* <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p> */}
                    </div>
                    <div class="border-t border-gray-200">
                        <dl className='ml-10 flex items-baseline space-x-4'>
                            {aClients === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Aprobación de clientes</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton1' onClick={onSelect}>Aprobación de clientes</button>}
                            {aCreditos === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Aprobación de préstamos</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton2' onClick={onSelect}>Aprobación de préstamos</button>}
                            {clientesR === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Clientes rechazados</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton3' onClick={onSelect}>Clientes rechazados</button>}
                            {clientesE === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Clientes eliminados</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton4' onClick={onSelect}>Clientes eliminados</button>}
                            {/* <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={()=>0}>Aprobación de préstamos</button> */}
                            <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={()=>0}>Reprogramar préstamo</button>
                            <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={()=>0}>Aprobación de ahorros</button>
                            <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={()=>0}>Activación de ahorros</button>
                        </dl>
                    </div>

                    {/* aqi vamos a validar la opcion que el usuario qyuiera realizar, aun me falta el componente de aprovacion de prestamos */}
                    {aClients === true ? <AClientes/> : clientesR === true ? <ClientesR/> : clientesE === true ? <ClientesE/> : aCreditos === true ? <APrestamos/> : console.log(aClients)}

                </div>             
            </div>
        </section>
    );
}

export { PanelEntrada as default };