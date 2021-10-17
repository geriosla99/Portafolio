import React from 'react';
import ReactDOM from 'react-dom';
import Portafolio from './container/Portafolio/Portafolio';
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Portafolio/>
  </React.StrictMode>,
  document.getElementById('root')
);

