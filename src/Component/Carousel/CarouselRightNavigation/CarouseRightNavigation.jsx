import React, { useEffect, useState } from "react"
import { useSwiper , useSwiperSlide } from "swiper/react"
import {ReactComponent as RightArrow} from "../../Assets/Rightbtn.svg"
import styles from "./CarouselRightNavigation.module.css"
import 'swiper/css'

const CarouselRightNavigation = () =>{
    const swiper = useSwiper();
    const [isEnd , setIsEnd] = useState(swiper.isEnd)

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsEnd(swiper.isEnd)
        })
    } , [])

    return <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={()=> swiper.slideNext()}/>}
    </div>
}

export default CarouselRightNavigation