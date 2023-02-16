import React from 'react'
import style from "./MainProducts.module.scss"
import LeftSide from "./LeftSide/LeftSide"
import RightSide from "./RightSide/RightSide"
const MainProducts = () => {
    return (
        <div className='proj_container'>
            <div className={style.MainProducts}>
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}

export default MainProducts