import style from "./SideNav.module.scss"
import { sideNav } from "../../Data"
import { useSelector, useDispatch } from 'react-redux'
import { closeSideNav, } from "../../Store/generalSlice"
import { MdClose } from "react-icons/md"
import Accordion from 'react-bootstrap/Accordion';

const SideNav = () => {

    let generalRedux = useSelector(state => state.generalSlice)
    let dispatch = useDispatch()

    return (
        <div className={style.SideNav}>
            <div className={` ${style.allScreenFixedSide} ${generalRedux.openNav && style.open_allScreenFixedSide}`}>
                <div className={` ${style.fixedSide} ${generalRedux.openNav && style.open_fixedSide}`}>
                    <div className={style.fixedSideContent}>
                        <div className={style.mainHeading}>
                            <h3>Menu</h3>
                            <MdClose onClick={() => dispatch(closeSideNav())} />
                        </div>
                        <ul>
                            <li>Home</li>
                            <Accordion defaultActiveKey="0" className={style.accordion}>
                                {sideNav.map(item => (
                                    <li key={item.id}>
                                        <Accordion.Item eventKey={item.id} className={style.accordion_item}>
                                            <Accordion.Header className={style.accordion_header}>{item.title}</Accordion.Header>
                                            <Accordion.Body className={style.accordion_body}>
                                                <ul>
                                                    {item.products.map(product => (
                                                        <li key={product.id}>{product.name}</li>
                                                    ))}
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </li>
                                ))}
                            </Accordion >
                            <li>Blog</li>
                            <li>Hot Offers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav