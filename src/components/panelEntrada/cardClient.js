import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import { history } from '../../router/AppRouter';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const CARD_CLIENTS = ({match}) => {
    const [cliente, setCliente] = useState([]);
    const [dob, setDob] = useState('');
    const [status, setStatus] = useState('');

    useEffect(()=>{
        const loadData = async()=>{
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/clients/?id=' + match.params.client_id);
            setCliente(apiResponse.data[0]);
            setStatus(apiResponse.data[0].status[0]);
            setDob(apiResponse.data[0].dob.substring(0, 10));
            console.log(apiResponse.data[0])
        }
        loadData()
    },[match])
    // console.log(typeof(cliente.dob))
    // console.log(cliente.dob)

    const onRequest = (value) => {
        const status = value;
        api.patch('/clients/'+match.params.client_id, {status}, `Bearer ${sessionStorage.getItem("token")}`)
        .then(res=>{
            if(res.status === 200){
                window.location.reload(true);
            } else {
                alert('Ha ocurrido algun error, favor de intentar nuevamente');
            }
        })
    }
    return (
        <section>
            <Header />
            <div class="bg-white">
                <div class="pt-6">
                    {/* aqi va el 1 */}
                    {/* <!-- Product info --> */}
                    <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Información del cliente</h1>
                        </div>
                        {/* <!-- Options --> */}
                        <div class="mt-4 lg:mt-0 lg:row-span-3">
                            <div class="flex items-start justify-between">
                                <h2 class="text-sm font-medium text-gray-900" id="slide-over-title">{cliente.name} {cliente.lastname} {cliente.second_lastname}</h2>
                                <div class="ml-3 flex h-7 items-center">
                                    <button onClick={() => history.push(`/prueba/${cliente._id}`)} class="rounded-full bg-green-400 py-1 px-1">
                                        ver más
                                    </button>
                                </div>
                            </div>
                            <h2 class="sr-only">Name</h2>
                            {/* <p class="text-sm text-gray-900">{cliente.name} {cliente.lastname} {cliente.second_lastname}</p> */}
                            <p class="text-xs text-gray-800">{cliente.nationality} ({cliente.sex})</p>
                            <div class="aspect-w-4 w-20 items-center justify-center aspect-h-5 md:mx-auto sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="w-full h-full object-center"/>
                            </div>
                            {/* aqi va el 2 */}
                            <form class="mt-10">
                                {/* 3 */}
                                {/* 4 */}
                                <div class="border-t border-gray-200">
                                    <dl>
                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="textxs font-medium text-gray-500">Correo</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.email}</dd>
                                        </div>
                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">RFC</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.rfc}</dd>
                                        </div>
                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Tipo de cliente</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.client_type}</dd>
                                        </div>

                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Tipo de identificación</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.identification_type}</dd>
                                        </div>
                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Folio INE</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.ine_folio}</dd>
                                        </div>

                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Circulo de prestamo</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.loan_cycle}</dd>
                                        </div>
                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Regimen tributario</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.tributary_regime}</dd>
                                        </div>
                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">País de nacimiento</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.country_of_birth}</dd>
                                        </div>
                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Estado civil</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.marital_status}</dd>
                                        </div>
                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Fecha de nacimiento</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{dob}</dd>
                                        </div>
                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Escolaridad</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.education_level}</dd>
                                        </div>
                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-xs font-medium text-gray-500">Ocupación</dt>
                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{cliente.ocupation}</dd>
                                        </div>
                                    </dl>
                                </div>

                                {/* <button type="submit" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button> */}
                                {
                                    status === 'APROVED' ? 
                                        <>
                                            <div class="h-14 bg-lime-700 from-cyan-500 to-blue-500 rounded-md">
                                                <dt class="text-xl font-medium text-white py-3">Aprobado</dt>
                                            </div>
                                        </>
                                    : status === 'PENDING' ?
                                        <>
                                            <div class="h-14 bg-indigo-600 from-cyan-500 to-blue-500 rounded-md">
                                                <dt class="text-xl font-medium text-white py-3">Pendiente</dt>
                                            </div>
                                        </>
                                    : status === 'DECLINED' ?
                                        <>
                                            <div class="h-14 bg-fuchsia-600 from-cyan-500 to-blue-500 rounded-md">
                                                <dt class="text-xl font-medium text-white py-3">Rechazado</dt>
                                            </div>
                                        </>
                                    : 
                                        <>
                                            <div class="h-14 bg-red-700 from-cyan-500 to-blue-500 rounded-md">
                                                <dt class="text-xl font-medium text-white py-3">Eliminado</dt>
                                            </div>
                                        </>
                                }
                            </form>
                        </div>
                        {/* 5 */}
                        <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-4 space-x-4">
                                        {
                                            status === 'PENDING' ? 
                                                <>
                                                    <button class="rounded-full bg-lime-700 px-2 text-white py-1" value='aceptar' onClick={() => onRequest('APROVED')}>Aprobar</button>
                                                    <button class="rounded-full bg-fuchsia-600 px-2 text-white py-1" value='rechazar' onClick={() => onRequest('DECLINED')}>Rechazar</button>
                                                    <button class="rounded-full bg-red-700 px-2 text-white py-1" value='eliminar' onClick={() => onRequest('DELETED')}>Eliminar</button>
                                                </>
                                            : status === 'DELETED' ?
                                                <>
                                                    <button class="rounded-full bg-lime-700 px-2 text-white py-1" value='aceptar' onClick={() => onRequest('APROVED')}>Aprobar</button>
                                                    <button class="rounded-full bg-fuchsia-600 px-2 text-white py-1 opacity-25" value='rechazar' onClick={() => onRequest('DECLINED')} disabled>Rechazar</button>
                                                    <button class="rounded-full bg-red-700 px-2 text-white py-1 opacity-25" value='eliminar' onClick={() => onRequest('DELETED')} disabled>Eliminar</button>
                                                </>
                                            : status === 'DECLINED' ?
                                                <>
                                                    <button class="rounded-full bg-lime-700 px-2 text-white py-1" value='aceptar' onClick={() => onRequest('APROVED')}>Aprobar</button>
                                                    <button class="rounded-full bg-fuchsia-600 px-2 text-white py-1 opacity-25" value='rechazar' onClick={() => onRequest('DECLINED')} disabled>Rechazar</button>
                                                    <button class="rounded-full bg-red-700 px-2 text-white py-1" value='eliminar' onClick={() => onRequest('DELETED')}>Eliminar</button>
                                                </>
                                            : 
                                                <>
                                                    <button class="rounded-full bg-lime-700 px-2 text-white py-1 opacity-25" value='aceptar' onClick={() => onRequest('APROVED')} disabled>Aprobar</button>
                                                    <button class="rounded-full bg-fuchsia-600 px-2 text-white py-1 opacity-25" value='rechazar' onClick={() => onRequest('DECLINED')} disabled>Rechazar</button>
                                                    <button class="rounded-full bg-red-700 px-2 text-white py-1" value='eliminar' onClick={() => onRequest('DELETED')}>Eliminar</button>
                                                </>
                                        }                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { CARD_CLIENTS as default };
              