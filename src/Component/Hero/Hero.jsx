import React from "react";
import style from "./Hero.module.css"
import HeroImg from "../Assets/HeroImg.png"
import Group from "../Assets/Group.png"
const Hero = () =>{
    return <div className={style.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousand podcast episodes</h1>
        </div>
        <div>
        <img src={HeroImg} alt="Hero" className={style.img}/>
        </div>
        
    {/* <img src={Group} alt="" /> */}
    </div>
}

export default Hero