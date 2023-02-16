import React from 'react'
import style from "./Home.module.scss"
import Offer from "../../Components/Offer/Offer"
import Header from "../../Components/Header/Header"
import CategoriesList from "../../Components/CategoriesList/CategoriesList"
import MainSlider from "../../Components/MainSlider/MainSlider"
import CategoryProducts from "../../Components/CategoryProducts/CategoryProducts"
import MainProducts from "../../Components/MainProducts/MainProducts"

const Home = () => {
    return (
        <>
            <Offer />
            <Header />
            <CategoriesList />
            <MainSlider />
            <CategoryProducts />
            <MainProducts />
        </>
    )
}

export default Home