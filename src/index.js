import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './layouts/App';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from './AppContext'

// warto pilnowac wciec - wtedy kod jest latwiejszy w odbiorze (App ponizej jest zle wciety) 

ReactDOM.render(
  <React.StrictMode>
      <AppProvider>
    <App />
      </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
