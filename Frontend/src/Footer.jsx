import React from 'react'
import logo from "./assets/logo.png"
import facebook from "./assets/fb.png"
import insta from "./assets/insta.png"
import x from "./assets/x.png"
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (

        <div className='Foooter_container'>

            <div className='Foooter_container_links' >
                <div className='logoanddetails footer-link' >
                    <img src={logo} alt="footerLogo" className='logo' />
                    <p className='Foooter_container_links_text'>
                        Digital Success Begins with KAIMS India because we combine strategy, creativity, and
                        technology to help businesses grow online with confidence.
                    </p>

                    <div className='footer_socialmedialinks'>
                        <img src={facebook} alt="facebook" />
                        <img src={insta} alt="instagram" />
                        <img src={x} alt="xtwiter" />
                    </div>
                </div>

                <div className='footer-link'>
                    <h2>Services</h2>
                    <ul>
                        <li><Link to="/services/gst-registration">GST Registration</Link></li>
                        <li><Link to="/services/seo">SEO Optimization</Link></li>
                        <li><Link to="/services/gmb">Google My Business</Link></li>
                        <li><Link to="/services/meta-ads">Meta Ads</Link></li>
                        <li><Link to="/services/ppc">Google Ads / PPC</Link></li>
                        <li><Link to="/services/social-media">Social Media Management</Link></li>
                        <li><Link to="/services/website">Website Development</Link></li>
                        <li><Link to="/services/branding">Brand Promotion</Link></li>
                        <li><Link to="/services/trademark">Trademark Registration</Link></li>
                    </ul>
                </div>

                <div className='footer-link'>
                    <h2>Blogs</h2>
                    <ul>
                        <li><Link to="">digital marketing agency in india</Link></li>
                        <li><Link to="/blogs">top 10 digital marketing agencies in india</Link></li>
                        <li><Link to="/faqs">digital marketing agency near me</Link></li>
                        <li><Link to="/contact">digital marketing expert in delhi</Link></li>
                    </ul>
                </div>

                <div className='footer-link'>
                    <h2>Knowledge</h2>
                    <ul>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/return-policy">Return & Refund Policy</Link></li>
                        <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                    </ul>
                </div>

            </div>

    

            <p className='Foooter_container-copyright'>© 2026 KAIMS INDIA. All rights reserved.</p>

        </div>


    )
}

export default Footer;
