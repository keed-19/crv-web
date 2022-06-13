import React, { useState } from 'react';
import axios from 'axios';
import { history } from '../../router/AppRouter'; 
import Header from '../Header';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const AddUsers = () => {
    
    const [name, setName ] = useState('');
    const [minAmount, setMinAmount ] = useState('');
    const [maxAmount, setMaxAmount ] = useState('');
    const [minterm, setMinterm ] = useState('');
    const [maxterm, setMaxterm ] = useState('');
    const [frecuency, setFrecuency ] = useState('');
    const [term, setTerm ] = useState('');
    const [rate, setRate ] = useState('');
    const [daysYear, setDaysYear ] = useState('');
    const [prop, setProp ] = useState('');
    

    const onSaveProduct = (e)=> {
        if (name === '' || minAmount==='' || maxAmount==='' || minterm==='' || maxterm==='' || frecuency==='' || term==='' || rate==='' || daysYear==='' || prop==='') {
            alert('Todos los campos son requeridos');
        } else {
            api.post('/users/login',{
                name: name,
                minAmount: minAmount,
                maxAmount: maxAmount,
                minterm: minterm,
                maxterm: maxterm,
                frecuency: frecuency,
                term: term,
                rate: rate, 
                daysYear: daysYear,
                prop: prop
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            }).then( res => {
                history.push('/dashboard');
    
            }).catch( e => {
                console.log(e);
                alert(e.message);
            });
        }
    }

    return (
        <section>
            <Header />
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-gray-900'>Agregar Productos</h1>
            </div>

            <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
                <div class="border-t border-gray-200"></div>
            </div>
            </div>

            <div class="mt-10 sm:mt-0">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Informacion del Usuario</h3>
                            <p class="mt-1 text-sm text-gray-600">es importante que los datos proporcionados sean autenticos.</p>
                        </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={onSaveProduct}>
                            <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5 bg-white sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-4">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">Nombre del producto</label>
                                            <input type="text" onChange={(e)=> setName(e.target.value)} name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">Monto minimo</label>
                                            <input type="text" onChange={(e)=> setMinAmount(e.target.value)} name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">Monto máximo</label>
                                            <input type="text" onChange={(e)=> setMaxAmount(e.target.value)} name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">Plazo minimo</label>
                                            <input type="text" onChange={(e)=> setMinterm(e.target.value)} name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">Plazo máximo</label>
                                            <input type="text" onChange={(e)=> setMaxterm(e.target.value)} name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label for="city" class="block text-sm font-medium text-gray-700">Frecuencia aceptada</label>
                                            <input type="text" onChange={(e)=> setFrecuency(e.target.value)} name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="region" class="block text-sm font-medium text-gray-700">Plazo aceptado</label>
                                            <input type="text" onChange={(e)=> setTerm(e.target.value)} name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="postal-code" class="block text-sm font-medium text-gray-700">Tasa</label>
                                            <input type="text" onChange={(e)=> setRate(e.target.value)} name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-4">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">Días del año para pagar</label>
                                            <input type="text" onChange={(e)=> setDaysYear(e.target.value)} name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="postal-code" class="block text-sm font-medium text-gray-700">Proposito</label>
                                            <input type="text" onChange={(e)=> setProp(e.target.value)} name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>
        </section>
    );
}

export { AddUsers as default };