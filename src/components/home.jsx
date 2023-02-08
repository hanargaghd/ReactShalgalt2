import React from "react";
import Button from "./button";
import "./style.module.css"
import {Link} from "react-router-dom" 
import Zurag1 from "../assets/red.webp"
import Zurag2 from "../assets/green.webp"
import Zurag3 from "../assets/blue.webp"
const Home1 = ()=>{
    const data = [
    {
        name : "TITLE1",
        img: Zurag1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.",
        button : <Button variant='left' text={<Link to="/1">more</Link>} />
    },
    {
        name : "TITLE2",
        img: Zurag2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.",
        description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.",
        button : <Button variant='middle' text={<Link to="/2">more</Link>} />
    },
    {
        name : "TITLE3",
        img: Zurag3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.",
        description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.",
        button : <Button variant='right' text={<Link to="/3">more</Link>} />
    },

    ]
    return(
        <div className="flex justify-between gap-[2rem]">{data.map((row)=>
            <div>
                <h1 className="pb-[1rem] text-2xl font-bold">{row.name}</h1>
                <img className="w-[100%] h-[200px] pb-[1rem]" src={row.img} alt=""/>
                <p className="pb-[1rem] font-semibold">{row.description}</p>
                <p className="pb-[1rem] font-semibold">{row.description2}</p>
                {row.button}
            </div>)}
            {/* <div>
                <h1>TITLE 2</h1>
                <img className="w-[250px] h-[200px]" src="" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.</p>
                <Button variant='middle' text={<Link to="/2">more</Link>}/>
            </div>
            <div>
                <h1>TITLE3</h1>
                <img className="w-[250px] h-[200px]" src="" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse doloribus tempore quas obcaecati dolor aut odio aspernatur laboriosam voluptatum? Molestiae officia aliquam quasi commodi ducimus repellat dignissimos, perferendis rerum.</p>
                <Button variant='right' text={<Link to="/3">more</Link>} />
            </div> */}
        </div>
    )
}
export default Home1;