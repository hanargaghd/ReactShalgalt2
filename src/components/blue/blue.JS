import React from "react";
import BlueZurag from "../../assets/channels4_profile.jpg"
import "./blue.css"
const Blue = () =>{
    return(
        <div className="container">
            <div className="container-left">
                <h2 className="font-bold">BLUE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non saepe est voluptatem quia, a maxime minus ducimus odio voluptas?</p>
                <img src={BlueZurag} alt=""/>
            </div>
            <div className="container-right">
                <h2 className="font-bold">BLUE</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam voluptatem exercitationem veniam ad illum mollitia adipisci, expedita perspiciatis impedit odio praesentium vel sapiente voluptatum quo nihil! Dolorem, asperiores sed, delectus atque dolor ab doloremque consequatur quia alias possimus nemo vitae!</p>
            </div>
        </div>
    )
}

export default Blue;