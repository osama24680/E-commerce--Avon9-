import React, { useState } from 'react'
import style from "./MobileNav.module.scss"
import { sideNav } from "../../Data"
import { useSelector, useDispatch } from 'react-redux'
import { closeSideNav, openSideNav,openSideCategories } from "../../Store/generalSlice"
import { AiOutlineMenu } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { BsGrid } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import Accordion from 'react-bootstrap/Accordion';



const MobileNav = () => {

    let generalRedux = useSelector(state => state.generalSlice)
    let dispatch = useDispatch()

    return (
        <div className={style.MobileNav}>
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
                        <BsGrid onClick={() => dispatch(openSideCategories())}/>
                    </div>
                </div>
            </div>

            
            <div className={` ${style.allScreenFixedSide} ${generalRedux.openNav && style.open_allScreenFixedSide}`}>
                <div className={` ${style.fixedSide} ${generalRedux.openNav && style.open_fixedSide}`}>
                    <div className={style.fixedSideContent}>
                        <div className={style.mainHeading}>
                            <h3>Menu</h3>
                            <MdClose onClick={() => dispatch(closeSideNav())} />
                        </div>
                        <ul>
                            <li>Home</li>
                            <Accordion defaultActiveKey="0" className={style.accordion}>
                                {sideNav.map(item => (
                                    <li key={item.id}>
                                        <Accordion.Item eventKey={item.id} className={style.accordion_item}>
                                            <Accordion.Header className={style.accordion_header}>{item.title}</Accordion.Header>
                                            <Accordion.Body className={style.accordion_body}>
                                                <ul>
                                                    {item.products.map(product => (
                                                        <li key={product.id}>{product.name}</li>
                                                    ))}
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </li>
                                ))}
                            </Accordion >
                            <li>Blog</li>
                            <li>Hot Offers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav