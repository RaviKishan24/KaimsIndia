import React from 'react'
import "./contact.css"
import contactimage from "./assets/contactus-image.avif"
import email from "./assets/email.png"
import phone from "./assets/whatsapp.png"

function Contactus() {
    return (
        <div className='contact-main-container'>
            <h1 className='contact-heading'>Contact Us</h1>
            <p className='contact-para'> Reach out to kaims india for expert digital marketing and business support.</p>
            <div className='contact-container'>

                <div className='contact-image'>
                    <img src={contactimage} alt="" />

                </div>
                <div className='contact-form'>

                    <form>

                        <div className='inputs' >
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" required id='name' placeholder='Enter Your name' />
                        </div>

                        <div className='inputs'>
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" required id='email' placeholder='Enter Your name' />
                        </div>
                        <div className='inputs'>
                            <label htmlFor="Message">Message:</label>
                            <textarea name="" id="Message" rows={10}>Write Message..........</textarea>
                        </div>

                        <button className='form-btn'>Send Message</button>
                    </form>

                </div>

            </div>
            <h2 className='conatact-info-h2'>Our Contact Informations</h2>

            <div className="contact-info-section">


                <div className="contact-details">
                    <p><strong>Email:</strong> kaimindiadigital@gmail.com</p>
                    <p><strong>Phone:</strong> +91-9354997073, +91-9354364808</p>
                    <p className="address">
                        <strong>Address:</strong> Mahendra Park, Adarsh Nagar,<br />
                        Near Jahangir Puri Metro Station,<br />
                        Delhi - 110033
                    </p>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55982.14372911082!2d77.165354!3d28.723013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0177163f7489%3A0xf036225785ca7bc9!2skaims%20india!5e0!3m2!1sen!2sus!4v1771961297314!5m2!1sen!2sus"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location"
                    />
                </div>

            </div>

            
        </div>
    )
}

export default Contactus
