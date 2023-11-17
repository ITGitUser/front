import React from "react";
import Icons from "../../common/Layout/LayoutSVG";
import styles from './SearchInput.module.scss';
const SearchInput=({word, setWord})=>{
    return (
        <div className={styles.wrapperInput}>
            <input type="text" name="Поиск" id="search" placeholder="Поиск"/>
            <Icons name='search' size='24px' color='gray'/>
        </div>
    );
}
export default SearchInput;