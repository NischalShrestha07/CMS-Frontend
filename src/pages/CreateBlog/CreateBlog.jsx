import { useState } from 'react'
import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [description, setDescription] = useState("")

    // console.log(title, subTitle, description);
    const createBlog = async (e) => {
        e.preventDefault()

        const data = {
            title: title,//backendLayLeko : StateName
            subTitle: subTitle,
            description: description
        }
        // send above states data to api
        // ya tala ko error blogs ko sato backend ma createBlog vayera vako raxa
        const response = await axios.post("http://localhost:2000/createBlog", data)
        console.log(response);
    }



    return (
        <>
            <Navbar />
            <div className="manage">
                <div className="form-container">
                    <form onSubmit={createBlog}>
                        <h1>FORM TITLE</h1>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" placeholder='Enter text' name="title" id="title" onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subtitle">Subtitle:</label>
                            <input type="text" placeholder='Enter Subtitle' id="subtitle" onChange={(e) => setSubTitle(e.target.value)} name='subtitle' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)} name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateBlog
