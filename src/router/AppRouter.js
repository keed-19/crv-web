import React from 'react';
import { Router, Switch } from 'react-router-dom';

import { createBrowserHistory } from "history";
import Login from '../components/Login';
import ClientesHome from '../components/clientes/ClientesHome';
import DashboardHome from '../components/dashboard/DashboardHome';
// import ApplyLoan from '../components/clientes/ApplyLoan';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import RecPass from '../components/recPass/RecPass';
import VerifyCod from '../components/recPass/VerifyCod';
import NewPassword from '../components/recPass/NewPassword';
import AddUsers from '../components/users/AddUsers';
import ProductHome from '../components/productos/ProductHome';
import EditProduct from '../components/productos/EditProduct';
import AddProduct from '../components/productos/AddProduct';
import EmpleadosHome from '../components/empleados/EmpleadosHome';
import EditEmployee from '../components/empleados/EditEmployee';
import EditClients from '../components/clientes/EditClients';
import AddClients from '../components/clientes/AddClients';
import AddEmployee from '../components/empleados/AddEmployee';
import Organigrama from '../components/ORGANIGRAMA/Organigrama';
import organigrama2 from '../components/ORGANIGRAMA/organigrama2';

export const history =  createBrowserHistory(); 


const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PrivateRoute path="/dashboard" component={DashboardHome} exact={true} />
            {/* <PrivateRoute path="/solicitudes" component={SolicitudesHome} exact={true} /> */}
            <PublicRoute path="/login" component={Login} exact={true} />
            <PublicRoute path="/recpass" component={RecPass} exact={true} />
            <PublicRoute path="/verifycod" component={VerifyCod} exact={true} />
            <PublicRoute path="/newpass" component={NewPassword} exact={true} />
            <PrivateRoute path="/product" component={ProductHome} exact={true} />
            <PrivateRoute path="/addusers" component={AddUsers} exact={true} />
            <PrivateRoute path="/productedit/:product_id" component={EditProduct} exact={true} />
            <PrivateRoute path="/editemployees/:employee_id" component={EditEmployee} exact={true} />
            <PrivateRoute path="/editclientes/:client_id" component={EditClients} exact={true} />
            <PrivateRoute path="/productadd" component={AddProduct} exact={true} />
            <PrivateRoute path="/employees" component={EmpleadosHome} exact={true} />
            <PrivateRoute path="/clientes" component={ClientesHome} exact={true} />
            <PrivateRoute path="/addclientes" component={AddClients} exact={true} />
            <PrivateRoute path="/addemployee" component={AddEmployee} exact={true} />

            {/* esta ruta esta en prueba ya que da errores */}
            <PrivateRoute path="/organigrama" component={organigrama2} exact={true} />
            {/* <PrivateRoute path="/organigrama2" component={organigrama2} exact={true} /> */}
            {/* <PrivateRoute path="/applyLoan" component={ApplyLoan} exact={true} /> */}
            <PublicRoute path="/" component={Login} exact={true} />
            
        </Switch>
    </div>

    </Router>

);

export default AppRouter;
