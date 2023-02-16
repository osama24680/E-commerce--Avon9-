import React from 'react'
import style from "./FixedDownNav.module.scss"
import { AiOutlineMenu } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { BsGrid } from "react-icons/bs"
import { openSideNav,openSideCategories } from "../../Store/generalSlice"
import { useDispatch } from 'react-redux'

const FixedDownNav = () => {

    let dispatch = useDispatch()
    return (
        <div className={style.allFixedDown}>
            <div className={style.fixedDown}>
                <div onClick={() => dispatch(openSideNav())}>
                    <AiOutlineMenu />
                </div>
                <div>
                    <BsBag />
                    <span>2</span>
                </div>
                <div>
                    <AiOutlineHome />
                </div>
                <div>
                    <AiOutlineHeart />
                    <span>4</span>
                </div>
                <div>
                    <BsGrid onClick={() => dispatch(openSideCategories())} />
                </div>
            </div>
        </div>
    )
}

export default FixedDownNav