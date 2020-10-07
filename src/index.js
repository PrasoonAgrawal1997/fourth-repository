//App for fetching data from different api's depends on path we given like /user, /todo, /album

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 
ReactDOM.render(
  <App />, 
  document.getElementById('root') 
);


//First we make a react app using "npx create-react-app redux-demo"
//then install redux into it using "npm i redux --save-dev"
//then install redux-thunk using "npm i redux-thunk --save-dev"
//at last, install react-router-dom using "npm install --save react-router-dom" 
// npm install react-redux