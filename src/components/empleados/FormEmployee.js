import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../../App.css';
// import ProductFrecuencyReducer from '../../reducers/ProductFrecuencyReducer';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const FormEmployee = ({employee, onSend}) => {

    const [puestos, setPuestos ] = useState([]);

    // const [termType, DespacharTermType] = useReducer(ProductFrecuencyReducer,[]);

     
    const [name, setName ] = useState('');
    const [aPaterno, setApaterno ] = useState('');
    const [aMaterno, setAmaterno ] = useState('');
    const [email, setEmail ] = useState('');
    const [password1, setPassword1 ] = useState('');
    const [password2, setPassword2 ] = useState('');
    const [fNacimiento, setFnacimiento ] = useState('');
    const [selectPuesto, setSelectPuesto ] = useState('');
    const [workStation, setWorkStation ] = useState('');

    function isObjEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        }        
        return true;
    }

    useEffect(()=>{
        // consulta de las gerarquias para mostrarlos cuando se agregue un cliente
        // console.log(employee)

        const validador = isObjEmpty(employee);
        if(validador !== true){
            setName(employee?.name);
            setApaterno(employee?.lastname);
            setAmaterno(employee?.second_lastname);
            setEmail(employee?.email)
            setPassword1(employee?.password)
            setPassword2(employee?.password)
            setFnacimiento(employee?.dob.substring(0, 10))
            setWorkStation(employee?.workstation)

            // falta llenar el campo de setPosiciones, con la consulta al modelo de posisiones en la api
            // llenar aqi
        } else {
            const loadData = async()=>{
                const token = `Bearer ${sessionStorage.getItem("token")}`;
                api.defaults.headers.common["Authorization"] = token;
                const apiResponse = await api.get('/availableHierarchies');
                setPuestos(apiResponse.data);
                console.log('Respuesta',apiResponse)
            }
            loadData()
            setWorkStation('Seleccionar')
        }
        
        // if(validador === true) {
        //     DespacharTermType({ type:'LLENAR', data: [{identifier: 'S', value: 'Semana(les)', year_periods: '52.1419'}] })
        // }
    },[employee]);

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
    
    // const OnEliminar = (e)=>{
    //     e.preventDefault();
    //     DespacharTermType({
    //         type: 'ELIMINAR',
    //         identifier: e.target.id
    //     })
    // }
    const OnSelectPuesto = (event)=>{
        setSelectPuesto(event.target.value);
    }
    
    const onSave = ()=> {
        // e.preventDefault()
        const data = {
            name: name,
            lastname: aPaterno,
            second_lastname: aMaterno,
            email: email,
            password: password1,
            dob: fNacimiento,
            hierarchy_id: selectPuesto,
        }
        onSend(data)
        // alert(selectPuesto) 
    }

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
                                            <label  for="first-name" className="block text-sm font-medium text-gray-700">Apellido paterno</label>
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
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Contraseña</label>
                                            <input type="text" value={password1} onChange={(e)=> setPassword1(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                                            <input type="text" value={password2} onChange={(e)=> setPassword2(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                            <label for="postal-code" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                                            <input type="text" value={fNacimiento} onChange={(e)=> setFnacimiento(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Posision</label>
                                            {/* <input type="text" value={puestos} onChange={(e)=> setPuestos(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" /> */}
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label>                                                        
                                                        <select onChange={OnSelectPuesto}>
                                                            <option>{workStation}</option>
                                                            {puestos?.map(item => <option value={item._id}>{item.hierarchy_name}</option>)}
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
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

export { FormEmployee as default };
