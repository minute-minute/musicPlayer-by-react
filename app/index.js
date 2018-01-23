//var react = require('react'); //require是node的功能，是js共有的
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hello from './components/hello';

render(
    <AppContainer>
        <Hello></Hello>
    </AppContainer>,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept('./components/hello', ()=>{
        const NewHello = require('./components/hello').default;
        render(
            <AppContainer>
                <NewHello></NewHello>
            </AppContainer>,
            document.getElementById('root')
        );
    })
}