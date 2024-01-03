import React from "react";
import styles from "./HomePage.module.css"
import { useOutletContext } from "react-router-dom";
import Hero from "../../Component/Hero/Hero";
import Section from "../../Component/Section/Section";
import { fetchFilters } from "../../api/api";
import Faq from "../../Component/FAQ/Faq";

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
            <Section title="Songs" data={songs} filterSource={fetchFilters} type="song"/>
            <Faq/>
        </div>
        </>
    )
}
export default HomePage;