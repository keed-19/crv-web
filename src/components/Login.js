import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import axios from 'axios';
import { history } from '../router/AppRouter';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const Login = () => {
    
    const [usuario, setUsuario ] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    

    const onLogin = (e)=> {
        e.preventDefault();

        setUsuario('');
        setContrasena('');
        setError('');

        setLoading(true);

        api.post('/users/login',{
            email: usuario,
            password: contrasena
        }).then( res => {
            console.log(res)
            sessionStorage.setItem("usuario",JSON.stringify({
                    info: res.data.user 
                } 
            ));
            sessionStorage.setItem("token", res.data.token);
            setLoading(false);
            setError('');
            history.push('/dashboard');

        }).catch( e => {
            console.log(e);
            alert(e.message);
            setLoading(false);
            setUsuario('');
            setContrasena('');
        });
    }

    return (
        <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto h-12 w-auto'>
                <form
                className='mt-8 space-y-6'
                onSubmit={onLogin}>

                    {/* <FontAwesomeIcon
                    className='text-gray-300  mb-5'
                    icon={faUserCircle} size='6x' /> */}
                    <div className='rounded-md shadow-sm -space-y-px'>
                        
                        <input 
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address'
                                type="text"
                                value={usuario}
                                onChange={(e)=> setUsuario(e.target.value)} 
                                placeholder="Usuario / Correo electronico"
                                required>
                        </input>
                        
                        <input 
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                type="password"
                                value={contrasena}
                                onChange={(e)=> setContrasena(e.target.value)}
                                placeholder="Contraseña"
                                required>
                        </input>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input id="remember-me" name="remember-me" type="checkbox" className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
                            <label for="remember-me" className='ml-2 block text-sm text-gray-900'> Remember me </label>
                        </div>

                        <div className='text-sm'>
                            <Link className='font-medium text-indigo-600 hover:text-indigo-500' to='/recpass'>Forgot your password?</Link>
                        </div>
                    </div>

                    <input 
                        type="submit" 
                        value="Iniciar"
                        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        ></input>
                    { error && <p>{error}</p> }
                </form>
                { loading && <Loader /> }
            </div>
        </div>
    );
}

export { Login as default };