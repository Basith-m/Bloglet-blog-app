import { useEffect, useState } from 'react';
import Quill from '../components/Quill';
import { addBlogAPI } from '../Services/allAPI';
import { Token } from '@mui/icons-material';


function QuillEditor() {

  const [blog, setBlog] = useState({
    date: new Date(),
    content: ""
  })

  const [isError, setError] = useState(null);

  const [token, setToken] = useState("")

  const handleSave = async (e) => {
    e.preventDefault()
    const { date, content } = blog

    if (content.length <= 50) {
      setError('Required, Blog minimum length 50 characters');
      return;
    }
    else {
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };

        // api call
        const result = await addBlogAPI(blog, reqHeader)
        console.log(result);
        if (result.status === 200) {
          console.log(result.data);
        } else {
          console.log(result);
          console.log(result.response.data);
        }
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    } else {
      setToken("")
    }
  }, [])

  return (
    <div className='d-flex flex-column justify-content-center px-5 py-4'>
      <h1 className='mb-4 text-center'>Create Your Blog</h1>
      <Quill blog={blog} setBlog={setBlog} />

      {isError !== null && <div className="my-2 fw-bold text-danger"> {isError} </div>}

      <div className='mt-3 mb-4'>
        <button className='btn btn-dark'>Discard</button>
        <button className='btn btn-outline-dark ms-3' onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default QuillEditor