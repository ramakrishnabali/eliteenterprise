import "./index.css"

import fb from "../../img/Home/fb.png"
import instagram from "../../img/Home/instagram.png"
import twitter from "../../img/Home/twitter.png"
import vector from "../../img/Home/vector.png"
// import whatsapp from "../../img/Home/whatsapp.png"

const Footer = ()=>(
    <>
    <div className="footer-container">
    {/* <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><img className="whats-app" src={whatsapp} alt="whatsapp" /></a> */}
        <div className="contact-us-container">
            <h1  className="policy-heading-footer">Contact Us</h1>
            <label className="label-email" htmlFor="email">Email</label>
            <p  className="utilities">needhelp@gmail.com</p>
            <label  className="label-email" htmlFor="phone">Phone</label>
            <p  className="utilities">666 888 888</p>
            <label  className="label-email" htmlFor="address">Address</label>
            <p  className="utilities">Mumbai Andheri, India</p>
            {/* <div>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><img className="whats-app" src={whatsapp} alt="whatsapp" /></a>
            </div> */}
        </div>
        <div className="social-media-container">
            <h1  className="policy-heading-footer">Elite Enterprise</h1>
            <p className="policy-desc">Simply dummy text of the printing and typesetting industry.<br />
                Lorem Ipsum simply dummy text of the printing </p>
            <div className="social-media-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a>
                <a href="https://www.X.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><img src={vector} alt="vector" /></a>
            </div>
        </div>
        <div className="utlities-container">
            <h1 className="policy-heading-footer">Utility Pages</h1>
            <p className="utilities">Terms&Conditions</p>
            <p  className="utilities">Refund Policy</p>
            <p  className="utilities">Privacy Policy</p>
            <p  className="utilities">shop</p>
            <p  className="utilities">My Account</p>
            <p  className="utilities">Brands</p>
        </div>
    </div>
    <div className="social-media-container-small">
            <h1  className="policy-heading-footer">Elite Enterprise</h1>
            <p className="policy-desc">Simply dummy text of the printing and typesetting industry.<br />
                Lorem Ipsum simply dummy text of the printing </p>
            <div className="social-media-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a>
                <a href="https://www.X.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><img src={vector} alt="vector" /></a>
            </div>
        </div>
    <hr className="hr-line-footer"/>
    <div className="copy-right-container">
        <p className="copy-right">Copyright ©<span className="label-email"> Elite Enterprise</span>| Designed & Developed By<span className="label-email"> Incinc Media</span> </p>
    </div>
    </>
)

export default Footer