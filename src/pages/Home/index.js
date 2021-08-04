/*
Corpo da pag e cabeçalho
*/

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './style.css';

function Home() {
    return (<div>
        <React.StrictMode>
            <Header />
            <Main />
        </React.StrictMode>
       
    </div>
    );
}

export default Home;

