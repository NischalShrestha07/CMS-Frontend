import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <header>
                <div className="logo"><span>CodeWithNischal</span></div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    {/* use of window.location will load the whole file so we use navigate() instead */}
                    {/* <a onClick={() => window.location.href = "./createblog"}>CreateBlog</a> */}
                    <a onClick={() => navigate('./createblog')}>CreateBlog</a>
                </nav>
            </header>
        </div >
    )
}

export default Navbar
