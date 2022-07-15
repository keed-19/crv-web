import React, { useEffect, useReducer, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../../App.css';
import ProductFrecuencyReducer from '../../reducers/ProductFrecuencyReducer';
import LoanPurposeReduce from '../../reducers/LoanPurposeReduce';

const ProductForm = ({product, onSend}) => {

    const [termType, DespacharTermType] = useReducer(ProductFrecuencyReducer,[]);
    const [prueba, DespacharPrueba] = useReducer(ProductFrecuencyReducer,[]);
    
    // acciones de loan purpose
    const [loanPurpose, DespacharLoanPurpose] = useReducer(LoanPurposeReduce,[]);

     
    const [name, setName ] = useState('');
    const [image, setImage ] = useState('');
    const [logo, setLogo ] = useState('');
    const [minAmount, setMinAmount ] = useState('');
    const [maxAmount, setMaxAmount ] = useState('');
    const [minterm, setMinterm ] = useState('');
    const [maxterm, setMaxterm ] = useState('');
    const [productType, setProductType ] = useState('');
    const [valorSelect, setValorSelect ] = useState([]);
    const [termSelect, setTermSelect ] = useState([]);
    const [purpose, setPurpose ] = useState([]);
    const [rate, setRate ] = useState('');
    const [daysYear, setDaysYear ] = useState('');
    const [description, setDescription ] = useState('');
    const [valuesPurpose, setValuesPurpose ] = useState([]);
    const [valuesPrueba, setValuesPrueba ] = useState([]);
    const [termTypeAlowed, setTermTypeAlowed ] = useState([]);
    const [stepAmount, setStepAmount ] = useState('');
    const [defaultAmount, setDefaultAmount ] = useState('');
    const [defaultTerm, setDefaultTerm ] = useState('');
    // const [defaultMovileP, setDefaultMovileP ] = useState([]);
    // const [selectdefaultMovileP, setSelectDefaultMovileP ] = useState('');
    // const [selectMostrar, setSelectMostrar ] = useState('');
    // console.log('product: ', product)

    function isObjEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        }        
        return true;
    }

    useEffect(()=>{
        const validador = isObjEmpty(product);
        // setDefaultMovileP([{id: true, value: 'Si'}, {id: false, value: 'No'}])
        if(validador === false){
            setName(product.product_name);
            setStepAmount(product.step_amount)
            setMinAmount(product.min_amount);
            setMaxAmount(product.max_amount);
            setDefaultAmount(product.default_amount)
            setMinterm(product.min_term)
            setMaxterm(product.max_term)
            setDefaultTerm(product.default_term)
            setProductType(product.product_type)
            setImage(product.avatar)
            setLogo(product.logo)
            setDescription(product.description)
            // const resultado = defaultMovileP.find( x => x.id === product.default_mobile_product );
            // setSelectMostrar(resultado.value)

            DespacharPrueba({ type:'LLENAR', data: product.allowed_frequency })

            // a este le falta un campo para que funcione de manera correcta
            DespacharTermType({ type:'LLENAR', data: product.allowed_term_type })
            
            // loan purpose
            DespacharLoanPurpose({ type:'LLENAR', data: product.loan_purpose })

            // setTerm(product.allowed_term_type)
            setRate(product.rate)
            setDaysYear(product.year_days)
        }
        
        if(validador === true) {
            DespacharPrueba({ type:'LLENAR', data: [{identifier: 'S1', value: 'Semanal'}] })
            DespacharTermType({ type:'LLENAR', data: [{identifier: 'S', value: 'Semana(les)', year_periods: '52.1419'}] })
            DespacharLoanPurpose({ type:'LLENAR', data: [{external_id: '1', description: 'remodelacion de negocio'}] })
            // const resultado = defaultMovileP.find( x => x.id === selectdefaultMovileP );
            // setSelectMostrar('Seleccionar')
        }

        setValuesPrueba([
            {
              value: 'Semanal',
              identifier: 'Sl'
            },
            {
              value: 'Mensual',
              identifier: 'Ml'
            },
            {
              value: 'Quincenal',
              identifier: 'Ql'
            },
            {
              value: 'Catorcenal',
              identifier: 'Fl'
            },
            {
              value: 'Bimestral',
              identifier: 'Bi'
            },
            {
                value: 'Trimestral',
                identifier: 'Tr'
            }
        ]);

        setTermTypeAlowed([
            {
                value: 'Semana(les)',
                identifier: 'S',
                year_periods: '52.1429'
            },
            {
                value: 'Catorcena(les)',
                identifier: 'C',
                year_periods: '26'
            },
            {
                value: 'Quincena(les)',
                identifier: 'Q',
                year_periods: '26.0714'
            },
            {
                value: 'Mes(es)',
                identifier: 'M',
                year_periods: '12'
            },
            {
                value: 'Bimestre(s)',
                identifier: 'B',
                year_periods: '6'
            },
            {
                value: 'Trimestre(s)',
                identifier: 'T',
                year_periods: '4'
            }
        ]);

        setValuesPurpose([
            { 
                external_id: '1', 
                description: 'remodelacion de negocio' 
            },
            { 
                external_id: '2', 
                description: 'techado de casa habitacion' 
            },
            { 
                external_id: '3', 
                description: 'compra de materiales de obra' 
            }
        ]);
    },[product]);

    // console.log('se llena? : ' + termType)

    // provando la nueva funcionalidad, con datos para agregar un producto, aun no lo he provado
    const handleChange = async(event)=>{
        await setValorSelect(event.target.value);
    }

    const OnhandleChangeTerm = async(event)=>{
        await setTermSelect(event.target.value);
    }

    const OnPorpuseValue = async(event)=>{
        await setPurpose(event.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const resultado = valuesPrueba.find( x => x.value === valorSelect );
        DespacharPrueba({
            type: 'AGREGAR',
            identifier: resultado.identifier,
            value: resultado.value
        });
    }

    const handleSubmitTermType = async(e) => {
        e.preventDefault();
        const resultadoTermType = termTypeAlowed.find( i => i.value === termSelect );      
        DespacharTermType({
            type: 'AGREGAR',
            identifier: resultadoTermType.identifier,
            value: resultadoTermType.value,
            year_periods: resultadoTermType.year_periods
        });
    }

    const handleSubmitPurpose = async(e) => {
        e.preventDefault();
        const resultadoPurpose = valuesPurpose.find( j => j.description === purpose );     
        DespacharLoanPurpose({
            type: 'AGREGAR',
            external_id: resultadoPurpose.external_id,
            description: resultadoPurpose.description
        });
    }
    
    const OnEliminar = (e)=>{
        e.preventDefault();
        // console.log('valor: delete: ',e.target.id)
        DespacharPrueba({
            type: 'ELIMINAR',
            identifier: e.target.id
        })
        DespacharTermType({
            type: 'ELIMINAR',
            identifier: e.target.id
        })
        DespacharLoanPurpose({
            type: 'ELIMINAR',
            external_id: e.target.id
        })
    }

    const base64Logo = (logob) => {
        var reader = new FileReader();
        reader.readAsDataURL(logob[0])
        console.log('hola', logob);
        reader.onload = function() {
            var arrayAuxiliar = []
            var base64 = reader.result
            arrayAuxiliar = base64.split(',')
            // console.log(arrayAuxiliar[1])
            setLogo(arrayAuxiliar[1])
        }
    }

    const base64avatar = (avatarImg) => {
        var reader = new FileReader();
        reader.readAsDataURL(avatarImg[0])
        console.log('hola', avatarImg);
        reader.onload = function() {
            var arrayAuxiliar = []
            var base64 = reader.result
            arrayAuxiliar = base64.split(',')
            // console.log(arrayAuxiliar[1])
            setImage(arrayAuxiliar[1])
        }
    }

    // const OnSelectDefault = (event)=>{
    //     // setDefaultMovileP(event.target.value);
    //     setSelectDefaultMovileP(event.target.value)
    // }

    const onSave = ()=> {
        const data = {
            product_name: name,
            step_amount: stepAmount,
            min_amount: minAmount,
            max_amount: maxAmount,
            default_amount: defaultAmount,
            min_term: minterm,
            max_term: maxterm,
            default_term: defaultTerm,
            allowed_frequency: prueba,
            allowed_term_type: termType,
            rate: rate,
            year_days: daysYear,
            loan_purpose: loanPurpose,
            product_type: productType,
            avatar: image,
            logo: logo,
            description: description,
            // default_mobile_product: selectdefaultMovileP
        }
        onSend(data)
        // console.log(data) 
    }
    // console.log(image)

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
                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Nombre del producto</label>
                                            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Cantidad de paso</label>
                                            <input type="text" value={stepAmount} onChange={(e)=> setStepAmount(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Monto minimo</label>
                                            <input type="text" value={minAmount} onChange={(e)=> setMinAmount(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Monto máximo</label>
                                            <input type="text" value={maxAmount} onChange={(e)=> setMaxAmount(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Monto por defecto</label>
                                            <input type="text" value={defaultAmount} onChange={(e)=> setDefaultAmount(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Plazo minimo</label>
                                            <input type="text" value={minterm} onChange={(e)=> setMinterm(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Plazo máximo</label>
                                            <input type="text" value={maxterm} onChange={(e)=> setMaxterm(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Plazo por defecto</label>
                                            <input type="text" value={defaultTerm} onChange={(e)=> setDefaultTerm(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="postal-code" className="block text-sm font-medium text-gray-700">Tasa</label>
                                            <input type="text" value={rate} onChange={(e)=> setRate(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Días del año para pagar</label>
                                            <input type="text" value={daysYear} onChange={(e)=> setDaysYear(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="postal-code" className="block text-sm font-medium text-gray-700">Tipo de Producto</label>
                                            <input type="text" value={productType} onChange={(e)=> setProductType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        
                                        {/* allowed_term_type */}
                                        <div class="col-span-6 sm:col-span-3 items-center justify-center">
                                            <label for="country" class="block text-sm font-medium text-gray-700">Tipos de plasos permitidos</label>                                            
                                            <div className='tarea-formulario'>
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
                                            </div>

                                            {termType?.map((j)=>
                                                <div className='tarea-contenedor' id={j.identifier}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j.value}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j.identifier} 
                                                        onClick={OnEliminar}>
                                                        <AiOutlineCloseCircle id={j.identifier} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="country" class="block text-sm font-medium text-gray-700">Frecuencia aceptada</label>
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label>                                                        
                                                        <select onChange={handleChange}>
                                                            <option value=''>Seleccionar</option>
                                                            {valuesPrueba?.map(country => <option value={country.value}>{country.value}</option>)}
                                                        </select>
                                                    </label>
                                                    <div className='tarea-contenedor-iconos'>
                                                        <button onClick={handleSubmit}>add</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {prueba?.map((i)=>
                                                <div className='tarea-contenedor' id={i.identifier}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {i.value}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={i.identifier} 
                                                        onClick={OnEliminar}>
                                                        <AiOutlineCloseCircle id={i.identifier} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}                                     
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="item" class="block text-sm font-medium text-gray-700">Proposito</label>
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label>                                                        
                                                        <select onChange={OnPorpuseValue}>
                                                            <option value=''>Seleccionar</option>
                                                            {valuesPurpose?.map(item => <option value={item.description}>{item.description}</option>)}
                                                        </select>
                                                    </label>
                                                    <div className='tarea-contenedor-iconos'>
                                                        <button onClick={handleSubmitPurpose}>add</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {loanPurpose?.map((i)=>
                                                <div className='tarea-contenedor' id={i.external_id}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {i.description}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={i.external_id} 
                                                        onClick={OnEliminar}>
                                                        <AiOutlineCloseCircle id={i.external_id} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}                                     
                                        </div>

                                        <div className='col-span-6 sm:col-span-3'>
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Avatar del producto</label>
                                            {/* <input type="file" onChange={(e)=> setImage(e.target.file)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" /> */}
                                            <input type="file" onChange={(e)=> base64avatar(e.target.files)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {/* <img src={`data:image/jpeg;base64${image}`} /> */}
                                            <img src={`data:image/jpeg;base64,${image}`} alt="" width="250rem" height="250rem" />
                                            {/* <img src="" alt=""> */}
                                        </div>

                                        <div className='col-span-6 sm:col-span-2'>
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Logo del producto</label>
                                            <input type="file" onChange={(e)=> base64Logo(e.target.files)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            {/* <img src={`data:image/jpeg;base64${logo}`} > */}
                                            <img src={`data:image/jpeg;base64,${logo}`} alt="" width="250rem" height="250rem" />
                                        </div>

                                        <div className='col-span-6 sm:col-span-2'>
                                        <label for="postal-code" className="block text-sm font-medium text-gray-700">Descripción</label>
                                            {/* <input type="text" value={rate} onChange={(e)=> setRate(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" /> */}
                                        <textarea value={description} onChange={(e)=> setDescription(e.target.value)} rows="8" cols="50"></textarea>
                                        </div>

                                        {/* <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Producto por default de la App</label>
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label>                                                        
                                                        <select onChange={OnSelectDefault} default={selectdefaultMovileP}>
                                                            <option>{selectMostrar}</option>
                                                            {defaultMovileP?.map(item => <option value={item.id}>{item.value}</option>)}
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}
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

export { ProductForm as default };