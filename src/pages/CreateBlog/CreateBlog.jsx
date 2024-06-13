import React, { useState } from 'react'
import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [description, setDescription] = useState("")

    console.log(title);
    return (
        <>
            <Navbar />
            <div className="manage">
                <div className="form-container">
                    <form>
                        <h1>FORM TITLE</h1>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" placeholder='Enter text' name="title" id="title" onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subtitle">Subtitle:</label>
                            <input type="text" placeholder='Enter Subtitle' id="subtitle" name='subtitle' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" placeholder='Enter Description' name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateBlog
