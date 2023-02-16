import React from 'react'
import "./CategoryProducts.scss"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {cats} from "../../Data"

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
        items:2
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