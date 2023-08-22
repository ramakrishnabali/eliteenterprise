import "./index.css"

import Header from "../Header"
import Footer from "../Footer"
import singleBlog from "../../img/Blog/singleBlog.png"
import Vector from "../../img/Blog/Vector.png"


const SpecificBlog = ()=>(
    <>
        <Header />   
            <div className="single-bloger-container">
                 <img src={singleBlog} alt="singleBlog" className="single-blog-image" />
                <div className="single-bloger">
                    <div className="posted-date">
                        <p className="single-blog-paragraph"><span className="single-blog-span">Posted On</span>: January 6, 2022</p>
                        <div className="blog-name-container">
                            <img src={Vector} alt="vector" className="vector" />
                            <p className="bloger-name">By Rachi Card</p>
                        </div>
                    </div>
                    <h1 className="single-bloger-heading">Research More Organic Food</h1>
                    <p className="single-blog-paragraph">Established fact that a reader will be distracted by the readable content of a page when looking a layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                </div>

                <div className="single-bloger-bottom-container">
                    <p className="single-blog-paragraph">Established fact that a reader will be distracted by the readable content of a page when looking a layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p> 
                    <h1 className="single-bloger-heading">Preferred Form of Vitamin D?</h1>
                    <p className="single-blog-paragraph">Established fact that a reader will be distracted by the readable content of a page when looking a layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                    <ul className="dots-container">
                        <li className="dots-list">
                            <h3> Publishing packages and web pageLorem Ipsum as their default</h3>
                        </li>
                        <li className="dots-list">
                            <h3>  Content here, content here', making it look like readable</h3>
                        </li>
                        <li className="dots-list">
                            <h3> Packages and web pageLorem Ipsum as their default</h3>
                        </li>
                    </ul>
                    <div className="qutation-container">
                        <h3>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. 
                            The second is that organic applied to an inefficient operation will magnify the health.”</h3>    
                    </div>
                    <h1 className="single-bloger-heading">Make perfect organic product with us</h1>
                    <p className="single-blog-paragraph">Established fact that a reader will be distracted by the readable content of a page when looking a layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                    <ol className="dots-container">
                        <li className="dots-list">
                            <h3>Publishing packages and web pageLorem Ipsum as their default</h3>
                        </li> 

                         <li className="dots-list">
                            <h3>Publishing packages and web pageLorem Ipsum as their default</h3>
                        </li>

                         <li className="dots-list">
                            <h3>Publishing packages and web pageLorem Ipsum as their default</h3>
                        </li>   
                    </ol>   
                </div>
            </div>
        <Footer />
    </>

)

export default SpecificBlog