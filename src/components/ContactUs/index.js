import "./index.css"

import Header from "../Header"
import Footer from "../Footer"
import support1 from "../../img/Support/support1.png"
import message from "../../img/Support/message.png"
import call from "../../img/Support/call.png"
import twitter from "../../img/Support/twitter.png"
import instagram from "../../img/Support/instagram.png"
import fb from "../../img/Support/fb.png"
import goo from "../../img/Support/goo.png"
// import location from "../../img/Support/location.png"

const ContactUs = ()=>{


    const formSubmit = (event) =>{
        event.preventDefault()
        console.log("successfully submitted")
    }
    return(
    <>
        <Header />
        <div className="about-top-container">
            <h1>CONTACT</h1>
        </div>
        <div className="support-container">
            <div className="contact-details-container">
                <img src={support1} alt="contactUs" className="support1"/>
                <div>
                    <h1 className="single-bloger-heading">We'd love to talk about how we can work together.</h1>
                    <p className="description">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className="message-container">
                        <img src={message} alt="message" className="message-image" />
                        <div>
                            <p className="message">Message</p>
                            <p className="description">support@theeliteenterprise.in</p>
                        </div>
                    </div>

                    <div className="message-container">
                        <img src={call} alt="message" className="message-image" />
                        <div>
                            <p className="message">Contact Us</p>
                            <p className="description">+91 123456789</p>
                        </div>
                    </div>
                    <div className="support-social-media">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                    <a href="https://wwwfacebook.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="fb" /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><img src={goo} alt="google" /></a>
                    </div>
                </div>
            </div>

            <div className="location-container">
                    <div className="location"> 
                        <h4 className="location-heading">Location</h4>
                        <p className="about-location">Established fact that a 
                            reader will be distracted by the readable 
                            content of a page when looking a layout. The point of using.
                        </p>
                        <p className="location-address">Near Gala no 34 sarvodya industrial estate, <br/>
                            Paper Box Ln, Andheri East,<br/> 
                            Mumbai, Maharashtra 400093
                        </p>
                    </div>
            </div>

            <form className="message-form" onSubmit={formSubmit}>
                <ul className="user-details-container">
                    <li className="user">
                        <label className="location-address" htmlFor="full-name">Full Name*</label>
                        <input className="user-input" placeholder="Your Full Name" type="text" id="full-name"/>
                    </li>

                    <li className="user">
                        <label className="location-address" htmlFor="email">Your Email*</label>
                        <input className="user-input" placeholder="example@yourmail.com" type="text" id="email"/>
                    </li>

                    <li className="user">
                        <label className="location-address" htmlFor="company">Company*</label>
                        <input className="user-input" placeholder="your company name here" type="text" id="company"/>
                    </li>

                    <li className="user">
                        <label className="location-address" htmlFor="subject">Subject*</label>
                        <input className="user-input" placeholder="how can we help" type="text" id="subject"/>
                    </li>

                    <li className="text">
                        <label className="location-address" htmlFor="message">Message*</label>
                        <textarea className="user-text" placeholder="hello there,i would like to talk about how to...." cols={105} rows={10} id="message"/>
                    </li>
                    
                </ul>
                <button type="submit" className="send-message-button">Send Message</button>
            </form>
        </div>
        <Footer />
    </>
    )
}

export default ContactUs