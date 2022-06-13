import React, { useEffect, useState } from 'react';
// import Loader from '../Loader';
import axios from 'axios';
import { history } from '../../router/AppRouter'; 
import Header from '../Header';
import { Link } from 'react-router-dom';
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
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Plazo minimo</th>
                            <th>Plazo maximo</th>
                            <th>Monto minimo</th>
                            <th>Monto maximo</th>
                            <th>Tipo de producto</th>
                            <th>Tasa</th>
                            <th>Días del año</th>
                            <th>Default de la App</th>
                            <th>Activo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p=>
                            <tr key={p._id}>
                                <td>{p.product_name}</td>
                                <td>{p.min_term}</td>
                                <td>{p.max_term}</td>
                                <td>{p.min_amount}</td>
                                <td>{p.max_amount}</td>
                                <td>{p.product_type}</td>
                                <td>{p.rate}</td>
                                <td>{p.year_days}</td>
                                <td>{p.default_mobile_product ? <button onClick={() => onDefaultMovileProduct(false, p._id)} className='bg-green-600 rounded-sm'>Si</button> : <button onClick={() => onDefaultMovileProduct(true, p._id)} className='bg-red-600 rounded-sm'>No</button>}</td>
                                <td>{p.enabled ? <button onClick={() => onEnabledProduct(false, p._id)} className='bg-green-600 rounded-sm'>Activo</button> : <button onClick={() => onEnabledProduct(true, p._id)} className='bg-red-600 rounded-sm'>Inactivo</button>}</td>
                                <td><Link to={`/productedit/${p._id}`}><p className='bg-lime-400 rounded-sm'>Editar</p></Link></td>
                                <td><button onClick={() => onDelete(p._id)}>X</button></td>
                            </tr>
                        )}                        
                    </tbody>
                </table>
                
            </div>
        </section>
    );
}

export { ProductHome as default };