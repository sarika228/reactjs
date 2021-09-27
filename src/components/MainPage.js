import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import img from "../asserts/tulips.jpg"
import "./card1-style.css"
import img1 from "../asserts/flowers.jpg";
import img2 from "../asserts/cd.jpg";
import img3 from "../asserts/cake.jpg";

function MainPage() {
    return (

        <div className="main_div" style={{ "width": "1200px" }}>
            <img src={img} alt="img" className="img" style={{ "width": "1290px", "height": "548px" }} />
            <div className="text">
                <h3>BEAUTIFUL</h3>
                <h1>Blooms</h1>
                <h2>For Every Occassion</h2>
                <h6>Place an order</h6>

                <div className="card-group" style={{ "boxsizing": "border-box", "paddingLeft": "140px","paddingRight":"160px"}}>
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">WEDDINGS FLOWERS</h5>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">PRIVATE EVENTS</h5>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img3} className="card-img-top" alt="..." style={{ "height": "233px", "width": "245px" }} />
                        <div className="card-body">
                            <h5 className="card-title">BIRTHDAYS BOUQUETS</h5>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        {/* <footer className="footer"> */}
        <div className="footer">
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            <div className="link">
            <a href="https://nicepage.com/website-templates">  Template</a>

            <span>  created with</span>
            <a class="link" href="https://nicepage.com/website-builder"> Nicepage</a>

            </div>
            </div>
        {/* </footer> */}
        </div>
        </div>
    )
}
export default MainPage
