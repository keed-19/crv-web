import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { history } from '../../router/AppRouter';
import Header from '../Header';
import '../../styles/scroll.css';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const PRUEBA = ({match}) => {
    const [addressCliente, setAddressCliente] = useState([]);
    const [phonesCliente, setPhonesCliente] = useState([]);
    const [avalesCliente, setAvalesCliente] = useState([]);
    const [guarantor, setGuarantor] = useState([]);
    const [b1, setB1] = useState(false);
    const [b2, setB2] = useState(false);
    const [b3, setB3] = useState(false);
    const [b4, setB4] = useState(false);
    const [b5, setB5] = useState(false);
    const [b6, setB6] = useState(false);

    useEffect(()=>{
        const loadData = async()=>{
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/clients/?id=' + match.params.client_id);
            setAddressCliente(apiResponse.data[0].address);
            setPhonesCliente(apiResponse.data[0].phones);
            setAvalesCliente(apiResponse.data[0].guarantee);
            setGuarantor(apiResponse.data[0].guarantor);
            setB1(true);
            console.log('p',apiResponse.data[0])
        }
        loadData()
    },[match])

    const onSelect = (e)=>{
        // console.log(e.target.value)
        if(e.target.value === 'boton1') {
            setB1(true)
            setB2(false)
            setB3(false)
            setB4(false)
            setB5(false)
            setB6(false)
        } else if(e.target.value === 'boton2') {
            setB1(false)
            setB2(true)
            setB3(false)
            setB4(false)
            setB5(false)
            setB6(false)
        } else if(e.target.value === 'boton3') {
            setB1(false)
            setB2(false)
            setB3(true)
            setB4(false)
            setB5(false)
            setB6(false)
        } else if(e.target.value === 'boton4') {
            setB1(false)
            setB2(false)
            setB3(false)
            setB4(true)
            setB5(false)
            setB6(false)
        } else if(e.target.value === 'boton5') {
            setB1(false)
            setB2(false)
            setB3(false)
            setB4(false)
            setB5(true)
            setB6(false)
        } else if(e.target.value === 'boton6') {
            setB1(false)
            setB2(false)
            setB3(false)
            setB4(false)
            setB5(false)
            setB6(true)
        } 
    }

    return (
        <section>
            <Header />
            <div class="bg-white">
                <div class="pt-6">
                    <div class="relative z-10" role="dialog" aria-modal="true">
                        <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

                        <div class="fixed z-10 inset-0 overflow-y-auto">
                            <div class="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
                                <div class="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                                    <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button type="button" onClick={() => history.push(`/cardClient/${match.params.client_id}`)} class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
                                            <span class="sr-only">Close</span>
                                            {/* <!-- Heroicon name: outline/x --> */}
                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                                            {/* <div class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                                            <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." class="object-center object-cover"/>
                                            </div> */}
                                            <div class="sm:col-span-12 lg:col-span-12">
                                                { b1 === true ? 
                                                    <>
                                                        <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">Dirección</h2>

                                                        <section aria-labelledby="information-heading" class="mt-2">
                                                            <h3 id="information-heading" class="sr-only">Dirección</h3>

                                                            {/* <p class="text-2xl text-gray-900">$192</p> */}

                                                            {/* <!-- Reviews --> */}
                                                            <div class="mt-6 snap-start">
                                                                <h4 class="sr-only">Reviews</h4>
                                                                <div class="flex items-center scroll">
                                                                    {/* direccion y contacto */}
                                                                    <div class="flex items-center justify-center text-center">
                                                                        <table className='w-full table-auto border-separate border border-slate-500'>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Calle 1</th>
                                                                                    <th>Calle 2</th>
                                                                                    <th>Tipo de domicilio</th>
                                                                                    <th>País</th>
                                                                                    <th>Localidad</th>
                                                                                    <th>Municipio</th>
                                                                                    <th>Tipo de domicilio</th>
                                                                                    <th>Estado o provincia</th>
                                                                                    <th>Tiempo de Recidencia</th>
                                                                                    <th>Asentamiento</th>
                                                                                    <th>Calles de referencia</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {addressCliente.map(p=>
                                                                                    <tr key={p._id}>
                                                                                        <td>{p.address_line1}</td>
                                                                                        <td>{p.address_line2}</td>
                                                                                        <td>{p.address_type}</td>
                                                                                        <td>{p.country}</td>
                                                                                        <td>{p.locality}</td>
                                                                                        <td>{p.municipality}</td>
                                                                                        <td>{p.ownership_type}</td>
                                                                                        <td>{p.province}</td>
                                                                                        <td>{p.residence_since}</td>
                                                                                        <td>{p.settlement}</td>
                                                                                        <td>{p.street_reference}</td>
                                                                                    </tr>
                                                                                )}
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <h3 id="information-heading" class="sr-only">Contacto</h3>
                                                            <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12 pt-6">Contacto</h2>

                                                            {/* <p class="text-2xl text-gray-900">$192</p> */}

                                                            {/* <!-- Reviews --> */}
                                                            <div class="mt-6 snap-start">
                                                                <h4 class="sr-only">Reviews</h4>
                                                                <div class="flex items-center scroll">
                                                                    {/* direccion y contacto */}
                                                                    <div class="flex items-center justify-center text-center w-full">
                                                                        <table className='w-full table-auto border-separate border border-slate-500'>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Número</th>
                                                                                    <th>Tipo</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {phonesCliente.map(p=>
                                                                                    <tr key={p.phone}>
                                                                                        <td>{p.phone}</td>
                                                                                        <td>{p.phone_type}</td>
                                                                                    </tr>
                                                                                )}
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </> : 
                                                b2 === true ?
                                                    <>
                                                        <section aria-labelledby="information-heading" class="mt-2">
                                                            <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12 pt-6">Garantías</h2>
                                                            <form class="mt-10">
                                                                <div class="border-t border-gray-200">
                                                                    {avalesCliente.map(x => 
                                                                        <dl key={x.description}>
                                                                            <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                                <dt class="textxs font-medium text-gray-500">Descripción</dt>
                                                                                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.description}</dd>
                                                                            </div>
                                                                            <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                                <dt class="text-xs font-medium text-gray-500">Expiración</dt>
                                                                                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.expiration_date}</dd>
                                                                            </div>
                                                                            <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                                <dt class="text-xs font-medium text-gray-500">Tipo de garantía</dt>
                                                                                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.guarantee_type}</dd>
                                                                            </div>
                                                                            <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                                <dt class="text-xs font-medium text-gray-500">Porcentage</dt>
                                                                                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.percentage}</dd>
                                                                            </div>
                                                                            <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                                <dt class="text-xs font-medium text-gray-500">Valor</dt>
                                                                                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.value}</dd>
                                                                            </div>
                                                                            <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                                <dt class="text-xs font-medium text-gray-500"></dt>
                                                                                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2"></dd>
                                                                            </div>
                                                                        </dl>    
                                                                    )}
                                                                </div>
                                                            </form>
                                                        </section>
                                                    </> :
                                                b3 === true ?
                                                    <>
                                                        <section aria-labelledby="information-heading" class="md:grid mt-2 w-full">
                                                            <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12 pt-6">Avales</h2>
                                                            <div class="w-1/2 border-t border-gray-200 grid-cols-6 gap-6">
                                                                {guarantor.map(x => 
                                                                    <dl key={x.rfc}>
                                                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Nombre de la persona</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.name} {x.lastname} {x.second_lastname}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Nacionalidad</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.nationality}</dd>
                                                                        </div>
                                                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Estado de naciemiento</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.province_of_birth}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Estado civil</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.marital_status}</dd>
                                                                        </div>
                                                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Ocupación</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.ocupation}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">La persona recide en</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.person_resides_in}</dd>
                                                                        </div>
                                                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Giro de la empresa</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.company_works_at}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">País de naciemiento</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.country_of_birth}</dd>
                                                                        </div>
                                                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Curp</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.curp}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Fecha de nacimiento</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.dob}</dd>
                                                                        </div>
                                                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Firma electrónica</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.e_signature}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Correo</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.email}</dd>
                                                                        </div>
                                                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Número de identificación</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.identification_number}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Tipo de identificación</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.identification_type}</dd>
                                                                        </div>
                                                                        <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">RFC</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.rfc}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500">Sexo</dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">{x.sex}</dd>
                                                                        </div>
                                                                        <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt class="text-xs font-medium text-gray-500"></dt>
                                                                            <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2"></dd>
                                                                        </div>
                                                                    </dl>    
                                                                )}
                                                            </div>
                                                            <div class="w-1/4">
                                                                <h3>hola</h3>
                                                            </div>
                                                        </section>
                                                    </> :
                                                b4 === true ?
                                                <>
                                                </> :
                                                b5 === true ?
                                                <>
                                                </> :
                                                b6 === true ?
                                                <>
                                                </> : <></>
                                                }

                                                <div class="border-t border-gray-200 pt-8">
                                                    <dl className='flex items-baseline space-x-4'>
                                                        {b1 === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Dirección y contacto</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton1' onClick={onSelect}>Dirección y contacto</button>}
                                                        {b2 === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Garantía</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton2' onClick={onSelect}>Garantía</button>}
                                                        {b3 === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Avales</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton3' onClick={onSelect}>Avales</button>}
                                                        {b4 === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Referencias personales</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton4' onClick={onSelect}>Referencias personales</button>}
                                                        {b5 === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Datos del negocio</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton5' onClick={onSelect}>Datos del negocio</button>}
                                                        {b6 === true ? <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium link" onClick={onSelect}>Beneficiarios</button> : <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" value='boton6' onClick={onSelect}>Beneficiarios</button>}
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
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

export { PRUEBA as default };
              