import profileImg from '../Assets/profile-img.png'
import './BlogView.css'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify';
import { useContext } from 'react';
import { BlogDateContext } from '../Context/DateContext';
import EditBlog from './EditBlog';

function BlogView({ insideMyPost, blog }) {

    // console.log(blog);
    const {postDate, setPostDate} = useContext(BlogDateContext)
    const sanitizedContent = DOMPurify.sanitize(blog.content);

    return (
        <>
            <div className='blog-container'>
                {
                    insideMyPost ?

                        <div className='blog-head-inside-myPost p-2 shadow'>
                            <div className='fs-4 text-black d-flex justify-content-end align-items-center w-100 p-2'>
                                <EditBlog userBlog={blog} />
                                <i className="fa-solid fa-trash mx-2 text-danger"></i>
                            </div>
                        </div>

                        :
                        <div className='blog-head p-2 shadow'>
                            <div className='d-flex align-items-center justify-content-start'>
                                <div className='profile'>
                                    <img width={'100%'} className='img-fluid rounded-circle' src={profileImg} title='Profile' alt="Profile" />
                                </div>
                                <span className='text-white'>{blog.name}</span>
                            </div>
                            <div className='me-3 fs-5 text-black'>
                                <i className="fa-solid fa-ellipsis-vertical text-white"></i>
                            </div>
                        </div>
                }
                <div className='d-glex justify-content-start p-3'>
                    <span>{postDate}</span>
                </div>

                <div className='blog-body px-4'>
                    <div className='blog-body p-4' dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                </div>
                {
                    !insideMyPost ?
                        <div className='blog-footer p-3 shadow-lg'>
                            <i class="fa-regular fa-heart fs-5 p-2 text-white"></i>
                        </div>
                        :
                        null
                }
            </div>


        </>
    )
}

export default BlogView