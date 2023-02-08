import React from 'react'
import style from "./Header.module.scss"
import logo from "../../assets/logo.png"
import { AiOutlineSearch } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
const Header = () => {
    return (
        <div className={style.Header}>
            <div className={`${style.HeaderContent} proj_container`}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={style.searchBar}>
                    <input type="text" placeholder="Enter your product name..." />
                    <AiOutlineSearch />
                </div>
                <div className={style.personalData}>
                    <div>
                        <BsPerson />
                        
                    </div>
                    <div>
                        <AiOutlineHeart />
                        <span>3</span>
                    </div>
                    <div>
                        <BsBag />
                        <span>6</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header