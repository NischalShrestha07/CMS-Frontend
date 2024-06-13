import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.jsx'

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
                    <a onClick={() => window.location.href = "/createblog"}>CreateBlog</a>
                </nav>
            </header>
        </div >
    )
}

export default Navbar
