import React from 'react'
import "./LeftSide.scss"
import Accordion from 'react-bootstrap/Accordion';
import { categories, bestSeller } from "../../../Data"
import bestSeller1 from "../../../assets/bestSeller1.jpg"
import { AiFillStar } from "react-icons/ai"
const LeftSide = () => {
    return (
        <div className="LeftSide">
            <div className="LeftSide__category">
                <h2>Category</h2>
                <ul>
                    <Accordion defaultActiveKey="0" className="accordion">
                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <Accordion.Item eventKey={cat.id} className="accordion_item">
                                    <Accordion.Header className="accordion_header">
                                        <div className="accordion_header__img">
                                            <img src={cat.imgTitle} alt={cat.imgTitle} />
                                        </div>
                                        <p>{cat.title}</p>
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <ul>
                                            {cat.products.map(product => (
                                                <li key={product.id}>
                                                    <p>{product.name}</p>
                                                    <span>{product.qty}</span>
                                                </li>
                                            ))}

                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </li>
                        ))}
                    </Accordion >
                </ul>
            </div>
            <div className="LeftSide__bestSeller">
                <h2>best seller</h2>
                <div className="LeftSide__bestSeller__items">
                    {bestSeller.map(item => (
                        <div className='item' key={item.id}>
                            <div className="image">
                                <img src={item.img} alt={item.img} />
                            </div>
                            <div className="content">
                                <p>{item.title}</p>
                                <div className="stars">
                                    {[...Array(item.stars)].map((star,index) => (
                                        <AiFillStar key={index}/>
                                    ))}
                                </div>
                                <div className="price">
                                    <p>${item.priceBefore}</p>
                                    <p>${item.priceAfter}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default LeftSide