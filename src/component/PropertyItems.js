import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class PropertyItems extends Component {
  render(props) {
    let {name, address, id, imgUrl} = this.props;
    return (
      <div>
         <div class="item flex border border-white bg-white p-2 ">
            <div class="img">
           <Link exact to={`/${id}`}> <img src={imgUrl} alt="" class="w-auto h-[10rem]"/></Link>
        </div>
        <div class="text ml-4 flex flex-col justify-between">
            <div class="text-details">
            <h2 class="font-semibold text-md">{name} </h2>
            <p class="text-xs font-semibold text-gray-700">{address}</p>
        </div>
        <div class="btn">
            <button class="border-2 border-blue-600 text-blue-600  w-52 rounded-md" ><i class="fa-solid fa-phone"></i> Call Now</button>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
