import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})


    const fetchSingleBlog = async () => {
        const response = await axios.get("http://localhost:2000/blogs/" + id)
        // console.log(response);
        if (response.status == 200) {
            setBlog(response.data.data)
        }
    }

    useEffect(() => {
        fetchSingleBlog()

    }, [])
    console.log(blog, "Blog");

    return (
        <div>
            <h1>{blog.title}</h1>
        </div>
    )

}

export default SingleBlog
