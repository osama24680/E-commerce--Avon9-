import React from 'react'
import "./CategoryProducts.scss"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import coat from "../../assets/coat.svg"
import glasses from "../../assets/glasses.svg"
import shorts from "../../assets/shorts.svg"
import dress from "../../assets/dress.svg"
import tee from "../../assets/tee.svg"
import jacket from "../../assets/jacket.svg"
import hat from "../../assets/hat.svg"
import watch from "../../assets/watch.svg"

const cats = [
    { id: 1, title: "DRESS & FROCK", total: 53, img: dress },
    { id: 2, title: "WINTER WEAR", total: 58, img: coat },
    { id: 3, title: "GLASSES & LENS", total: 68, img: glasses },
    { id: 4, title: "SHORTS & JEANS", total: 84, img: shorts },
    { id: 5, title: "T-SHIRTS", total: 35, img: tee },
    { id: 6, title: "JACKET", total: 16, img: jacket },
    { id: 7, title: "Watch", total: 27, img: watch },
    { id: 8, title: "HAT & CAPS", total: 39, img: hat },
]

const responsive = {
    1200: {
        items: 4,
    },
    992: {
        items: 3,
    },
    768:{
        items:2
    },
    576:{
        items:1
    },

  
};



const CategoryProducts = () => {

    return (
        <div className="proj_container">
            <div className="CategoryProducts">
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlay
                    autoPlayInterval="3000"
                    disableButtonsControls
                    keyboardNavigation
                    responsive={responsive}
                >

                    {cats.map((item) => (
                        <div className="item" key={item.id}>
                            <div className="item_img">
                                <img src={item.img} alt="d" />
                            </div>
                            <div className="item_content">
                                <h3>{item.title}</h3>
                                <a href="#">Show All</a>
                            </div>
                            <span>({item.total})</span>
                        </div>
                    ))}
                </AliceCarousel>
            </div>
        </div>


    )
}

export default CategoryProducts