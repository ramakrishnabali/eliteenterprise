import { Link } from "react-router-dom"
import {v4} from "uuid"

import "./index.css"

import Header from "../Header"
import Footer from "../Footer"

import ElleVireExcellenceWhippingCream2 from "../../img/Home/ElleVireExcellenceWhippingCream2.jpg"
import { useContext } from "react"
import cartContext from "../../cartContext"

const shopList = [1,2,3,4]

const Shop =()=>{
    const {addToCart} = useContext(cartContext)
    return(
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
                        (
                            <li className="advanched-list"  key={id}>
                                <Link to={`/shop/${id}`}  className="featured-product">
                                    <p className="sale">Sale</p>
                                    <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2"/>
                                    <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                                    <hr className="hr-line"/>
                                </Link>
                                <div className="cost-container">
                                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                    <button type="button" onClick={()=>{addToCart()}} className="add-to-cart">Add to Cart</button>
                                </div>
                            </li>
                        ):
                        (
                            <li className="advanched-list"  key={id}>
                                <Link to={`/shop/${id}`}  className="featured-product">   
                                    <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                                    <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                                    <hr className="hr-line"/>
                                </Link>
                                <div className="cost-container">
                                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                    <button type="button" onClick={()=>{addToCart()}} className="add-to-cart">Add to Cart</button>
                                </div>
                            </li>
                       ))
                    
                })}    
        </ul>

        <ul className="featured-products-container">
                {shopList.map(each =>{
                    const id = v4()
                    return(
                        (each %2 === 0)?
                        (
                            <li className="advanched-list"  key={id}>
                                <Link to={`/shop/${id}`}  className="featured-product">
                                    <p className="sale">Sale</p>
                                    <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2"/>
                                    <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                                    <hr className="hr-line"/>
                                </Link>
                                <div className="cost-container">
                                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                    <button type="button" onClick={()=>{addToCart()}} className="add-to-cart">Add to Cart</button>
                                </div>
                            </li>
                        ):
                        (
                            <li className="advanched-list"  key={id}>
                                <Link to={`/shop/${id}`}  className="featured-product">   
                                    <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                                    <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                                    <hr className="hr-line"/>
                                </Link>
                                <div className="cost-container">
                                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                    <button type="button" onClick={()=>{addToCart()}} className="add-to-cart">Add to Cart</button>
                                </div>
                            </li>
                       ))
                    
                })}    
        </ul>

        <ul className="featured-products-container">
                {shopList.map(each =>{
                    const id = v4()
                    return(
                        (each %2 === 0)?
                        (
                            <li className="advanched-list"  key={id}>
                                <Link to={`/shop/${id}`}  className="featured-product">
                                    <p className="sale">Sale</p>
                                    <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2"/>
                                    <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                                    <hr className="hr-line"/>
                                </Link>
                                <div className="cost-container">
                                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                    <button type="button" onClick={()=>{addToCart()}} className="add-to-cart">Add to Cart</button>
                                </div>
                            </li>
                        ):
                        (
                            <li className="advanched-list"  key={id}>
                                <Link to={`/shop/${id}`}  className="featured-product">   
                                    <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                                    <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                                    <hr className="hr-line"/>
                                </Link>
                                <div className="cost-container">
                                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                    <button type="button" onClick={()=>{addToCart()}} className="add-to-cart">Add to Cart</button>
                                </div>
                            </li>
                       ))
                    
                })}    
        </ul>

        <ul className="featured-products-container">
                {shopList.map(each =>{
                    const id = v4()
                    return(
                        (each %2 === 0)?
                        (
                            <li className="advanched-list"  key={id}>
                                <Link to={`/shop/${id}`}  className="featured-product">
                                    <p className="sale">Sale</p>
                                    <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2"/>
                                    <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                                    <hr className="hr-line"/>
                                </Link>
                                <div className="cost-container">
                                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                    <button type="button" onClick={()=>{addToCart()}} className="add-to-cart">Add to Cart</button>
                                </div>
                            </li>
                        ):
                        (
                            <li className="advanched-list"  key={id}>
                                <Link to={`/shop/${id}`}  className="featured-product">   
                                    <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                                    <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                                    <hr className="hr-line"/>
                                </Link>
                                <div className="cost-container">
                                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                                    <button type="button" onClick={()=>{addToCart()}} className="add-to-cart">Add to Cart</button>
                                </div>
                            </li>
                       ))
                    
                })}    
        </ul>
        <Footer />
    </>
)  
}

export default Shop