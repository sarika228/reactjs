import React,{Component} from "react"
import Template from "./template"

import img1 from "../asserts/flowers.jpg";
import img2 from "../asserts/cd.jpg";
import img3 from "../asserts/cake.jpg";

class Cards extends Component {
    render() {
        return (
           <div className="container-fluid d-flex justify-content-center">
            <div className="row">
               <div className="col-md-4">
                   <Template imgsrc={img1} title="WEDDINGS FLOWERS"/>
                </div>
                <div className="col-md-4">
                    <Template imgsrc={img2} title="PRIVATE EVENTS"/>
                </div>
               <div className="col-md-4 img3" >
                   <Template imgsrc={img3} title="BIRTHDAYS BOUQUETS" />
                </div> 
            </div>
           </div>
        )
    }
}

export default Cards

