import { Link } from "react-router-dom"

import "./index.css"

import Header from "../Header"
import Footer from "../Footer"

import ElleVireExcellenceWhippingCream2 from "../../img/Home/ElleVireExcellenceWhippingCream2.jpg"


const Shop =()=>(
    <>
        <Header />
        <div className="about-top-container">
            <h1>Shop</h1>
        </div>
        <ul className="featured-products-container">
            <Link to={`/shop/${1}`}  className="featured-product">
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
            </Link>

            <Link to={`/shop/${1}`}  className="featured-product">
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
        <li className="featured-product">
            <p className="sale">Sale</p>
            <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" className="sale1" />
            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
            <hr className="hr-line"/>
            <div className="cost-container">
                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                <button type="button" className="add-to-cart">Add to Cart</button>
            </div>
        </li>

        <li className="featured-product">
            <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
            <hr className="hr-line"/>
            <div className="cost-container">
                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                <button type="button" className="add-to-cart">Add to Cart</button>
            </div>
        </li>
        </ul>

        <ul className="featured-products-container">
            <li className="featured-product">
                <p className="sale">Sale</p>
                <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" className="sale1" />
                <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                <hr className="hr-line"/>
                <div className="cost-container">
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <button type="button" className="add-to-cart">Add to Cart</button>
                </div>
            </li>

            <li className="featured-product">    
                <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                <hr className="hr-line"/>
                <div className="cost-container">
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <button type="button" className="add-to-cart">Add to Cart</button>
                </div>
            </li>

            <li className="featured-product">
                <p className="sale">Sale</p>
                <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" className="sale1" />
                <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                <hr className="hr-line"/>
                <div className="cost-container">
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <button type="button" className="add-to-cart">Add to Cart</button>
                </div>
            </li>

            <li className="featured-product">
                <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                <hr className="hr-line"/>
                <div className="cost-container">
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <button type="button" className="add-to-cart">Add to Cart</button>
                </div>
            </li>
        </ul>

        <ul className="featured-products-container">
        <li className="featured-product">
            <p className="sale">Sale</p>
            <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" className="sale1" />
            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
            <hr className="hr-line"/>
            <div className="cost-container">
                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                <button type="button" className="add-to-cart">Add to Cart</button>
            </div>
        </li>

        <li className="featured-product">
            
            <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
            <hr className="hr-line"/>
            <div className="cost-container">
                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                <button type="button" className="add-to-cart">Add to Cart</button>
            </div>
        </li>

        <li className="featured-product">
            <p className="sale">Sale</p>
            <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" className="sale1" />
            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
            <hr className="hr-line"/>
            <div className="cost-container">
                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                <button type="button" className="add-to-cart">Add to Cart</button>
            </div>
        </li>

        <li className="featured-product">
            <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
            <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
            <hr className="hr-line"/>
            <div className="cost-container">
                <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                <button type="button" className="add-to-cart">Add to Cart</button>
            </div>
        </li>
        </ul>

        <ul className="featured-products-container">
            <li className="featured-product">
                <p className="sale">Sale</p>
                <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" className="sale1" />
                <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                <hr className="hr-line"/>
                <div className="cost-container">
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <button type="button" className="add-to-cart">Add to Cart</button>
                </div>
            </li>

            <li className="featured-product">    
                <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                <hr className="hr-line"/>
                <div className="cost-container">
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <button type="button" className="add-to-cart">Add to Cart</button>
                </div>
            </li>

            <li className="featured-product">
                <p className="sale">Sale</p>
                <img src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" className="sale1"/>
                <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                <hr className="hr-line"/>
                <div className="cost-container">
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <button type="button" className="add-to-cart">Add to Cart</button>
                </div>
            </li>

            <li className="featured-product">
                <img className="sale2" src={ElleVireExcellenceWhippingCream2} alt="ElleVireExcellenceWhippingCream2" />
                <h1 className="featured-product-heading">Caramel Crunchies Z6579</h1>
                <hr className="hr-line"/>
                <div className="cost-container">
                    <p className="featured-product-cost">425.00 <span className="updated-cost">525.00</span></p>
                    <button type="button" className="add-to-cart">Add to Cart</button>
                </div>
            </li>
        </ul>
        <Footer />
    </>
)

export default Shop