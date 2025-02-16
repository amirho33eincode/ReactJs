import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const data = [
    { name: 'January', value: 30 },
    { name: 'February', value: 50 },
    { name: 'March', value: 20 },
];

const root = createRoot(document.getElementById('root'));
root.render(<App data={data}/>);