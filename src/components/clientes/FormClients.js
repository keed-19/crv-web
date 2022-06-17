import React, { useEffect, useReducer, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../../App.css';
import AddressReducer from '../../reducers/AddressReducer';
import BeneficiariosReducer from '../../reducers/BeneficiariosReducer';
import ClientPhoneReducer from '../../reducers/ClientPhoneReducer';

const FormClients = ({clients, onSend}) => {

    const [PhoneClient, DespacharPhoneClient] = useReducer(ClientPhoneReducer,[]);
    const [address, DespacharAddress] = useReducer(AddressReducer,[]);

     
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
    const [dob, setDob ] = useState('');
    // const [segmento, setSegmento ] = useState('');
    const [phone, setPhone ] = useState('');
    const [typePhone, setTypePhone ] = useState('');
    const [propertyPhone, setPropertyPhone ] = useState('');
    const [countryOfBirth, setCountryOfBirth ] = useState('');
    const [provinceOfBirth, setProvinceOfBirth ] = useState('');
    const [nationality, setNationality ] = useState('');
    const [maritalStatus, setMaritalStatus ] = useState('');
    const [ocupation, setOcupation ] = useState('');
    const [rfc, setRfc ] = useState('');
    const [tributaryRegime, setTributaryRegime ] = useState('');
    // const [posiciones, setPosiciones ] = useState([]);
    
    // constantes para direccion
    const [addressLine, setAddressLine ] = useState('');
    const [addressType, setAddressType ] = useState('');
    const [federalEntity, setFederalEntity ] = useState('');
    const [municipality, setMunicipality ] = useState('');
    const [city, setCity ] = useState('');
    const [country, setCountry ] = useState('');
    const [residenceSince, setResidenceSince ] = useState('');
    const [streetReference, setStreetReference ] = useState('');
    const [defaultA, setDefaultA ] = useState('');
    const [ownershipType, setOwnershipType ] = useState('');

    // constantes para definir los beneficiarios
    const [PhoneB, DespacharPhoneB] = useReducer(ClientPhoneReducer,[]);
    const [addressB, DespacharAddressB] = useReducer(AddressReducer,[]);
    const [beneficiares, DespacharBeneficiares] = useReducer(BeneficiariosReducer,[]);

    const [nameb, setNameb] = useState('');
    const [lastNameb, setLastNameb] = useState('');
    const [secondLastname, setSecondLastname] = useState('');    
    const [dobB, setDobB] = useState('');

    const [addressLineB, setAddressLineB ] = useState('');
    const [addressTypeB, setAddressTypeB ] = useState('');
    const [federalEntityB, setFederalEntityB ] = useState('');
    const [municipalityB, setMunicipalityB ] = useState('');
    const [cityB, setCityB ] = useState('');
    const [countryB, setCountryB ] = useState('');
    const [residenceSinceB, setResidenceSinceB ] = useState('');
    const [streetReferenceB, setStreetReferenceB ] = useState('');
    const [defaultAB, setDefaultAB ] = useState('');
    const [ownershipTypeB, setOwnershipTypeB ] = useState('');

    const [percentage, setPercentage ] = useState('');

    const [phoneB, setPhoneB ] = useState('');
    const [typePhoneB, setTypePhoneB ] = useState('');
    const [propertyPhoneB, setPropertyPhoneB ] = useState('');

    const [relationship, setrelationship ] = useState('');

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
            setLoanCicle(clients.loan_cycle)
            setCountryOfBirth(clients.country_of_birth)
            setProvinceOfBirth(clients.province_of_birth)
            setNationality(clients.nationality)
            setMaritalStatus(clients.marital_status)
            setOcupation(clients.ocupation)
            setRfc(clients.rfc)
            setTributaryRegime(clients.tributary_regime)
            // setPhones(clients.phones)
            setEscolaridad(clients.scolarship)
            setDob(clients.dob.substring(0, 10))

            // a este le falta un campo para que funcione de manera correcta
            DespacharPhoneClient({ type:'LLENAR', data: clients.phones })
            DespacharAddress({ type:'LLENAR', data: clients.address })


            console.log(clients.beneficiaries.length)
            for(let i = 0; i<=clients.beneficiaries.length; i++) {
                console.log('beneficiarios', clients.beneficiaries[i].address)
                DespacharAddressB({ type:'LLENAR', data: clients.beneficiaries[i].address })
            }
            DespacharPhoneB({ type:'LLENAR', data: clients.beneficiaries.phones })

            setExternalId(clients.external_id)

            // falta llenar el campo de setPosiciones, con la consulta al modelo de posisiones en la api
            // llenar aqi
        }
        
        // if(validador === true) {
        //     // DespacharTermType({ type:'LLENAR', data: [{identifier: 'S', value: 'Semana(les)', year_periods: '52.1419'}] })
        // }
    },[clients]);

    console.log('sm', beneficiares)

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

    const OnEliminarAddress = (e) => {
        e.preventDefault();
        DespacharAddress({
            type: 'ELIMINAR',
            address_line: e.target.id
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

    const onAddAddress = (e) => {
        e.preventDefault();

        DespacharAddress({
            type: 'AGREGAR',
            address_line: addressLine,
            city: city,
            municipality: municipality,
            province: federalEntity,
            country: country,
            address_type: addressType,
            ownership_type: ownershipType,
            residence_since: residenceSince,
            street_reference: streetReference,
            default: defaultA
        });
    }

    // console.log(PhoneClient)

    const onSave = ()=> {
        // e.preventDefault()
        const data = {
            address: address,
            branch: branch,
            bussiness_data: [],
            beneficiaries: beneficiares,
            dob: dob,
            country_of_birth: countryOfBirth,
            province_of_birth: provinceOfBirth,
            nationality: nationality,
            marital_status: maritalStatus,
            ocupation: ocupation,
            rfc: rfc,
            tributary_regime: tributaryRegime,
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
            loan_cycle: loanCicle,
            phones: PhoneClient,
            scolarship: escolaridad,
            // segmento: segmento
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

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                                            <input type="text" value={dob} onChange={(e)=> setDob(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">País de nacimiento</label>
                                            <input type="text" value={countryOfBirth} onChange={(e)=> setCountryOfBirth(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Estado de nacimiento</label>
                                            <input type="text" value={provinceOfBirth} onChange={(e)=> setProvinceOfBirth(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Nacionalidad</label>
                                            <input type="text" value={nationality} onChange={(e)=> setNationality(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Estado civil</label>
                                            <input type="text" value={maritalStatus} onChange={(e)=> setMaritalStatus(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Ocupación</label>
                                            <input type="text" value={ocupation} onChange={(e)=> setOcupation(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Tipo de cliente</label>
                                            <input type="text" value={clientType} onChange={(e)=> setClientType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Curp</label>
                                            <input type="text" value={curp} onChange={(e)=> setCurp(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">RFC</label>
                                            <input type="text" value={rfc} onChange={(e)=> setRfc(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Regimen tributario</label>
                                            <input type="text" value={tributaryRegime} onChange={(e)=> setTributaryRegime(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Sucursal</label>
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

                                        {/* <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Segmento</label>
                                            <input type="text" value={segmento} onChange={(e)=> setSegmento(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div> */}
                                        
                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <label className="block text-sm font-medium text-gray-700">Dirección del cliente</label>
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                            {/* <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label> */}
                                                <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label>
                                                    <input type="text" value={addressLine} onChange={(e)=> setAddressLine(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de domicilio</label>
                                                    <input type="text" value={addressType} onChange={(e)=> setAddressType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de recidencia</label>
                                                    <input type="text" value={ownershipType} onChange={(e)=> setOwnershipType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Entidad federativa</label>
                                                    <input type="text" value={federalEntity} onChange={(e)=> setFederalEntity(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Municipio</label>
                                                    <input type="text" value={municipality} onChange={(e)=> setMunicipality(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Ciudad</label>
                                                    <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">País</label>
                                                    <input type="text" value={country} onChange={(e)=> setCountry(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tiempo de residencia</label>
                                                    <input type="text" value={residenceSince} onChange={(e)=> setResidenceSince(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Calles de referencia</label>
                                                    <input type="text" value={streetReference} onChange={(e)=> setStreetReference(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección Actual</label>
                                                    <input type="text" value={defaultA} onChange={(e)=> setDefaultA(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <button onClick={onAddAddress}>add</button>
                                                </div>
                                            </div>

                                            {address?.map((x)=>
                                                <div className='tarea-contenedor' id={x.address_line}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {x.address_line}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={x.address_line} 
                                                        onClick={OnEliminarAddress}>
                                                        <AiOutlineCloseCircle id={x.address_line} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
                                                    <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo</label>
                                                    <input type="text" value={typePhone} onChange={(e)=> setTypePhone(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />                                          
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
                                            </div>
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

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <label className="block text-sm font-medium text-gray-700">Beneficiarios</label>
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                            <input type="text" value={nameb} onChange={(e)=> setNameb(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido paterno</label>
                                            <input type="text" value={lastNameb} onChange={(e)=> setLastNameb(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido materno</label>
                                            <input type="text" value={secondLastname} onChange={(e)=> setSecondLastname(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                                            <input type="text" value={dobB} onChange={(e)=> setDobB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Porcentaje</label>
                                            <input type="text" value={percentage} onChange={(e)=> setPercentage(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Relación</label>
                                            <input type="text" value={relationship} onChange={(e)=> setrelationship(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                            {/* <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label> */}
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label>

                                                    <input type="text" value={addressLineB} onChange={(e)=> setAddressLineB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de domicilio</label>
                                                    <input type="text" value={addressTypeB} onChange={(e)=> setAddressTypeB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de recidencia</label>
                                                    <input type="text" value={ownershipTypeB} onChange={(e)=> setOwnershipTypeB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Entidad federativa</label>
                                                    <input type="text" value={federalEntityB} onChange={(e)=> setFederalEntityB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Municipio</label>
                                                    <input type="text" value={municipalityB} onChange={(e)=> setMunicipalityB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Ciudad</label>
                                                    <input type="text" value={cityB} onChange={(e)=> setCityB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">País</label>
                                                    <input type="text" value={countryB} onChange={(e)=> setCountryB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tiempo de residencia</label>
                                                    <input type="text" value={residenceSinceB} onChange={(e)=> setResidenceSinceB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Calles de referencia</label>
                                                    <input type="text" value={streetReferenceB} onChange={(e)=> setStreetReferenceB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección Actual</label>
                                                    <input type="text" value={defaultAB} onChange={(e)=> setDefaultAB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <button onClick={onAddAddress}>add</button>
                                                </div>
                                            </div>

                                            {addressB?.map((x)=>
                                                <div className='tarea-contenedor' id={x.address_line}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {x.address_line}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={x.address_line} 
                                                        onClick={OnEliminarAddress}>
                                                        <AiOutlineCloseCircle id={x.address_line} className='tarea-icono text-black' />
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
