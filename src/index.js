import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
/* import ClassComponent from './components/ClassComponent'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App nombre="Jona" n1={5} n2={10} />
  </React.StrictMode>
);
