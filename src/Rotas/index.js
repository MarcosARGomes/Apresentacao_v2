import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Login from '../paginas/Login';
import CheckIn from '../paginas/CheckIn';
import CheckOut from '../paginas/CheckOut';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/contato' component={ Contato } />
            <Route path='/Login' component={ Login } />
            <Route path='/CheckIn' component ={CheckIn}/>
            <Route path='/CheckOut' component ={CheckOut}/>
        </Switch>
    </BrowserRouter>
);

export default Rotas;