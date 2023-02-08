import React from 'react'
import "./MainSlider.scss"
import MainBanner1 from "../../assets/MainBanner1.jpg"
import MainBanner2 from "../../assets/MainBanner2.jpg"
import MainBanner3 from "../../assets/MainBanner3.jpg"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

let banners = [
    { img: MainBanner1, title: "Trending Item", topic: "WOMEN'S LATEST FASHION SALE", price: "20.00" },
    { img: MainBanner2, title: "Trending Accessories", topic: "MODERN SUNGLASSES", price: "15.00" },
    { img: MainBanner3, title: "Sale Offer", topic: "WOMEN'S NEW FASHION SUMMER SALE", price: "29.99" },
]
const items = banners.map((item, index) => (
    <div className="carouselItems" key={index}>
        <img src={item.img} alt="..." />
    </div>

))



const MainSlider = () => {
    return (
        <div className="MainSlider">
            <div className="proj_container MainSliderContent">
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlay
                    autoPlayInterval="3000"
                    disableButtonsControls
                    keyboardNavigation

                >
                    {banners.map((item, index) => (
                        <div className="carouselItems" key={index}>
                            <img src={item.img} alt="..." />
                            <div className="content">
                                <h2>{item.title}</h2>
                                <h1>{item.topic}</h1>
                                <h3>started at $ <strong>{item.price}</strong></h3>
                                <button>shop now</button>
                            </div>

                        </div>

                    ))}
                </AliceCarousel>
            </div>

        </div>
    )
}

export default MainSlider