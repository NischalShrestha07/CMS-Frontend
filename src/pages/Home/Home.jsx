
import axios from 'axios'
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import { useEffect, useState } from 'react'


const Home = () => {
    const [blogs, setBlogs] = useState([])

    // api call here
    const fetchBlogs = async () => {
        const response = await axios.get('http://localhost:2000/blogs')
        setBlogs(response.data.blogs)
        // console.log(response.data.blogs);
    }
    useEffect(() => {
        fetchBlogs()
    }, [])
    console.log(blogs, "Blogs");

    return (
        <div>
            <Navbar />
            {/* <Button title="Log In" color="green" subTitle="I am SubTitle" /> */}
            {/* <Button title="Namastey" color="blue" subTitle="I am SubTitle" /> */}
            <section className="hero">
                <h1>Welcome to CodeWithNischal</h1>
                <p>Your journey to becoming a better programmer starts here.</p>
            </section>
            <section className="about" id="about">
                <h2>About Us</h2>
                <p>At <span>CodeWithNischal</span>, we provide top-notch coding tutorials and services to help you become a proficient programmer.</p>
            </section>
            <section className="services" id="services">
                <h2>Our Services</h2>
                <div className="service-cards">
                    <div className="card">
                        <h3>Web Development</h3>
                        <p>Learn to build modern web applications with our comprehensive tutorials.</p>
                    </div>
                    <div className="card">
                        <h3>Mobile Development</h3>
                        <p>Master the skills to develop responsive and powerful mobile applications.</p>
                    </div>
                    <div className="card">
                        <h3>Data Science</h3>
                        <p>Dive into data analysis, machine learning, and AI with our expert guidance.</p>
                    </div>
                </div>
            </section>
            <section className="testimonials" id="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial-cards">
                    <div className="card">
                        <p>"<span>CodeWithNischal</span> has transformed my coding skills. The tutorials are easy to follow and highly effective."</p>
                        <p>- Jane Doe</p>
                    </div>
                    <div className="card">
                        <p>"The best place to learn programming. Highly recommend <span>CodeWithNischal</span> to all aspiring developers."</p>
                        <p>- John Smith</p>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
            <div className="center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            {blogs.map((blog) => {
                return (
                    <div key={blog._id} className="card-body" >

                        <h5 className="card-title">{blog.title}</h5>
                        <h5 className="card-title">{blog.subTitle}</h5>
                        <p className="card-text">{blog.description}</p>
                        {/* <Link to={`/singleBlog/${blog._id}`} >See More</Link> */}

                    </div>
                )
            })}
            <footer>

                <p>&copy; 2024 <span>CodeWithNischal</span>. All rights reserved.</p>
            </footer>


        </div >
    )
}

export default Home
