import React from 'react'
import style from  "./Home.module.scss"
import Offer from "../../Components/Offer/Offer"
import Header from "../../Components/Header/Header"
import CategoriesList from "../../Components/CategoriesList/CategoriesList"
import MainSlider from "../../Components/MainSlider/MainSlider"

const Home = () => {
    return (
        <>
            <Offer />
            <Header />
            <CategoriesList />
            <MainSlider />
           
        </>
    )
}

export default Home