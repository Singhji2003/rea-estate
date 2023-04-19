import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class PropertyItems extends Component {
  render(props) {
    let {name, address, id, imgUrl, years} = this.props;
    return (
      <div>
         <div className="item flex border border-white bg-white p-2 ">
            <div className="img">
           <Link exact to={`/${id}`}> <img src={imgUrl} alt="" className="w-auto h-[10rem]"/></Link>
        </div>
        <div className="text ml-4 flex flex-col justify-between">
            <div className="text-details">
            <h2 className="font-semibold text-md">{name} </h2>
            <p className="text-xs font-semibold text-gray-700">{address}</p>
            <button className='border px-2 text-xs mt-1'>{years}Years</button>
        </div>
        <div className="button">
        <Link exact to={`/${id}`}>  <button className='border w-[16rem] border-blue-500 bg-blue-500 rounded-lg text-white'>More Details</button></Link>
        
        </div>
        </div>
        </div>
      </div>
    )
  }
}
