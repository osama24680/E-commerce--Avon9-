import React from 'react'
import "./MobileCategories.scss"
import Accordion from 'react-bootstrap/Accordion';
import { useSelector, useDispatch } from 'react-redux'
import { closeSideNav } from "../../Store/generalSlice"
import { MdClose } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import { categories,bestSeller } from "../../Data"

const MobileCategories = () => {

    let generalRedux = useSelector(state => state.generalSlice)
    let dispatch = useDispatch()

    return (
        <div className="MobileCategories">
            <div className={` allScreenFixedSide ${generalRedux.openCategories && "open_allScreenFixedSide"}`}>
                <div className={` fixedSide ${generalRedux.openCategories && "open_fixedSide"}`}>
                    <div className="fixedSideContent">
                        <div className="MobileCategories__mainHeading">
                            <h3>Category</h3>
                            <MdClose onClick={() => dispatch(closeSideNav())} />
                        </div>
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
                </div>
            </div>

            
        </div>
    )
}

export default MobileCategories