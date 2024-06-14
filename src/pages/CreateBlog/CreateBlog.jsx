import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateBlog = () => {
    const navigate = useNavigate()



    // console.log(title, subTitle, description);
    const createBlog = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)// create Object {}
        formData.append("name", "Narayan")
        console.log(formData);


        // send above states data to api
        // ya tala ko error blogs ko sato backend ma createBlog vayera vako raxa
        const response = await axios.post("http://localhost:2000/createBlog")
        // console.log(response);
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
                            <input type="text" placeholder='Enter text' name="title" id="title" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subtitle">Subtitle:</label>
                            <input type="text" placeholder='Enter Subtitle' id="subtitle" name='subTitle' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" placeholder='Enter Description' name="description" rows="4" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateBlog
