import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from '../screens/inventory.js'

class Router extends Component{
  render(){
    return(
      <BrowserRouter basename={window.location.pathname || '*'}>
        <Routes>
          <Route path="/" element={<Hello/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default Router;