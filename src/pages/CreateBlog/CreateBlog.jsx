import React from 'react'
import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
const CreateBlog = () => {
    return (
        <>
            <Navbar />
            <div className="manage">
                <div className="form-container">
                    <form>
                        <h1>FORM TITLE</h1>
                        <div className="form-group">
                            <label htmlFor="name">Title:</label>
                            <input type="text" placeholder='Enter text' id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Subtitle:</label>
                            <input type="text" placeholder='Enter Subtitle' name="subtitle" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Description:</label>
                            <textarea id="message" placeholder='Enter Description' name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateBlog
