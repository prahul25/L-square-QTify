import React from "react";
import styles from "./HomePage.module.css"
import { useOutletContext } from "react-router-dom";
import Hero from "../../Component/Hero/Hero";
import Section from "../../Component/Section/Section";

const HomePage = () =>{
    const {data} = useOutletContext()
    const {topAlbums  , newAlbums , songs} = data
    // console.log(data)
    return (
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            {/* <Section title="Songs" data={songs} type="song"/> */}
        </div>
        </>
    )
}
export default HomePage;