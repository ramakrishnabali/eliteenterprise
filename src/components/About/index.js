import "./index.css"

import Header from "../Header"
import Footer from "../Footer"

import bucket from "../../img/About/bucket.png"
import chocolate1 from "../../img/Home/chocolate1.png"
import circle from "../../img/About/circle.png"
import LeftArrow from "../../img/Home/LeftArrow.png"
import RightArrow from "../../img/Home/RightArrow.png"
import CELEBRE125x125 from "../../img/Home/CELEBRE125x125.png"
import dawn125x125 from "../../img/Home/dawn125x125.png"
import delta from "../../img/Home/delta.png"
import DIRA125x125 from "../../img/Home/DIRA125x125.png"
import ELLEVIRE125x125 from "../../img/Home/ELLEVIRE125x125.png"
import returnPolicy from "../../img/Home/returnPolicy.png"
import Fresh from "../../img/Home/Fresh.png"
import securedPayments from "../../img/Home/securedPayments.png"
import support from "../../img/Home/support.png"
import { HiArrowSmRight } from "react-icons/hi";


const About = ()=>(
    <>
    <Header />
    <div className="about-container">
        <div className="about-top-container">
            <h1>About</h1>
        </div>
        <div className="bucket-container">
            <img className="bucketImg" src={bucket} alt="bucket" />
            <div className="bucket-sub-container">
            <h3 className="about-us">About us</h3>
            <h1 className="bucket-heading">We do Creative <br />Things for Success</h1>
            <p className="creative-paragraph-bucket">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley.Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </div>
        <div  className="bucket-container why-choose-us-container">
            <div className="bucket-sub-container">
                <h3 className="about-us">About us</h3>
                <h1 className="bucket-heading">We do Creative <br />Things for Success</h1>
                <p className="why-choose-us-paragraph">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley.Simply dummy text of the printing and typesetting industry.</p>
                <div className="circle-container">
                    <img src={circle} alt="circle" />
                    <p className="circle-desc">100% Natural Product</p>
                </div>
                <p className="why-choose-us-paragraph desc">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s</p>
                <div className="circle-container">
                    <img src={circle} alt="circle" />
                    <p className="circle-desc">100% Natural Product</p>
                </div>
                <p className="why-choose-us-paragraph desc">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <img src={chocolate1} alt="chocolate" />
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
        <div className="brand-partner-container">
        <div>
            <h3>Brands</h3>
            <h1>Our Brand Partners</h1>
        </div>
        <button type="button" className="about-us-button load-more">View All Brands<span className="orange-arrow">{< HiArrowSmRight />}</span></button>
        </div>
        <div className="brands-container">
            <img className="left-arrow" src={LeftArrow} alt="left-arrow" />
            <img className="brand-image" src={ELLEVIRE125x125} alt="ELLEVIRE125x125" />
            <img className="brand-image" src={dawn125x125} alt="dawn125x125" />
            <img className="brand-image" src={DIRA125x125} alt="DIRA125x125" />
            <img className="brand-image" src={delta} alt="delta" />
            <img className="brand-image" src={CELEBRE125x125} alt="CELEBRE125x125" />
            <img className="right-arrow" src={RightArrow} alt="right-arrow" />
        </div>
    </div>
    <Footer />
    </>
)

export default About