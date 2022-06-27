import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/login.css'


const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

const Organigrama2 = () =>{

    // const [hierarchies, setHierarchies] = useState([]);

    class TreeNode {
        constructor(id,hierarchy_name,workstation, employee){
            this.id = id;
            this.hierarchy_name =hierarchy_name;
            this.workstation = workstation;
            this.employee = employee;
            this.hijos = [];
        }
    }

    function handleClick () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    }

    const construirArbolHTML = (data, contenedor ) => {

        data.forEach( (nodo) => {

            const li = document.createElement('li');
            const span = document.createElement('span');
            // const label = document.createElement('label');
            const ul = document.createElement('ul');

            console.log(nodo.hijos.length)

            // if( nodo.hijos.length ){
                span.textContent = `${nodo.hierarchy_name} (${nodo.employee})`;
                // label.style.cssText = !nodo.hierarchy_name ? 'font-style: italic;' : '';

                
                span.classList.toggle("caret");
                span.addEventListener("click",handleClick);
                ul.classList.toggle("nested");
                

                
                // ul.classList.toggle("active");
                // span.classList.toggle("caret-down");
                
                contenedor.appendChild(li);
                li.appendChild(span);//appendChild ayuda a crear nodos dinamicamente
                // li.appendChild(label)
                li.appendChild(ul);

                construirArbolHTML( nodo.hijos,ul);

            // } else {
                
            //     label.textContent = nodo.hierarchy_name;
            //     // label.style.cssText = !nodo.workstation ? 'font-style: italic;' : '';
            //     li.appendChild(label);
            //     contenedor.appendChild(li);
            // }

        })
    }

    
    useEffect( ()=>{
        let mounted = true;

        if( mounted ) {
            let hierarchies = []
            const contenedor = document.querySelector("#myUL");
            const token = `Bearer ${sessionStorage.getItem("token")}`;
            api.defaults.headers.common["Authorization"] = token;
            api.get('/hierarchies').then((response) =>{
                hierarchies = response.data;
                const puestos = hierarchies.map( (i) => {
                    return {
                        id: i._id,
                        workstation: i.workstation,
                        hierarchy_name: i.hierarchy_name,
                        padre: i.parent[0].id_Parent,
                        name_employee: i.name_employee
                    } 
                });
                // console.log('Puestosss', puestos);

                const setHijos = ( nodo ) => {
                    // console.log('nodoo', nodo)
                    const h = puestos.filter( (i) => i.padre === nodo.id ).map( (obj) => new TreeNode(obj.id,obj.hierarchy_name, obj.workstation, obj.name_employee));
                    // console.log('esto tiene h', h)
                    nodo.hijos.push(...h);
                    h.forEach( (hijo) => {
                        setHijos(hijo)
                    });
                    
                }

                if( puestos )
                {
                    const root = new TreeNode( puestos[0].id, puestos[0].hierarchy_name, puestos[0].workstation, puestos[0].name_employee, true );
                    setHijos(root);
                    construirArbolHTML([root], contenedor);
                }



            })
            .catch( e=>{
                alert(e);
            })
        
        }


        return () => {

            const toggler = document.getElementsByClassName("caret");
            // console.log("toggling toggler", toggler);
            mounted = false;
    
            for (let i = 0; i < toggler.length; i++) {
                toggler[i].removeEventListener("click", handleClick );
              }

            const contenedor = document.querySelector("#myUL");
            const rootItem = contenedor.firstElementChild;
            contenedor.removeChild(rootItem);
        } 

    }, [])

    return (
        <section>
            <h1>Organigrama de puestos</h1>
    
            <ul id="myUL"></ul>

        </section>
    );
    

}

export {Organigrama2 as default};