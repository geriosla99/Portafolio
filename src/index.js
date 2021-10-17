import React from 'react';
import ReactDOM from 'react-dom';
import Portafolio from './container/Portafolio/Portafolio';
import GlobalStyles from "./components/GlobalStyles";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Portafolio/>
  </React.StrictMode>,
  document.getElementById('root')
);

