import React from 'react'
import style from "./CategoriesList.module.scss"
import women_banner from "./../../assets/women_banner.jpg"
import men_banner from "./../../assets/men_banner.jpg"
import electronics_banner from "./../../assets/electronics_banner.jpg"
import electronics_banner_2 from "./../../assets/electronics_banner_2.jpg"
const CategoriesList = () => {
    return (
        <div className={style.CategoriesList}>
            <ul>
                <li>Home</li>
                <li>
                    CATEGORIES
                    <ul className={style.SideListClass}>
                        <div className={style.allLists}>
                            <div>
                                <p>Computing</p>
                                <p>Desktop</p>
                                <p>Laptop</p>
                                <p>Camera</p>
                                <p>Tablet</p>
                                <p>Mobile</p>
                                <img src={electronics_banner_2} alt="electronics_banner_2" />
                            </div>
                            <div>
                                <p>Men</p>
                                <p>Formal</p>
                                <p>Casual</p>
                                <p>Sports</p>
                                <p>Jacket</p>
                                <p>Sunglasses</p>
                                <img src={men_banner} alt="men_banner" />
                            </div>
                            <div>
                                <p>Women</p>
                                <p>Formal</p>
                                <p>Casual</p>
                                <p>Perfume</p>
                                <p>Cosmetics</p>
                                <p>Bags</p>
                                <img src={women_banner} alt="men_banner" />
                            </div>
                            <div>
                                <p>Electronics</p>
                                <p>Smart Watch</p>
                                <p>Smart TV</p>
                                <p>Keyboard</p>
                                <p>Microphone</p>
                                <p>Mouse</p>
                                <img src={electronics_banner} alt="men_banner" />
                            </div>
                        </div>
                    </ul>
                </li>
                <li>Men's
                    <ul>
                        <li>Shirts</li>
                        <li>Shorts & Jeans</li>
                        <li>Safety shoes</li>
                        <li>Wallet</li>
                    </ul>
                </li>
                <li>Women's
                    <ul>
                        <li>Dress & Frock</li>
                        <li>Earrings</li>
                        <li>Necklace</li>
                        <li>Makeup Kit</li>
                    </ul>
                </li>
                <li>Jewelry
                    <ul>
                        <li>Earrings</li>
                        <li>Couple Rings</li>
                        <li>Necklace</li>
                        <li>Bracelets Kit</li>
                    </ul>
                </li>
                <li>Perfume
                    <ul>
                        <li>Cloths Perfume</li>
                        <li>Deodorant</li>
                        <li>Flower Fragrance</li>
                        <li>Air Freshener</li>
                    </ul>
                </li>
                <li>Blog</li>
                <li>hot Offers</li>
            </ul>

        </div>
    )
}

export default CategoriesList