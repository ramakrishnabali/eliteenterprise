import "./index.css"

import Header from "../Header"
import Footer from "../Footer"
import person from "../../img/Team/person.png"
import Fb from "../../img/Team/Fb.png"
import Twiter from "../../img/Team/Twiter.png"
import Insta from "../../img/Team/Insta.png"
import MarianneLoreno from "../../img/Team/MarianneLoreno.jpg"
import RigaPelore from "../../img/Team/RigaPelore.jpg"
import KeiraKnightley from "../../img/Team/KeiraKnightley.jpg"
import ScottLawrence from "../../img/Team/ScottLawrence.jpg"
import KarenAllen from "../../img/Team/KarenAllen.jpg"


const Team = ()=>(
        <>
            <Header />
            <div className="about-top-container">
                <h1>Team</h1>
            </div>
            <div className="team-container">
                <div className="team-heading-container">
                    <h3 className="team-heading">Team</h3>
                    <h1 className="team-main-heading">Our Organic Experts</h1>
                    <p className="policy-desc">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>
                <ul className="team-info-container">
                    <li className="personal-container">
                        <img src={person} alt="team" />
                        <div className="personal-info">
                            <div>
                                <h1 className="person-name">Keira Knightley</h1>
                                <p className="occupation">Farmer</p>
                            </div>   
                            <div className="media">   
                                <img src={Fb} alt="fb"/>
                                <img src={Twiter} alt="Twiter" />
                            </div>
                        </div>
                    </li>

                    <li className="personal-container">
                        <img src={MarianneLoreno} alt="team"  className="person-image"/>
                        <div className="personal-info-lady">
                            <div>
                                <h1 className="person-name">Marianne Loreno</h1>
                                <p className="occupation">Designer</p>
                            </div>   
                            <div className="media">
                                <img src={Insta} alt="insta" />   
                                <img src={Fb} alt="fb"/>
                                <img src={Twiter} alt="twiter" />   
                            </div>
                        </div>
                    </li>

                    <li className="personal-container">
                        <img src={RigaPelore} alt="team"  className="person-image"/>
                        <div className="personal-info-lady">
                            <div>
                                <h1 className="person-name">RigaPelore</h1>
                                <p className="occupation">Farmer</p>
                            </div>   
                            <div className="media">
                                <img src={Insta} alt="insta" />   
                                <img src={Fb} alt="fb"/>
                                <img src={Twiter} alt="twiter" />   
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="team-info-container">
                <li className="personal-container">
                        <img src={KeiraKnightley} alt="team"  className="person-image"/>
                        <div className="personal-info-lady">
                            <div>
                                <h1 className="person-name">Keira Knightley</h1>
                                <p className="occupation">Farmer</p>
                            </div>   
                            <div className="media">
                                <img src={Insta} alt="insta" />   
                                <img src={Fb} alt="fb"/>
                                <img src={Twiter} alt="twiter" />   
                            </div>
                        </div>
                    </li>

                    <li className="personal-container">
                        <img src={ScottLawrence} alt="team"  className="person-image"/>
                        <div className="personal-info-lady">
                            <div>
                                <h1 className="person-name">ScottLawrence</h1>
                                <p className="occupation">Farmer</p>
                            </div>   
                            <div className="media">
                                <img src={Insta} alt="insta" />   
                                <img src={Fb} alt="fb"/>
                                <img src={Twiter} alt="twiter" />   
                            </div>
                        </div>
                    </li>

                    <li className="personal-container">
                        <img src={KarenAllen} alt="team"  className="person-image"/>
                        <div className="personal-info-lady">
                            <div>
                                <h1 className="person-name">KarenAllen</h1>
                                <p className="occupation">Designer</p>
                            </div>   
                            <div className="media">
                                <img src={Insta} alt="insta" />   
                                <img src={Fb} alt="fb"/>
                                <img src={Twiter} alt="twiter" />   
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
)

export default Team