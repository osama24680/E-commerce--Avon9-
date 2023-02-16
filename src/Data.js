import coat from "./assets/coat.svg"
import glasses from "./assets/glasses.svg"
import shorts from "./assets/shorts.svg"
import dress from "./assets/dress.svg"
import tee from "./assets/tee.svg"
import jacket from "./assets/jacket.svg"
import hat from "./assets/hat.svg"
import watch from "./assets/watch.svg"

import shoes from "./assets/shoes.svg"
import jewelry from "./assets/jewelry.svg"
import perfume from "./assets/perfume.svg"
import bags from "./assets/bag.svg"
import cosmetics from "./assets/cosmetics.svg"

import bestSeller1 from "./assets/bestSeller1.jpg"
import bestSeller2 from "./assets/bestSeller2.jpg"
import bestSeller3 from "./assets/bestSeller3.jpg"
import bestSeller4 from "./assets/bestSeller4.jpg"

export const cats = [
    { id: 1, title: "DRESS & FROCK", total: 53, img: dress },
    { id: 2, title: "WINTER WEAR", total: 58, img: coat },
    { id: 3, title: "GLASSES & LENS", total: 68, img: glasses },
    { id: 4, title: "SHORTS & JEANS", total: 84, img: shorts },
    { id: 5, title: "T-SHIRTS", total: 35, img: tee },
    { id: 6, title: "JACKET", total: 16, img: jacket },
    { id: 7, title: "Watch", total: 27, img: watch },
    { id: 8, title: "HAT & CAPS", total: 39, img: hat },
]

export const sideNav = [
    {
        id: 1, title: "Men", products: [
            { id: 1, name: "Shirts", },
            { id: 2, name: "Shorts & Jeans", },
            { id: 3, name: "Safety shoes", },
            { id: 4, name: "Wallet", },
        ]
    },
    {
        id: 2, title: "Women", products: [
            { id: 1, name: "Dress & Frock", },
            { id: 2, name: "Earrings", },
            { id: 3, name: "Necklace", },
            { id: 4, name: "Makeup Kit", },
        ]
    },
    {
        id: 3, title: "Men", products: [
            { id: 1, name: "Shirts", },
            { id: 2, name: "Shorts", },
            { id: 3, name: "Safety", },
            { id: 4, name: "Wallet", },
        ]
    },
    {
        id: 4, title: "Jewelry", products: [
            { id: 1, name: "Earrings", },
            { id: 2, name: "Couple Rings", },
            { id: 3, name: "Necklace", },
            { id: 4, name: "Bracelets Kit", },
        ]
    },
    {
        id: 5, title: "Perfume", products: [
            { id: 1, name: "Cloths Perfume", },
            { id: 2, name: "Deodorant", },
            { id: 3, name: "Flower Fragrance", },
            { id: 4, name: "Air Freshener", },
        ]
    },

]

export const categories = [
    {
        id: 1, title: "Clothes", imgTitle: dress, products: [
            { id: 1, name: "Shirts", qty: 300 },
            { id: 2, name: "Shorts & Jeans", qty: 60 },
            { id: 3, name: "Jacket", qty: 50 },
            { id: 4, name: "Dress & Frock", qty: 87 },
        ]
    },
    {
        id: 2, title: "Footwear", imgTitle: shoes, products: [
            { id: 1, name: "Sports", qty: 45 },
            { id: 2, name: "Formal ", qty: 75 },
            { id: 3, name: "Casual", qty: 35 },
            { id: 4, name: "Safety Shoes", qty: 26 },
        ]
    },
    {
        id: 3, title: "Jewelry", imgTitle: jewelry, products: [
            { id: 1, name: "Earrings", qty: 46 },
            { id: 2, name: "Couple Rings", qty: 73 },
            { id: 3, name: "Necklace", qty: 61 },
        ]
    },
    {
        id: 4, title: "Perfume", imgTitle: perfume, products: [
            { id: 1, name: "Clothes Perfume", qty: 12 },
            { id: 2, name: "Deodorant", qty: 60 },
            { id: 3, name: "Dress & Frock", qty: 50 },
        ]
    },
    {
        id: 5, title: "Cosmetics", imgTitle: cosmetics, products: [
            { id: 1, name: "Shampoo", qty: 73 },
            { id: 2, name: "Sunscreen ", qty: 46 },
            { id: 3, name: "Body Wash", qty: 39 },
            { id: 4, name: "Makeup Kit", qty: 23 },
        ]
    },
    {
        id: 6, title: "Glasses", imgTitle: glasses, products: [
            { id: 1, name: "Sunglasses", qty: 50 },
            { id: 2, name: "Lenses ", qty: 48 },
        ]
    },
    {
        id: 7, title: "Bags", imgTitle: bags, products: [
            { id: 1, name: "Shopping Bag", qty: 62 },
            { id: 2, name: "Gym Backpack ", qty: 75 },
            { id: 3, name: "Purse", qty: 80 },
            { id: 4, name: "Wallet", qty: 35 },
        ]
    },

]

export const bestSeller = [
    { id: 1, title: "Baby Fabric Shoes", img: bestSeller1, stars: 5, priceBefore: "5.00", priceAfter: "4.00" },
    { id: 2, title: "Men's Hoodies T-Shirt", img: bestSeller2, stars: 4, priceBefore: "17.00", priceAfter: "7.00" },
    { id: 3, title: "Girls T-Shirt", img: bestSeller3, stars: 5, priceBefore: "5.00", priceAfter: "3.00" },
    { id: 4, title: "Baby Fabric Shoes", img: bestSeller4, stars: 4, priceBefore: "15.00", priceAfter: "12.00" },
]

