import React from "react";

import SearchIcon from "../Assets/Search icon.png"
import styles from "./Search.module.css";

const Search = ({placeholder}) => {
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return <form className={styles.wrapper} onSubmit={onSubmit}>
        <input className={styles.search} placeholder={placeholder} required/>
        <button type="submit" className={styles.searchButton}>
            <img src={SearchIcon} alt="" />
        </button>
    </form>
}

export default Search;
