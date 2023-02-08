import React from 'react'
import style from "./MobileNav.module.scss"
import { AiOutlineMenu } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { BsGrid } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import Accordion from 'react-bootstrap/Accordion';

const MobileNav = () => {
    return (
        <div className={style.MobileNav}>
            <div className={style.fixedDown}>
                <div>
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
                    <BsGrid />
                </div>
            </div>
            <div className={style.fixedSide}>
                <div className={style.fixedSideContent}>
                    <div className={style.mainHeading}>
                        <h3>Menu</h3>
                        <MdClose />
                    </div>
                    <ul>
                        <li>Home</li>

                        <li>
                            <Accordion defaultActiveKey="0" className={style.accordion}>
                                <Accordion.Item eventKey="1" className={style.accordion_item}>
                                    <Accordion.Header className={style.accordion_header}>Men</Accordion.Header>
                                    <Accordion.Body className={style.accordion_body}>
                                        <ul>
                                            <li>Shirts</li>
                                            <li>Shorts & Jeans</li>
                                            <li>Safety shoes</li>
                                            <li>Wallet</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion >
                        </li>

                        <li>
                            <Accordion defaultActiveKey="0" className={style.accordion}>
                                <Accordion.Item eventKey="2" className={style.accordion_item}>
                                    <Accordion.Header className={style.accordion_header}>Women</Accordion.Header>
                                    <Accordion.Body className={style.accordion_body}>
                                        <ul>
                                            <li>Dress & Frock</li>
                                            <li>Earrings</li>
                                            <li>Necklace</li>
                                            <li>Makeup Kit</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion >
                        </li>

                        <li>
                            <Accordion defaultActiveKey="0" className={style.accordion}>
                                <Accordion.Item eventKey="3" className={style.accordion_item}>
                                    <Accordion.Header className={style.accordion_header}>Jewelry</Accordion.Header>
                                    <Accordion.Body className={style.accordion_body}>
                                        <ul>
                                            <li>Earrings</li>
                                            <li>Couple Rings</li>
                                            <li>Necklace</li>
                                            <li>Bracelets Kit</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion >
                        </li>

                        <li>
                            <Accordion defaultActiveKey="0" className={style.accordion}>
                                <Accordion.Item eventKey="4" className={style.accordion_item}>
                                    <Accordion.Header className={style.accordion_header}>Perfume</Accordion.Header>
                                    <Accordion.Body className={style.accordion_body}>
                                        <ul>
                                            <li>Cloths Perfume</li>
                                            <li>Deodorant</li>
                                            <li>Flower Fragrance</li>
                                            <li>Air Freshener</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion >
                        </li>

                        <li>Blog</li>
                        <li>Hot Offers</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNav