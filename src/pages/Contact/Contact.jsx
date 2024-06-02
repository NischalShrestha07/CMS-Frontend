import './Contact.css'
// import './Home.jsx'
import React from 'react'

function Contact() {
    return (
        <div className="contact-page">
            <header>
                <div className="logo"><span>CodeWithNischal</span></div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>

                    <a href="/contact">Contact</a>
                </nav>
            </header>
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Please reach out with any questions or feedback.</p>
            </section>
            <section className="contact-details">
                <h2>Our Contact Details</h2>
                <div className="details">
                    <div className="detail">
                        <h3>Address</h3>
                        <p>123 Coding Lane, Code City, 45678</p>
                    </div>
                    <div className="detail">
                        <h3>Phone</h3>
                        <p>+123 456 7890</p>
                    </div>
                    <div className="detail">
                        <h3>Email</h3>
                        <p>info@nischalcode.com</p>
                    </div>
                </div>
            </section>
            <section className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
            <section className="map">
                <h2>Our Location</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.012036544245!2d144.96305761532298!3d-37.81410797975163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c8e0f8ad165!2sCoding%20Lane%2C%20Code%20City!5e0!3m2!1sen!2s!4v1625048443948!5m2!1sen!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Our Location">
                    </iframe>
                </div>
            </section>
            <footer>
                <p>&copy; 2024 <span>CodeWithNischal</span>. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Contact
