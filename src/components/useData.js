import React from "react"; 
import { useParams } from "react-router-dom";
import PageData from "./data"
const UseData = () => { 
    const {pageID} = useParams();
    const thisPage = PageData.find((page)=>page.id === pageID);
    return ( 
        <div className="max-w-[1000px] m-auto"> 
                <h1 className="text-[2rem] font-semibold mb-[20px]">{thisPage.name}</h1> 
                <img className="w-[100%] h-[200px]" src={thisPage.zurag} alt=""/>
                <p className="font-semibold pb-[20px] w-[100%]">{thisPage.description}</p>
                <p className="font-semibold pb-[20px] w-[100%]">{thisPage.description2}</p>
                <p className="font-semibold pb-[20px] w-[100%]">{thisPage.description3}</p>
        </div> 
    ); 
}; 
export default UseData;