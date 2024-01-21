import React from 'react'
import "../CSS/footer.css";
import fbicon from '../Image/fbicon.png'
import twittericon from '../Image/twittericon.png'
import instaicon from '../Image/instalogo.png'
export const FooterSection = () => {
    return (
        <>
            <div className='footerMain' >
                <div className="footer">
                    < div className='content'>
                        <a href="/support"><h1 style={{ color: "white" }}>Support</h1></a>
                        <p>Help Center</p>
                        <p>Safety information</p>
                        <p>Cancellation Option</p>
                        <p>Our Covid-19 Response</p>
                        <p>Supporting people with disabilities</p>
                        <p>Report a neighbourhood concern</p>
                    </div >
                    < div className='content'>
                        <h1 style={{ color: "white" }}>Community</h1>
                        <p>Disater relief housing</p>
                        <p>Support</p>
                        <p>Celebrating diversity & belonging</p>
                        <p>Combating discrimination</p>

                    </div >
                    < div className='content'>
                        <h1 style={{ color: "white" }}>Housing</h1>
                        <p>Try Housing</p>
                        <p>Protection from Homeownner</p>
                        <p>Explore housing resources</p>
                        <p>Visit our community forum</p>
                        <p>How to homeowner responsibly</p>
                    </div >
                    < div className='content'>
                        <a href="/about"><h1 style={{ color: "white"}}>About</h1></a>
                        <p>Newsroom</p>
                        <p>Learn about new features</p>
                        <p>Letter from our founder</p>
                        <p>Carrers</p>
                        <p>Investors</p>
                        <p>WorldTravelLuxe</p>
                    </div >
                    < div className='content'>
                        <a href="https://play.google.com" target='_blank'>
                        <button className='playstore'>
                            <div>
                                <img width="35" height="35" src="https://img.icons8.com/fluency/48/google-play.png" alt="google-play" />
                            </div>
                            <div>
                                <p style={{ fontSize: "10px", textAlign: "start", marginBottom: "0px" }}>GET IT ON</p>
                                <h4 style={{ marginTop: "-5px", fontWeight: "600" }}>Google Play</h4>
                            </div>
                        </button>
                        </a>
                        <a href="https://www.apple.com/in/app-store/"  target='_blank'>
                        <button className='Appstore'>
                            <div>
                                <img width="35" height="35" src="https://img.icons8.com/ios-glyphs/30/mac-os.png" alt="mac-os" />
                            </div>
                            <div>
                                <p style={{ fontSize: "10px", textAlign: "start", marginBottom: "0px" }}>GET IT ON</p>
                                <h4 style={{ marginTop: "-5px", fontWeight: "600" }}>App Store</h4>
                            </div>
                        </button>
                        </a>
                        <div className="icon">
                            <a href="https://www.facebook.com/login/"  target='_blank'><img src={fbicon} style={{width:"40px", height:"40px"}} alt="Fb" /></a>
                            <a href="https://twitter.com/login"  target='_blank'><img src={twittericon} style={{width:"40px", height:"40px"}} alt="Twitter" /></a>
                            <a href="https://www.instagram.com/accounts/login/?hl=en"  target='_blank'><img src={instaicon} style={{width:"40px", height:"40px"}} alt="Insta" /></a>
                        </div>
                    </div >
                </div>
                    <hr className='horizontalrule' />
                <div className='copyright'>
                    <div className="sub1copyright">
                        <p style={{fontSize:"15px", color:"white"}}>©Copyright all rights reserved 2024</p>
                    </div>
                    <div className="sub2copyright">
                        <p style={{color:"white"}}>English(US)<span style={{color:"white"}}>€</span>Euro</p>
                    </div>
                </div>
            </div >
        </>
    )
}
export default FooterSection;