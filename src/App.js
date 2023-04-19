import './App.css';
import Filters from './component/Filters';
import Navbar from './component/Navbar';
import Property from './component/Property';
import PropertyD from './component/Property.json'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import EachPopertyDeatils from './component/EachPopertyDeatils';
export default class App extends Component {
  Property  = PropertyD;
  constructor(){
    super();
    console.log('Constructor runned')
    this.state = {
        property: this.Property
    }
}
  render() {
    return (
      <>
    <BrowserRouter>
    <Navbar/>
    <Filters/>
      <Routes>
     <Route exact path="/" element={<Property/>}/>
     {
            this.state.property.map((element)=>{
            return  <Route exact path = {`/${element.id}`} element = {<EachPopertyDeatils address = {element.address} imgUrl = {element.imgUrl} fullAddress = {element.fullAddress} iframeAddress=  {element.iframeAddress}/>} mapAddress = {element.mapAddress}/>
           
          }
            )
        }
      </Routes>
    </BrowserRouter>
     </>
    )
  }
}
