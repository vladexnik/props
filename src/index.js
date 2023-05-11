import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Button} from './App';
import styled from 'styled-components';

import BootstrapTest from './BootstrapTest';
import 'bootstrap/dist/css/bootstrap.min.css';



const BigButton=styled(Button)`
  margin: 0 auto;
  width: 240px;
  cursor: pointer;
  text-align: center;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BigButton as='a'>Button exported and edited</BigButton>
    <BootstrapTest/>
  </React.StrictMode>
);
