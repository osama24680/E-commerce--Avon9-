import React from 'react'
import style from "./Offer.module.scss"
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import Dropdown from 'react-bootstrap/Dropdown';

const Offer = () => {
    return (
        <div className={style.offer}>
            <div className={`${style.offerContent} proj_container`}>
                <div className={style.socialIcons}>
                    <div className={style.extraDiv}>
                        <div>
                            <FaFacebook />
                        </div>
                        <div>
                            <AiFillTwitterCircle />
                        </div>
                        <div>
                            <AiOutlineInstagram />
                        </div>
                        <div>
                            <AiFillLinkedin />
                        </div>
                    </div>

                </div>
                <div className={style.mainText}>
                    <p><span>FREE SHIPPING </span>THIS WEEK ORDER OVER - $55</p>
                </div>
                <div className={style.menuOptions}>
                    <Dropdown className={style.dropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className={style.dropdown_toggle}>
                            Currency
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Euro €</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sterling £</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Yen ¥</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Rouble ₽</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className={style.dropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className={style.dropdown_toggle}>
                            Language
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">English </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">عربي</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">français</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Deutsche </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

        </div>
    )
}

export default Offer