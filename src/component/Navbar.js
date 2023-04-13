import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
    <div class="navbar flex justify-between">
    <div class="logo flex items-center">
       <Link to="/"> <i class="fa-solid fa-chevron-left ml-5"></i></Link>
        <img src={require("./img/logo.png")} alt="JP Logo" class="w-24"/>
        </div>
        <i class="fa-regular fa-bell fa-xl mr-10  flex self-center" ></i>
    </div>
   </nav>
   <div class="search-box">
        <input type="text" placeholder=" Estate Agents For Residence " class="border border-black w-[85%] mx-6 p-1 text-black outline-none text-md mt-3 rounded-lg"/>
    </div>
   </>
    )
  }
}
