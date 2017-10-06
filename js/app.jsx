import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from './Page.jsx';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Page />,
        document.getElementById('app')
    );
});
