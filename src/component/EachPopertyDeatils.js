import React, { Component } from 'react'

export default class EachPopertyDeatils extends Component {
  render(props) {
    let { address, imgUrl} = this.props
    return (
      <div>
         <>
       <div class="item  mt-2">
            <div class="img flex  justify-center mt-6">
            <img src={imgUrl} class="rounded-3xl w-[342px] h-[185px] flex justify-center" alt=""/>
            </div>
            <div class="text-content ml-8">
                <h1 class="font-semibold text-xl mt-5">JP Real Estate</h1>
                <p class="address ">{address}</p>
                <div class="btns flex  mt-3">
                    <span class="border-2 border-blue-400 rounded-[50%] p-2 w-11 text-center text-blue-400" onClick={()=>{
                        document.getElementById('numbers').style.display = 'block'
                        document.getElementById('number').innerText = `Number: 1234567890`
                    }}><i class="fa-solid fa-phone fa-lg "></i></span>
                    <span class="border-2 ml-10 border-blue-400 rounded-[50%] p-2 w-11 text-center text-blue-400"><i class="fa-solid fa-location-dot fa-lg"></i></span>
                    <span class="border-2 ml-10 border-blue-400 rounded-[50%] p-2 w-11 text-center" onClick={()=>{
                        document.getElementById('numbers').style.display = 'block'
                        document.getElementById('number').innerText = `Number: 0987654321`
                    }}><i class="fa-brands fa-whatsapp fa-lg text-green-500 "></i></span>
                </div>
            </div>
            <div class="number-visible hidden bg-gray-200 rounded-xl border-2 border-black absolute p-10 ml-20" id="numbers">
                <i class="fa-solid fa-xmark fa-lg float-right block -mt-[27px] -mr-[29px] cursor-pointer" onClick={()=>{
                    document.getElementById('numbers').style.display = 'none'

                }}></i>
               <p id="number" className='text-lg font-semibold '></p>
            </div>
            <div class="btns flex justify-center">
            <button class="border-2 border-blue-400 text-blue-400  w-[85%] rounded-3xl mt-6 font-semibold text-lg" onClick={()=>{
                        document.getElementById('numbers').style.display = 'block'
                        document.getElementById('number').innerText = `Number: 0987654321`
                    }}>Enquire Now</button>
        </div>
        </div>
        <div class="address flex items-center border border-gray-400 mt-5 p-4 space-x-5 border-l-0 border-r-0">
            <i class="fa-solid fa-map text-gray-800"></i>
            <p>Main Market, Govt School, Hodal, Hodal - 121106 (Near.Maharani College)</p>
        </div>
     </>
      </div>
    )
  }
}
