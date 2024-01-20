import React from 'react'
import "../CSS/support.css";
import contact from "../Image/contact_image.png"
import Locator from "../Image/contact-locator.png"
import email from "../Image/email.png"
import fbicon from '../Image/fbicon.png'
import twittericon from '../Image/twittericon.png'
import instaicon from '../Image/instalogo.png'
import FooterSection from '../Components/Footer';
import { Box } from '@chakra-ui/react';
export const Support = () => {
    const handlechanges = () => {
        alert("Submit Successfully");
    };
    return (
        <Box>
            <Box>
                <header>
                    <section>
                        <h1>Support Us</h1>
                        <p> Share your valuable feedbacks as well as any concern</p>
                    </section>
                </header>
                <div className="mapform">
                    <div className="map_303">
                        <div className="mapimg_303">
                            <iframe className="map_image" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d248889.69737466116!2d77.54154458642246!3d12.91405058260273!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705761745684!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="fast" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="form_303">
                            <div className="mes_side1_303">
                                <h2 className="H2map_303">Message</h2>
                                <form action="mailto:kundankumarsuraj761@gmail.com" method='post'>
                                    <div className="detail1_303">
                                        <div className="name_303">
                                            <input type="text" id="name" placeholder="  Your name" required />
                                        </div>
                                        <div className="email_303">
                                            <label for="email"></label>
                                            <input type="email" id="email" placeholder="   Your email" required />
                                        </div>
                                    </div>
                                    <div className="details2_303">
                                        <textarea name="message" id="feedback" cols="30" rows="10"
                                            placeholder="  Your message" required></textarea>
                                    </div>
                                    <div className="details3_303">
                                        <button type="submit" className="btnblue_303" onClick={handlechanges} re>Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="info_side2_303">
                                <h2 className="H2info_303">Details</h2>
                                <div className="firstdiv_303">
                                    <img className="contact-locator_303" src={Locator} alt="logo" />
                                    <p className="contactpara_303">123 sector 15 NaviMumbai , Maharastra India</p>
                                </div>
                                <div className="seconddiv_303">
                                    <img className="contact-locator_303" src={contact} alt="logo" />
                                    <p className="contact_303">+91-9764320123</p>
                                </div>
                                <div className="thirddiv_303">
                                    <img className="email-locator_303" src={email} alt="logo" />
                                    <p className="email_303">Bonvoyage@gmail.com</p>
                                </div>
                                <div className="fourthdiv_303">
                                    <a  href="https://www.facebook.com/"><img src={fbicon}  style={{ width: "55px", height: "55px" }} alt="fb" /></a>
                                    <a  href="https://twitter.com/i/flow/login"><img src={twittericon}  style={{ width: "55px", height: "55px" }} alt="twitter" /></a>
                                    <a href="https://www.instagram.com/"><img src={instaicon}  style={{ width: "55px", height: "55px" }} alt="Insta" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <Box>
                <FooterSection />
            </Box>
        </Box>

    )
}

export default Support;