import React from "react";
import Home1 from "../components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Red from "../components/red/red.JS";
import Green from "../components/green/green.JS";
import Blue from "../components/blue/blue.JS";
const Box = () =>{
    return(
        <BrowserRouter> 
            <Routes> 
                <Route path= "/blue" element={<Blue/>} /> 
                <Route path="/red" element={<Red/>} /> 
                <Route path="/green" element={<Green/>} />
                <Route path = "/" element={<Home1/>} />
            </Routes> 
        </BrowserRouter> 
    )
}

export default Box;