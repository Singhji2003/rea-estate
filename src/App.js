import './App.css';
import Filters from './component/Filters';
import Navbar from './component/Navbar';
import Property from './component/Property';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import EachPopertyDeatils from './component/EachPopertyDeatils';
export default class App extends Component {
  Property  = [
    {"name": "JP Real Estate",
    "address":"Rohtak, palwal",
    "id":"rohtak",
    "imgUrl": "https://content.jdmagicbox.com/comp/def_content/estate_agents/default-estate-agents-1-250.jpg"
},
    {"name": "JP Real Estate",
    "address":"gurgaon, haryana",
    "id":"gurgaon",
    "imgUrl": "https://content.jdmagicbox.com/comp/palwal/u4/9999p1275.1275.101226153231.c3u4/catalogue/attri-properties-palwal-estate-agents-kr2zz5cunz-250.jpg?clr=#660000"

},
    {"name": "JP Real Estate",
    "address":"delhi, haryana",
    "id":"delhi",
    "imgUrl": "https://content.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-9-250.jpg"

},
    {"name": "JP Real Estate",
    "address":"bihar, haryana",
    "id":"bihar",
    "imgUrl": "https://content.jdmagicbox.com/comp/mumbai/c3/022pxx22.xx22.170824124433.y4c3/catalogue/propertybazaar-com-mumbai-internet-websites-for-estate-agent-jzug839es8-250.jpg"

},
    {"name": "JP Real Estate",
    "address":"krela, haryana",
    "id":"krela",
    "imgUrl": "https://content.jdmagicbox.com/comp/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0-250.jpg"

}
]

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
            return  <Route exact path = {`/${element.id}`} element = {<EachPopertyDeatils address = {element.address} imgUrl = {element.imgUrl}/>} />
           
          }
            )
        }
      </Routes>
    </BrowserRouter>
     </>
    )
  }
}
