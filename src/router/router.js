import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from '../screens/inventory.js'
import Show from '../screens/show.js'

class Router extends Component{
  render(){
    return(
      <BrowserRouter basename={window.location.pathname || '*'}>
        <Routes>
          <Route path="/" element={<Hello/>}/>
          <Route path="/show" element={<Show/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default Router;