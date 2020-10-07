import React from 'react';
import './index.css';
import User from "./User";
import Todo from "./Todo";
import Album from "./Album";
import store from "./RouterStore"
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () =>{ 
  return( 
  <BrowserRouter> 
  <Provider store={store}>
  <Switch>
    <Route exact path="/" component={User} />               
    <Route path="/user" component={User} />
    <Route path="/todo" component={Todo} />  
    <Route path="/album" component={Album} />
  </Switch>
  </Provider>
  </BrowserRouter>
)};

export default App;
  