import { useContext, useEffect, useState } from 'react';
import Quill from '../components/Quill';
import { addBlogAPI } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BlogContext } from '../Context/BlogContext';

function QuillEditor() {
  const navigate = useNavigate();
  const { formattedTime, setFormattedTime } = useContext(BlogContext);
  const [blog, setBlog] = useState({
    date: new Date(),
    name: "",
    content: ""
  });
  const [isError, setError] = useState(null);
  const [token, setToken] = useState("");

  function formatTimeDifference(postDate) {
    const currentDate = new Date();
    const postDateObj = new Date(postDate);
    const timeDifference = currentDate - postDateObj;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return '1 day ago';
    } else if (hours > 0) {
      return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
    } else {
      return 'just now';
    }
  }

  const handleSave = async (e) => {
    e.preventDefault();
    const { date, name, content } = blog;

    if (content.length <= 50) {
      setError('Required, Blog minimum length 50 characters');
      return;
    } else {
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };

        // api call
        const result = await addBlogAPI(blog, reqHeader);
        console.log(result);
        if (result.status === 200) {
          console.log(result.data);
          alert("Blog Added...");
          navigate('/dashboard');
        } else {
          console.log(result);
          toast.warning(result.response.data);
        }
      }
    }
  };

  const handleDiscard = () => {
    setBlog({
      date: "",
      name: "",
      content: ""
    });
    navigate('/dashboard');
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setBlog({ ...blog, name: JSON.parse(sessionStorage.getItem("existingUser")).username });
      const timeDifference = formatTimeDifference(blog.date);
      setFormattedTime(timeDifference);
    }
  }, [blog, formattedTime, setFormattedTime]);

  return (
    <div className='d-flex flex-column justify-content-center px-5 py-4'>
      <h1 className='mb-4 text-center'>Create Your Blog</h1>
      <Quill blog={blog} setBlog={setBlog} />

      {isError !== null && <div className="my-2 fw-bold text-danger"> {isError} </div>}

      <div className='mt-3 mb-4'>
        <button className='btn btn-dark' onClick={handleDiscard}>Discard</button>
        <button className='btn btn-outline-dark ms-3' onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default QuillEditor;
