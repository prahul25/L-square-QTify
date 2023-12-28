import React, { useEffect, useState } from "react"
import { useSwiper , useSwiperSlide } from "swiper/react"
import {ReactComponent as LeftArrow} from "../../Assets/Leftbtn.svg"
import styles from "./CarouselLeftNavigation.module.css"
import 'swiper/css';

const CarouselLeftNavigation = () =>{
    const swiper = useSwiper();
    const [isBeginning , setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsBeginning(swiper.isBeginning)
        })
    } , [])

    return <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
    </div>
}

export default CarouselLeftNavigation