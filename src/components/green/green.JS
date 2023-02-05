import React from "react";
import GreenZurag from "../../assets/channels4_profile.jpg"
const Green = () =>{
    return(
        <div className="w-[100%] h-[500px] flex justify-evenly">
            <div className="block margin-auto">
                <h2 className="font-bold">GREEN</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non saepe est voluptatem quia, a maxime minus ducimus odio voluptas?</p>
                <img src={GreenZurag} alt=""/>
            </div>
            <div className="block margin-auto">
                <h2 className="font-bold">GREEN</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam voluptatem exercitationem veniam ad illum mollitia adipisci, expedita perspiciatis impedit odio praesentium vel sapiente voluptatum quo nihil! Dolorem, asperiores sed, delectus atque dolor ab doloremque consequatur quia alias possimus nemo vitae!</p>
            </div>
        </div>
    )
}

export default Green;