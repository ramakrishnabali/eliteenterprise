import { Link } from "react-router-dom"
import {v4} from "uuid"

import "./index.css"

import Header from "../Header"
import Footer from "../Footer"

import ElleVireExcellenceWhippingCream2 from "../../img/Home/ElleVireExcellenceWhippingCream2.jpg"

const shopList = [1,2,3,4]

const Shop =()=>(
    <>
        <Header />
        <div className="about-top-container">
            <h1>Shop</h1>
        </div>
        <ul className="featured-products-container">
            {shopList.map(each =>{
                const id = v4()
                return(
                    (each %2 === 0)?
                    (<Link to={`/shop/${id}`}  className="featured-product">
                        <li>
                            <p className="sale">Sale</p>
                            <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2"/>
                            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                            <hr className="hr-line"/>
                            <div className="cost-container">
                                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                <button type="button" className="add-to-cart">Add to Cart</button>
                            </div>
                        </li>
                    </Link>):
                    <Link to={`/shop/${id}`}  className="featured-product">
                        <li>    
                            <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                            <hr className="hr-line"/>
                            <div className="cost-container">
                                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                <button type="button" className="add-to-cart">Add to Cart</button>
                            </div>
                        </li>
                    </Link>
                )
            })}    
        </ul>

        <ul className="featured-products-container">
            {shopList.map(each =>{
                const id = v4()
                return(
                    (each %2 === 0)?
                    (<Link to={`/shop/${id}`}  className="featured-product">
                        <li>
                            <p className="sale">Sale</p>
                            <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2"/>
                            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                            <hr className="hr-line"/>
                            <div className="cost-container">
                                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                <button type="button" className="add-to-cart">Add to Cart</button>
                            </div>
                        </li>
                    </Link>):
                    <Link to={`/shop/${id}`}  className="featured-product">
                        <li>    
                            <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                            <hr className="hr-line"/>
                            <div className="cost-container">
                                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                <button type="button" className="add-to-cart">Add to Cart</button>
                            </div>
                        </li>
                    </Link>
                )
            })}    
        </ul>

        <ul className="featured-products-container">
            {shopList.map(each =>{
                const id = v4()
                return(
                    (each %2 === 0)?
                    (<Link to={`/shop/${id}`}  className="featured-product">
                        <li>
                            <p className="sale">Sale</p>
                            <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2"/>
                            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                            <hr className="hr-line"/>
                            <div className="cost-container">
                                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                <button type="button" className="add-to-cart">Add to Cart</button>
                            </div>
                        </li>
                    </Link>):
                    <Link to={`/shop/${id}`}  className="featured-product">
                        <li>    
                            <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                            <hr className="hr-line"/>
                            <div className="cost-container">
                                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                <button type="button" className="add-to-cart">Add to Cart</button>
                            </div>
                        </li>
                    </Link>
                )
            })}    
        </ul>

        <ul className="featured-products-container">
            {shopList.map(each =>{
                const id = v4()
                return(
                    (each %2 === 0)?
                    (<Link to={`/shop/${id}`}  className="featured-product">
                        <li>
                            <p className="sale">Sale</p>
                            <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2"/>
                            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                            <hr className="hr-line"/>
                            <div className="cost-container">
                                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                <button type="button" className="add-to-cart">Add to Cart</button>
                            </div>
                        </li>
                    </Link>):
                    <Link to={`/shop/${id}`}  className="featured-product">
                        <li>    
                            <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                            <hr className="hr-line"/>
                            <div className="cost-container">
                                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                <button type="button" className="add-to-cart">Add to Cart</button>
                            </div>
                        </li>
                    </Link>
                )
            })}    
        </ul>
        <Footer />
    </>
)

export default Shop