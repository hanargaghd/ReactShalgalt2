import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import UseData from "../components/useData";
import Home1 from "../components/home";
// import Blue from "../components/blue/blue.JS";
const Box = () =>{
    return(
        <BrowserRouter> 
            <Routes> 
                <Route path= {`/:pageID`} element={<UseData/>} /> 
                <Route path = "/" element={<Home1/>} />
            </Routes> 
        </BrowserRouter> 
    )
}

export default Box;