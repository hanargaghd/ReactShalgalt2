import React from "react";
import Button from "./button";
import Zurag1 from '../assets/channels4_profile.jpg';
import "./style.module.css"
import {Link} from "react-router-dom" 
const Home1 = ()=>{
    return(
        <div className="body">
            <Button variant='top_left' text={<Link to={"/red"}>READ MORE</Link>} img={Zurag1} />
            <Button variant='top_right' text='READ MORE' img={Zurag1} />
            <Button variant='bottom_left' text={<Link to={"/green"}>READ MORE</Link>}  img={Zurag1} />
            <Button variant='bottom_right' text={<Link to={"/blue"}>READ MORE</Link>}  img={Zurag1} />
        </div>
    );
};
export default Home1;