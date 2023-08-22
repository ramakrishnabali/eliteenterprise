import { useNavigate } from "react-router-dom"
import "./index.css"

import Header from "../Header"
import Footer from "../Footer"
// import blog1 from "../../img/Blog/blog1.png"
import Vector from "../../img/Blog/Vector.png"
import Aerrow from "../../img/Blog/Aerrow.png"
// import tomoto from "../../img/Blog/tomoto.png"
// import plastic from "../../img/Blog/plastic.png"
// import image1 from "../../img/Blog/image1.png"
// import image2 from "../../img/Blog/image2.png"
// import image3 from "../../img/Blog/image3.png"



const Blog = ()=>{
        const navigate = useNavigate()
    return(
    <>
        <Header />
        <div className="about-top-container">
            <h1>Blogs</h1>
        </div>
        <div className="blog-main-container">
            <div className="blog-container">
                <div className="blog-1 blog">
                {/* <img src={blog1} alt="blog" className="blog-image"/> */}
                    <div className="date-container">
                            <h1 className="date">25</h1>
                            <h1 className="date">Nov</h1>
                    </div>
                    <div className="blog-text-container">
                            <div className="blog-name-container">
                                <img src={Vector} alt="vector" />
                                <p className="bloger-name">By Rachi Card</p>
                            </div>
                            <h1 className="bloger-heading">The Benefits of Vitamin D & How to Get It</h1>
                            <p  className="description">Simply dummy text of the printing and typesetting industry.</p>
                            <button onClick={()=>(navigate(`/blog/${1}`))} type="button" className="bloger-button"> Read More <img src={Aerrow} alt="aerrow" /></button>   
                    </div>
                    </div>
                <div className="blog-2 blog">
                {/* <img src={blog1} alt="blog" className="blog-image"/> */}
                <div className="date-container">
                        <h1 className="date">25</h1>
                        <h1 className="date">Nov</h1>
                </div>
                <div className="blog-text-container">
                        <div className="blog-name-container">
                            <img src={Vector} alt="vector" />
                            <p className="bloger-name">By Rachi Card</p>
                        </div>
                        <h1 className="bloger-heading">Our Favorite Summertime Tomato</h1>
                        <p  className="description">Simply dummy text of the printing and typesetting industry.</p>
                        <button type="button" className="bloger-button"> Read More <img src={Aerrow} alt="aerrow" /></button>   
                </div>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-3 blog">
                {/* <img src={blog1} alt="blog" className="blog-image"/> */}
                <div className="date-container">
                        <h1 className="date">25</h1>
                        <h1 className="date">Nov</h1>
                </div>
                <div className="blog-text-container">
                        <div className="blog-name-container">
                            <img src={Vector} alt="vector" />
                            <p className="bloger-name">By Rachi Card</p>
                        </div>
                        <h1 className="bloger-heading">The Benefits of Vitamin D & How to Get It</h1>
                        <p  className="description">Simply dummy text of the printing and typesetting industry.</p>
                        <button type="button" className="bloger-button"> Read More <img src={Aerrow} alt="aerrow" /></button>   
                </div>
                </div>
                <div className="blog-4 blog">
                {/* <img src={blog1} alt="blog" className="blog-image"/> */}
                <div className="date-container">
                        <h1 className="date">25</h1>
                        <h1 className="date">Nov</h1>
                </div>
                <div className="blog-text-container">
                        <div className="blog-name-container">
                            <img src={Vector} alt="vector" />
                            <p className="bloger-name">By Rachi Card</p>
                        </div>
                        <h1 className="bloger-heading">The Benefits of Vitamin D & How to Get It</h1>
                        <p  className="description">Simply dummy text of the printing and typesetting industry.</p>
                        <button type="button" className="bloger-button"> Read More <img src={Aerrow} alt="aerrow" /></button>   
                </div>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-5 blog">
                {/* <img src={blog1} alt="blog" className="blog-image"/> */}
                <div className="date-container">
                        <h1 className="date">25</h1>
                        <h1 className="date">Nov</h1>
                </div>
                <div className="blog-text-container">
                        <div className="blog-name-container">
                            <img src={Vector} alt="vector" />
                            <p className="bloger-name">By Rachi Card</p>
                        </div>
                        <h1 className="bloger-heading">The Benefits of Vitamin D & How to Get It</h1>
                        <p  className="description">Simply dummy text of the printing and typesetting industry.</p>
                        <button type="button" className="bloger-button"> Read More <img src={Aerrow} alt="aerrow" /></button>   
                </div>
                </div>
                <div className="blog-6 blog">
                {/* <img src={blog1} alt="blog" className="blog-image"/> */}
                <div className="date-container">
                        <h1 className="date">25</h1>
                        <h1 className="date">Nov</h1>
                </div>
                <div className="blog-text-container">
                        <div className="blog-name-container">
                            <img src={Vector} alt="vector" />
                            <p className="bloger-name">By Rachi Card</p>
                        </div>
                        <h1 className="bloger-heading">The Benefits of Vitamin D & How to Get It</h1>
                        <p  className="description">Simply dummy text of the printing and typesetting industry.</p>
                        <button type="button" className="bloger-button"> Read More <img src={Aerrow} alt="aerrow" /></button>   
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default Blog