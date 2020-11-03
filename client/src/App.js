import React from 'react';
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import './styles/App.scss';
import { Provider } from "react-redux";
import store from './store'
import Explore from "./components/gradients/Explore";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import AddGradient from "./components/dashboard/AddGradient";
function App() {
  return (
 
      
       <Provider store={store}>
            <BrowserRouter>
         <Navbar/>
         <Switch>
           <Route exact component={Home} path="/"/>
           <Route exact component={Explore} path="/explore"/>
           <Route exact component={Dashboard} path="/dashboard"/>
            <Route exact component={AddGradient} path="/add_gradient"/>
          </Switch> 
             </BrowserRouter>  
    </Provider>
  
  
  );
}

export default App;
