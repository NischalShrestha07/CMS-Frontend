import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const CreateBlog = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        subTitle: "",
        description: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    // console.log(title, subTitle, description);
    const createBlog = async (e) => {
        e.preventDefault()

        // send above states data to api
        const response = await axios.post("http://localhost:2000/createBlog", data)
        if (response.status == 201) {
            alert(response.data.message)
            navigate("/")
        } else {
            alert("Something Went Wrong.")
        }
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
                            <input type="text" placeholder='Enter text' name="title" id="title" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subtitle">Subtitle:</label>
                            <input type="text" placeholder='Enter Subtitle' id="subtitle" name='subTitle' required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" placeholder='Enter Description' name="description" rows="4" required onChange={handleChange}></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateBlog
