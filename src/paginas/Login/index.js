import React from 'react';
import {Link} from 'react-router-dom';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

import './estilo.css';

const Login = () =>{
    return(
        <section>
            <Topo/>
            <Rodape/>
        </section>
    )
}

export default Login;