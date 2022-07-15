import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { history} from '../router/AppRouter';
import conserva from './img/conserva.png';

const Header = () => {

    let name = sessionStorage.getItem("usuario");
    name = JSON.parse(name);

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL_API
    });

    const handlClick = e => {

        // comprueba si el click corresponde al elemento con el data-dropdown-button
        const isDropdownButton = e.target.matches('[data-dropdown-button]') ;
        
        // con esta linea ignora por completo el click, ya que significa que es dentro de un dropdown
        // valida si no es click sobre el data-dropdown-button && el click cae fuera de recuadro data-dropdown
        const closeDropdown = e.target.closest('[data-dropdown]');

        
        if( !isDropdownButton && closeDropdown != null ) {
            return;
        }


        /// buscar el dropdown activo y lo deja activo
        let currentDropdown;

        if( isDropdownButton ){
            currentDropdown = e.target.closest('[data-dropdown]') ;
            currentDropdown.classList.toggle('active');
        }

        document.querySelectorAll('[data-dropdown].active').forEach( dropdown => {
                if( dropdown === currentDropdown ) return;
                dropdown.classList.remove('active');
        })
    }

    useEffect( ()=> {
        // En cada click en el body principal
        window.addEventListener('click', handlClick);

        return () => {
            window.removeEventListener('click',handlClick);
        }


    },[]);

    const handleCerrarSesion = () =>{
        // hacer la peticion de cerrar sesion
        api.post('/users/logout',{},{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
          }).then( res => {            
            alert('¿Esta seguro de cerrar la sesión?');
            sessionStorage.clear();
            history.push('/');
        }).catch( e => {
            console.log(e);
            alert(e.response.data);
        });
    }

    return (
        <header className='header'>

            <div className='min-h-full'>
                <nav className='bg-gray-800'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <button onClick={()=>history.push('/dashboard')}>
                                        <img className='h-8 w-25' src={conserva} alt='Workflow' />
                                    </button>
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-10 flex items-baseline space-x-4'>
                                        <div className="dropdown" data-dropdown>
                                            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" data-dropdown-button>Misiones</button>
                                            <div className="dropdown-menu hidden">
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/applyLoan">Solicitar crédito</Link>
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/employees">Personal</Link>
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/clientes">Clientes</Link>
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/add">Anticipos</Link>
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/comprobacion">Comprobacion</Link>
                                            </div>
                                        </div>

                                        <div className="dropdown" data-dropdown>
                                            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium link" data-dropdown-button>Configuración</button>
                                            <div className="dropdown-menu hidden">
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/generalconfig">General</Link>
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/panelEntrada">Panel de entrada</Link>
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/organigrama">Organigrama</Link>
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/product">Productos</Link>
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/usuarios">Usuarios</Link>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <div className='ml-4 flex items-center md:ml-6'>
                                    <button type='button' className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                        <span className='sr-only'>View notifications</span>
                                        <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' aria-hidden='true'>
                                            <path stroke-linecap='round' stroke-linejoin='round' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                                        </svg>
                                    </button>

                                    <div className='ml-3 relative'>
                                        <div className='dropdown' data-dropdown>
                                            <button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white link' data-dropdown-button>
                                                <img className='h-8 w-8 rounded-full link' data-dropdown-button src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                                            </button>
                                            <div className="dropdown-menu hidden">
                                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/preferences">Preferencias</Link>
                                                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleCerrarSesion}>Cerrar Sesion</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-1 space-m-0'>
                                        <h4 className='text-white px-3 py-2 rounded-md text-sm font-medium'>{name.info.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>            
        </header>
    );
}

export { Header as default };