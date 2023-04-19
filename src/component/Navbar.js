import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
    <div className="navbar flex justify-between">
    <div className="logo flex items-center">
       <Link to="/"> <i className="fa-solid fa-chevron-left ml-5"></i></Link>
        <img src={require("./img/logo.png")} alt="JP Logo" className="w-24 "/>
        </div>
        <i className="fa-regular fa-bell fa-xl mr-10  flex self-center" ></i>
    </div>
   </nav>
   </>
    )
  }
}
