import React, { useEffect, useState } from 'react';
// import Loader from '../Loader';
import axios from 'axios';
import { history } from '../../router/AppRouter'; 
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../../styles/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashCan, faPenToSquare, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'
// import TareaFormulario from '../listas/TareaFormulario';
// import/first {sweet} from '//cdn.jsdelivr.net/npm/sweetalert2@11'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const ProductHome = () => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(()=>{}, [])
    const [products, setProducts ] = useState([]);
    const [defaultMovile, setDefaultMovile ] = useState();
    const [productStatus, setProductStatus ] = useState();

    useEffect(()=>{
        const loadData = async()=>{
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            const apiResponse = await api.get('/products');
            setProducts(apiResponse.data);
            // setDefaultMovile(apiResponse.data.default_mobile_product)
            // setProductStatus(apiResponse.data.enabled)
            console.log(apiResponse.data)
        }
        loadData()
        console.log('consulta')
    },[])

    const onDelete = async(id) => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //       )
        //     }
        //   })
        
        const token = `Bearer ${sessionStorage.getItem("token")}`;
        api.defaults.headers.common["Authorization"] = token;
        const apiResponse = await api.delete('/products/' + id);
        alert(apiResponse.data)
        history.reload()
    }

    const onDefaultMovileProduct = (status, id) => {
        // console.log(status, id)
        const data ={
            default_mobile_product: status,
        }
        onEdit(data, id)        
    }

    const onEnabledProduct = (status, id) => {
        const data ={
            enabled: status
        }
        onEdit(data, id)       
    }

    const onEdit = (data, id) => {
        api.patch('/products/'+id,{data}, `Bearer ${sessionStorage.getItem("token")}`)
            .then(res=>{
                console.log(res.data);
            })
            window.location.reload(true);
    }

    console.log(defaultMovile)

    return (
        <section>
            <Header />
            <h1 className='text-3xl font-bold text-gray-900'>Productos</h1>
            <div className='relative h-32 w-32'>
                <button className='absolute top-0 right-0 text-white px-3 py-2 bg-sky-500 rounded-md text-sm font-medium' onClick={()=>{history.push('/productadd')}}>Add</button>
                {/* text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 bg-sky-500 rounded-md text-sm font-medium */}
            </div>

            <div className='min-h-full flex items-center justify-center text-center'>            
                <table className='table-auto border-separate border border-slate-500'>
                    <thead>
                        <tr>
                            <th class="border border-slate-600">Nombre</th>
                            <th class="border border-slate-600">Plazo minimo</th>
                            <th class="border border-slate-600">Plazo maximo</th>
                            <th class="border border-slate-600">Monto minimo</th>
                            <th class="border border-slate-600">Monto maximo</th>
                            <th class="border border-slate-600">Tipo de producto</th>
                            <th class="border border-slate-600">Tasa</th>
                            <th class="border border-slate-600">Días del año</th>
                            <th class="border border-slate-600">Por defecto</th>
                            <th class="border border-slate-600">Activo</th>
                            <th class="border border-slate-600" colSpan={2}>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p=>
                            <tr key={p._id} className="border border-slate-700">
                                <td className='border border-slate-700'>{p.product_name}</td>
                                <td class="border border-slate-600">{p.min_term}</td>
                                <td class="border border-slate-600">{p.min_amount}</td>
                                <td class="border border-slate-600">{p.max_term}</td>
                                <td class="border border-slate-600">{p.max_amount}</td>
                                <td class="border border-slate-600">{p.product_type}</td>
                                <td class="border border-slate-600">{p.rate}</td>
                                <td class="border border-slate-600">{p.year_days}</td>
                                <td class="border border-slate-600">{p.default_mobile_product ? <button onClick={() => onDefaultMovileProduct(false, p._id)} className='rounded-sm'> <FontAwesomeIcon className='text-green-400 w-5 h-5' icon={faCircleCheck} /></button> : <button onClick={() => onDefaultMovileProduct(true, p._id)} className='rounded-sm'><FontAwesomeIcon className='text-red-400 w-5 h-5' icon={faCircleXmark} /></button>}</td>
                                <td>{p.enabled ? <button onClick={() => onEnabledProduct(false, p._id)} className='bg-lime-300 rounded-sm text-black p-1'>Activo</button> : <button onClick={() => onEnabledProduct(true, p._id)} className='bg-red-500 text-white rounded-sm p-1'>Inactivo</button>}</td>
                                {/* <td><Link to={`/productedit/${p._id}`}><p className='bg-lime-400 rounded-sm'>Editar</p></Link></td> */}
                                <td><Link to={`/productedit/${p._id}`}><p className='bg-lime-500 rounded-sm'> <FontAwesomeIcon className='text-white' icon={faPenToSquare} /></p></Link></td>
                                <td><Link onClick={() => onDelete(p._id)}><p className='bg-red-500 hover:bg-white rounded-sm'> <FontAwesomeIcon className='text-white' icon={faTrashCan} /></p></Link></td>
                                {/* <td><button onClick={() => onDelete(p._id)}>X</button></td> */}
                            </tr>
                        )}                        
                    </tbody>
                </table>
                
            </div>
        </section>
    );
}

export { ProductHome as default };