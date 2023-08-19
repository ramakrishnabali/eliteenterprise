import { Link } from "react-router-dom"
import {v4} from "uuid"

import "./index.css"

import Header from "../Header"
import Footer from "../Footer"

import ElleVireExcellenceWhippingCream2 from "../../img/Home/ElleVireExcellenceWhippingCream2.jpg"
import monalisa from "../../img/Shop/monalisa.png"
import { HiArrowSmRight } from "react-icons/hi";
import { useContext } from "react"
import cartContext from "../../cartContext"

const shopList = [1,2,3,4]

const SpecificShop = ()=>{
    const {addToCart} = useContext(cartContext)
    return(
    <>
        <Header />
        <div className="about-top-container">
            <h1>Single Product Name</h1>
        </div>
        <div className="single-container">
            <div className="single-shop-container">
                <div>
                    <p className="sale">Sale</p>
                    <img src={monalisa} alt="caramal-cruchies" />
                </div>
                <div className="single-shop-sub-container">
                    <h1 className="caramel-heading">Caramel <br/> Crunchies Z6579</h1>
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <p className="description"><span className="specific-description">For Extra Texture & Crunch.</span><br/>
                        Caramelized biscuit granules.<br/>
                        Size : 3-610 mm.<br/>
                        Storage Condition – Store in cool, Dry, Hygienic place, Away from direct sunlight.</p>
                    <div className="quantity-container">
                        <div>
                            <h3 className="quantity">Quantity: 1</h3>
                            <h3 className="quantity">Size: Kg</h3>
                        </div>
                        <button type="button" className="about-us-button load-more">Add To Cart<span className="orange-arrow">{< HiArrowSmRight />}</span></button>
                    </div>
                </div>
            </div>
            <div className="product-desc-container">
                <div>
                    <button type="button" className="product-description-button">Product Description</button>
                    <button type="button" className="additional-info-button">Additional Info</button>
                </div>
                <p className="product-description description">
                    Welcome to the world of natural and organic. Here you can discover the bounty of nature.
                    We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. 
                    It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.Welcome to the world of natural and organic. 
                    Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. 
                    It offers about 8–10%  healthy chemical-free meal for perfect nutrition. It offers about 8–10%
                    carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
                </p>

                <p className="product-description description">
                    Welcome to the world of natural and organic. Here you can discover the bounty of nature.
                    We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. 
                    It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.Welcome to the world of natural and organic. 
                    Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. 
                    It offers about 8–10%  healthy chemical-free meal for perfect nutrition. It offers about 8–10%
                    carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
                </p>

                <p className="product-description description">
                    Welcome to the world of natural and organic. Here you can discover the bounty of nature.
                    We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. 
                    It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.Welcome to the world of natural and organic. 
                    Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. 
                    It offers about 8–10%  healthy chemical-free meal for perfect nutrition. It offers about 8–10%
                    carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
                </p>
            </div>
        </div>

        <div className="rk-container">
            <h1 className="releated-heading">Related products</h1>
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
        </div>
        

        <Footer />
    </>

)
}
export default SpecificShop