import { useContext,useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import {v4} from "uuid"


import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import "./index.css"

import Header from "../Header"
import Footer from "../Footer";
import { HiArrowSmRight } from "react-icons/hi";
import LeftArrow from "../../img/Home/LeftArrow.png"
import RightArrow from "../../img/Home/RightArrow.png"
import Group775 from "../../img/Home/Group775.jpg"
import chocolate1 from "../../img/Home/chocolate1.png"
import ElleVireExcellenceWhippingCream2 from "../../img/Home/ElleVireExcellenceWhippingCream2.jpg"
import CELEBRE125x125 from "../../img/Home/CELEBRE125x125.png"
import dawn125x125 from "../../img/Home/dawn125x125.png"
import delta from "../../img/Home/delta.png"
import DIRA125x125 from "../../img/Home/DIRA125x125.png"
import ELLEVIRE125x125 from "../../img/Home/ELLEVIRE125x125.png"
import returnPolicy from "../../img/Home/returnPolicy.png"
import Fresh from "../../img/Home/Fresh.png"
import securedPayments from "../../img/Home/securedPayments.png"
import support from "../../img/Home/support.png"
import cartContext from "../../cartContext";
// import CustomPrevArrow from "./CustomPrevArrow"

const shopList = [1,2,3,4]

const Home = ()=>{
    const navigate = useNavigate()
    const {addToCart} = useContext(cartContext)
    const [buttonStatus,setButton] = useState({one:true,two:true})
      
    //   const CustomNextArrow = (props) => {
    //     return <div className="custom-slick-next" onClick={props.onClick} />;
    //   };

    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              }
        ]
      }
    return(
    <>
    <Header />
    <div className="home-container">
    <div className="top-container">
        <img className="left-arrow" src={LeftArrow} alt="left-arrow" />
        <div className="creative-heading-container">
            <h1 className="creative-heading">We do Creative <br /> 
            Things for Success</h1>
            <p className="creative-paragraph">Simply dummy text of the printing and typesetting industry.
            Lorem had ceased <br /> to been the industry's standard.</p>
            <button type="button" onClick={()=>{navigate("/shop")}} className="shop-now-button"> Shop Now</button>
        </div>
        <img className="right-arrow" src={RightArrow} alt="right-arrow" />
    </div>

    <div className="group-775" >
        <img src={Group775} alt="group" className="group" />
    </div>

    <div className="about-us-container">
        <img src={chocolate1} alt="chocolate" className="chocolate-image" />
        <div className="about-container">
            <h3 className="about-us">About us</h3>
            <h1 className="about-us-heading">We Believe in working <br /> Accredited Farmers</h1>
            <p className="creative-paragraph-about">Simply dummy text of the printing and typesetting industry.
            Lorem had ceased <br /> to been the industry's standard.</p>
            <h5 className="organic-food-heading">Organic Foods Only</h5>
            <p className="creative-paragraph-about">Simply dummy text of the printing and typesetting industry.
            Lorem had ceased</p>
            <button type="button" onClick={()=>{navigate("/shop")}} className="about-us-button">Shop Now<span className="orange-arrow">{< HiArrowSmRight />}</span></button>
        </div>
    </div>
    <div className="our-products-container">
        <h1 className="our-product-heading">Our Products</h1>
    </div>
    <div className="advanced-container">
        <h1 className="featured-products-heading">Featured Products</h1>
        <ul className="featured-products-container">
                {shopList.map(each =>{
                    const id = v4()
                    return(
                        (each %2 === 0)?
                        (
                            <li className="advanched-list" key={id}>
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
        {!buttonStatus.one && (
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
        )}
    </div>
    {buttonStatus.one && <button type="button" onClick={()=>{setButton(prevState=>({...prevState,one:!prevState.one}))}} className="about-us-button load-more">Load More<span className="orange-arrow">{< HiArrowSmRight />}</span></button>}
    {!buttonStatus.one && <button type="button" onClick={()=>{setButton(prevState=>({...prevState,one:!prevState.one}))}} className="about-us-button load-more">Load Less<span className="orange-arrow">{< HiArrowSmRight />}</span></button>}
    
    <div className="advanced-container">            
        <h1 className="featured-products-heading">New Arrivals</h1>
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

        {!buttonStatus.two && (
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
        )}
    </div> 
    {buttonStatus.two && <button type="button" onClick={()=>{setButton(prevState=>({...prevState,two:!prevState.two}))}} className="about-us-button load-more">Load More<span className="orange-arrow">{< HiArrowSmRight />}</span></button>}
    {!buttonStatus.two && <button type="button" onClick={()=>{setButton(prevState=>({...prevState,two:!prevState.two}))}} className="about-us-button load-more">Load Less<span className="orange-arrow">{< HiArrowSmRight />}</span></button>}
    <div className="brand-partner-container">
        <div>
            <h3>Brands</h3>
            <h1>Our Brand Partners</h1>
        </div>
        <button type="button" className="about-us-button load-more">View All Brands<span className="orange-arrow">{< HiArrowSmRight />}</span></button>
    </div>

    <div className="brands-container">
            <div className="slider-container">
            <Slider {...settings}>
                <div className="brand-image">
                <img src={CELEBRE125x125} alt="CELEBRE125x125" className='image-brand' />
                </div>
                <div className="brand-image">
                <img src={dawn125x125} alt="dawn125x125" className='image-brand' />
                </div>
                <div className="brand-image">
                <img src={delta} alt="delta" className='image-brand' />
                </div>
                <div className="brand-image">
                <img src={DIRA125x125} alt="DIRA125x125" className='image-brand' />
                </div>
                <div className="brand-image">
                <img src={ELLEVIRE125x125} alt="ELLEVIRE125x125" className='image-brand' />
                </div>
                <div className="brand-image">
                <img src={ELLEVIRE125x125} alt="ELLEVIRE125x125" className='image-brand' />
                </div>
                <div className="brand-image">
                <img src={DIRA125x125} alt="DIRA125x125" className='image-brand' />
                </div>
            </Slider>
            </div>
    </div>

    <ul className="our-policy">
        <li className="policy">
            <img src={returnPolicy} alt="returnPolicy" />
            <h1 className="policy-heading">Return Policy</h1>
            <p className="policy-desc">Simply dummy text of the printintypesetting industry.</p>
        </li>

        <li className="policy">
            <img src={Fresh} alt="returnPolicy" />
            <h1  className="policy-heading">100% Fresh</h1>
            <p  className="policy-desc">Simply dummy text of the printintypesetting industry.</p>
        </li>

        <li className="policy">
            <img src={support} alt="returnPolicy" />
            <h1  className="policy-heading">Support</h1>
            <p  className="policy-desc">Simply dummy text of the printintypesetting industry.</p>
        </li>

        <li className="policy">
            <img src={securedPayments} alt="returnPolicy" />
            <h1  className="policy-heading">Secured Payments</h1>
            <p  className="policy-desc">Simply dummy text of the printintypesetting industry.</p>
        </li>
    </ul>
    <Footer />
    
</div>
</>)
    
}

export default Home