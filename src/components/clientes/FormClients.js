import React, { useEffect, useReducer, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../../App.css';
import ClientPhoneReducer from '../../reducers/ClientPhoneReducer';

const FormClients = ({clients, onSend}) => {

    const [PhoneClient, DespacharPhoneClient] = useReducer(ClientPhoneReducer,[]);

     
    const [name, setName ] = useState('');
    const [aPaterno, setApaterno ] = useState('');
    const [aMaterno, setAmaterno ] = useState('');
    const [email, setEmail ] = useState('');
    const [clientType, setClientType ] = useState('');
    const [curp, setCurp ] = useState('');
    const [externalId, setExternalId ] = useState('');
    const [branch, setBranch ] = useState('');
    const [gender, setGender ] = useState('');
    const [ineFolio, setIneFolio ] = useState('');
    const [loanCicle, setLoanCicle ] = useState('');
    const [escolaridad, setEscolaridad ] = useState('');
    const [segmento, setSegmento ] = useState('');
    const [phone, setPhone ] = useState('');
    const [typePhone, setTypePhone ] = useState('');
    const [propertyPhone, setPropertyPhone ] = useState('');
    // const [posiciones, setPosiciones ] = useState([]);

    function isObjEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        }        
        return true;
    }

    useEffect(()=>{
        console.log(clients)
        const validador = isObjEmpty(clients);
        if(validador === false){
            setName(clients.name);
            setApaterno(clients.lastname);
            setBranch(clients.branch)
            setAmaterno(clients.second_lastname);
            setEmail(clients.email)
            setClientType(clients.client_type)
            setCurp(clients.curp)
            setGender(clients.gender)
            setIneFolio(clients.ine_folio)
            setLoanCicle(clients.loan_cicle)
            // setPhones(clients.phones)
            setEscolaridad(clients.scolarship)
            setSegmento(clients.segmento)

            // a este le falta un campo para que funcione de manera correcta
            DespacharPhoneClient({ type:'LLENAR', data: clients.phones })

            setExternalId(clients.external_id)

            // falta llenar el campo de setPosiciones, con la consulta al modelo de posisiones en la api
            // llenar aqi
        }
        
        if(validador === true) {
            // DespacharTermType({ type:'LLENAR', data: [{identifier: 'S', value: 'Semana(les)', year_periods: '52.1419'}] })
        }
    },[clients]);

    // console.log('se llena? : ' + termType)

    // provando la nueva funcionalidad, con datos para agregar un producto, aun no lo he provado
    // const handleChange = async(event)=>{
    //     await setValorSelect(event.target.value);
    // }

    // const OnhandleChangeTerm = async(event)=>{
    //     await setTermSelect(event.target.value);
    // }

    // const OnPorpuseValue = async(event)=>{
    //     await setPurpose(event.target.value);
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     const resultado = valuesPrueba.find( x => x.value === valorSelect );
    //     DespacharPrueba({
    //         type: 'AGREGAR',
    //         identifier: resultado.identifier,
    //         value: resultado.value
    //     });
    // }

    // const handleSubmitTermType = async(e) => {
    //     e.preventDefault();
    //     const resultadoTermType = termTypeAlowed.find( i => i.value === termSelect );      
    //     DespacharTermType({
    //         type: 'AGREGAR',
    //         identifier: resultadoTermType.identifier,
    //         value: resultadoTermType.value,
    //         year_periods: resultadoTermType.year_periods
    //     });
    // }

    // const handleSubmitPurpose = async(e) => {
    //     e.preventDefault();
    //     const resultadoPurpose = valuesPurpose.find( j => j.description === purpose );     
    //     DespacharLoanPurpose({
    //         type: 'AGREGAR',
    //         external_id: resultadoPurpose.external_id,
    //         description: resultadoPurpose.description
    //     });
    // }
    
    const OnEliminar = (e)=>{
        e.preventDefault();
        DespacharPhoneClient({
            type: 'ELIMINAR',
            phone: e.target.id
        })
    }

    const onAddPhone = (e) => {
        e.preventDefault();

        DespacharPhoneClient({
            type: 'AGREGAR',
            phone: phone,
            phone_type: typePhone,
            phone_propierty: propertyPhone
        });
    }

    // console.log(PhoneClient)

    const onSave = ()=> {
        // e.preventDefault()
        const data = {
            address: [],
            branch: branch,
            bussiness_data: [],
            client_type: clientType,
            credit_circuit_data: [],
            curp: curp,
            email: email,
            external_id: externalId,
            gender: gender,
            ine_folio: ineFolio,
            is_new: true,
            name: name,
            lastname: aPaterno,
            second_lastname: aMaterno,
            loan_cicle: loanCicle,
            phones: PhoneClient,
            scolarship: escolaridad,
            segmento: segmento
        }
        onSend(data)
        // console.log(data) 
    }

    // console.log(typeof(externalId))

    return (
        <section>

            <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
                <div className="border-t border-gray-200"></div>
            </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    
                    <div className="mt-5 md:mt-0 md:col-span-6 form-style">
                        <form onSubmit={onSave}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Apellido paterno</label>
                                            <input type="text" value={aPaterno} onChange={(e)=> setApaterno(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido materno</label>
                                            <input type="text" value={aMaterno} onChange={(e)=> setAmaterno(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Tipo de cliente</label>
                                            <input type="text" value={clientType} onChange={(e)=> setClientType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Curp</label>
                                            <input type="text" value={curp} onChange={(e)=> setCurp(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-4">
                                            <label for="postal-code" className="block text-sm font-medium text-gray-700">External id</label>
                                            <input type="text" value={externalId} onChange={(e)=> setExternalId(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Genero</label>
                                            <input type="text" value={gender} onChange={(e)=> setGender(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Folio del INE</label>
                                            <input type="text" value={ineFolio} onChange={(e)=> setIneFolio(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Rama</label>
                                            <input type="text" value={branch} onChange={(e)=> setBranch(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">círculo de préstamo</label>
                                            <input type="text" value={loanCicle} onChange={(e)=> setLoanCicle(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Grado de estudio</label>
                                            <input type="text" value={escolaridad} onChange={(e)=> setEscolaridad(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Segmento</label>
                                            <input type="text" value={segmento} onChange={(e)=> setSegmento(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        {/* <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
                                            <input type="text" value={phones} onChange={(e)=> setPhones(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div> */}

                                        {/* <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Posision</label>
                                            <input type="text" value={phones} onChange={(e)=> setPhones(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div> */}

                                        {/* <fieldset>
                                            <legend>¿Es propio?</legend>
                                            <label>
                                                <input type="radio" name="color" value="Si" /> Si
                                            </label>
                                            <label>
                                                <input type="radio" name="color" value="No" />  No
                                            </label>
                                        </fieldset> */}

                                        <div class="col-span-4 sm:col-span-2 items-center justify-center">
                                            {/* <label for="country" class="block text-sm font-medium text-gray-700">Números de telefonos</label>                                             */}
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
                                                    <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo</label>
                                                    <input type="text" value={typePhone} onChange={(e)=> setTypePhone(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                
                                                    {/* <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo</label>
                                                    <input type="text" value={propertyPhone} onChange={(e)=> setPropertyPhone(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" /> */}


                                                    <fieldset>
                                                        <legend>¿Es propio?</legend>
                                                        <label>
                                                            <input type="radio" onChange={(e)=> setPropertyPhone(true)} /> Si
                                                        </label>
                                                        <label>
                                                            <input type="radio" onChange={(e)=> setPropertyPhone(false)} />  No
                                                        </label>

                                                    </fieldset>

                                                    <button onClick={onAddPhone}>add</button>
                                                </div>

                                                {/* <div >
                                                </div> */}
                                            </div>
                                            {/* <div className='tarea-formulario'>
                                                <div>
                                                    <label>                                                        
                                                        <select onChange={OnhandleChangeTerm}>
                                                            <option value=''>Seleccionar</option>
                                                            {termTypeAlowed?.map(country => <option value={country.value}>{country.value}</option>)}
                                                        </select>
                                                    </label>
                                                    <div className='tarea-contenedor-iconos'>
                                                        <button onClick={handleSubmitTermType}>add</button>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {PhoneClient?.map((j)=>
                                                <div className='tarea-contenedor' id={j.phone}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j.phone}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j.phone} 
                                                        onClick={OnEliminar}>
                                                        <AiOutlineCloseCircle id={j.phone} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>
        </section>
    );
}

export { FormClients as default };
