import './About.css'
import React from 'react'

const About = () => {
    return (
        <div>

            <header>
                <div className="logo"><span>CodeWithNischal</span></div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>


            <section className="about-hero">
                <h1>About Us</h1>
                <p>Learn more about our mission, vision, and the team behind <span>CodeWithNischal</span>.</p>
            </section>
            <section className="our-mission">
                <h2>Our Mission</h2>
                <p>At <span>CodeWithNischal</span>, our mission is to provide high-quality coding tutorials and services to help individuals become proficient programmers. We believe in empowering our community with the knowledge and skills needed to succeed in the tech industry.</p>
            </section>
            <section className="our-team">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="team-member1.jpg" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>Founder & Lead Instructor</p>
                    </div>
                    <div className="team-member">
                        <img src="team-member2.jpg" alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>Co-Founder & Developer</p>
                    </div>
                    <div className="team-member">
                        <img src="team-member3.jpg" alt="Team Member 3" />
                        <h3>Mark Johnson</h3>
                        <p>Data Scientist & Instructor</p>
                    </div>
                </div>
            </section>


            <footer>
                <p>&copy; 2024 <span>CodeWithNischal</span>. All rights reserved.</p>
            </footer>


        </div>
    )
}

export default About
