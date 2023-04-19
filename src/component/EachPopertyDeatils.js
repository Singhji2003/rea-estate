import React, { Component } from 'react'

export default class EachPopertyDeatils extends Component {
  render(props) {
    let { address, imgUrl, fullAddress,mapAddress, iframeAddress} = this.props
    return (
         <>
       <div className="item  mt-2">
            <div className="img flex  justify-center mt-6">
            <img src={imgUrl} className="rounded-3xl w-[342px] h-[185px] flex justify-center" alt=""/>
            </div>
            <div className="text-content ml-8">
                <h1 className="font-semibold text-xl mt-5">JP Real Estate</h1>
                <p className="address ">{address}</p>
                <div className="btns flex  mt-3">
                    <span className="border-2 border-blue-400 rounded-[50%] p-2 w-11 text-center text-blue-400" onClick={()=>{
                        document.getElementById('numbers').style.display = 'block'
                        document.getElementById('number').innerText = `Number: 1234567890`
                    }}><i className="fa-solid fa-phone fa-lg "></i></span>
                   <a href={mapAddress} rel="noreferrer" target = "_blank"> <span className="border-2 ml-10 border-blue-400 rounded-[50%] p-2 w-11 text-center text-blue-400 block"><i className="fa-solid fa-location-dot fa-lg"></i></span></a>
                    <span className="border-2 ml-10 border-blue-400 rounded-[50%] p-2 w-11 text-center" onClick={()=>{
                        document.getElementById('numbers').style.display = 'block'
                        document.getElementById('number').innerText = `Number: 0987654321`
                    }}><i className="fa-brands fa-whatsapp fa-lg text-green-500 "></i></span>
                </div>
            </div>
            <div className="number-visible hidden bg-gray-200 rounded-xl border-2 border-black absolute p-10 ml-20" id="numbers">
                <i className="fa-solid fa-xmark fa-lg float-right block -mt-[27px] -mr-[29px] cursor-pointer" onClick={()=>{
                    document.getElementById('numbers').style.display = 'none'

                }}></i>
               <p id="number" className='text-lg font-semibold '></p>
            </div>
            <div className="btns flex justify-center">
            <button className="border-2 border-blue-400 text-blue-400  w-[85%] rounded-3xl mt-6 font-semibold text-lg" onClick={()=>{
                        document.getElementById('numbers').style.display = 'block'
                        document.getElementById('number').innerText = `Number: 0987654321`
                    }}>Enquire Now</button>
        </div>
        </div>
        <div className="address flex items-center border border-gray-400 mt-5 p-4 space-x-5 border-l-0 border-r-0">
            <i className="fa-solid fa-map text-gray-800"></i>
            <p>{fullAddress}</p>
        </div>
        <div className="map flex justify-center mt-5">
        <iframe src={iframeAddress} allowFullScreen="" loading="lazy" title='singh ji' referrerPolicy="no-referrer-when-downgrade" className = "align-center"></iframe>
        </div>
     </>
    )
  }
}
