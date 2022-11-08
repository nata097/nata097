import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Curso from './Curso';
import Formulario from './Formulario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    <h3>2341501</h3>
   {/*  <Curso  name="java" teacher="Oscar Ortegon" schedule="3,6"/>
    <Curso  name="javaScript" teacher="Jaime Diaz" schedule="4,8"/> */}
    <Formulario/>
  </React.StrictMode>
);
// App esta llamando al index componente
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
