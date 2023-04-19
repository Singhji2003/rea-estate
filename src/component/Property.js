import React, { Component } from 'react'
import PropertyItems from './PropertyItems'
import PropertyD from './Property.json'
export default class Property extends Component {
     property = PropertyD
    constructor(){
        super();
        this.state = {
            property: this.property
        }
    }
  render() {
    return (
        <>
        <div className="homeimg flex justify-center sticky top-0 -z-10">
        <img src={require("./img/home.jpeg")} alt="" className='mt-6 rounded-lg sticky top-0 -z-10'  />
        </div>
       <div className="content bg-gray-100 mt-2 pt-4">
        {
            this.state.property.map((element)=>{
             return <PropertyItems name= {element.name} address = {element.address} id = {element.id} imgUrl = {element.imgUrl} years = {element.years}/>
            }
            )
        }
        </div>
        </>
    )
  }
}
