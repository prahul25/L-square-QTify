import React from "react";
import { ReactComponent as SearchIcon} from "../Assets/Search-icon.svg";
import styles from "./Search.module.css";

const Search = ({placeholder}) => {
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return <form className={styles.wrapper} onSubmit={onSubmit}>
        <input className={styles.search} placeholder={placeholder} required/>
        <button type="submit" className={styles.searchButton}>
            <SearchIcon/>
        </button>
    </form>
}

export default Search;
