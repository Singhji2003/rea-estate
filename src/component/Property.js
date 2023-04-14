import React, { Component } from 'react'
import PropertyItems from './PropertyItems'

export default class Property extends Component {
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
        <img src={require("./img/home.jpeg")} alt="" className='mt-6 rounded-lg sticky top-0 -z-10'  />
       <div class="content bg-gray-100 mt-2 pt-4">
        {
            this.state.property.map((element)=>{
             return <PropertyItems name= {element.name} address = {element.address} id = {element.id} imgUrl = {element.imgUrl}/>
            }
            )
        }
        </div>
        </>
    )
  }
}
