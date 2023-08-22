import { useNavigate } from "react-router-dom";

import "./index.css"

import Header from "../Header"
import Footer from "../Footer"
import { HiArrowSmRight } from "react-icons/hi";




const NotFound = ()=>{
    const navigate = useNavigate()

    return(
    <>
        <Header />
        <div>
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1 className="not-found-heading">404</h1>
                    <h3 className="page-not-found">Page Not Found</h3>
                    <p className="page-not-found-desc">The page you are looking for doesn't exist or has been moved</p>
                    <button type="button" onClick={()=>{navigate("/")}} className="not-found-button">Go to Homepage<span className="orange-arrow">{< HiArrowSmRight />}</span></button>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default NotFound