import './MyProfile.css'
import profileImg from '../Assets/profile-img.png'
import noImage from '../Assets/no-image-icon-23485.png'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function MyProfile({ viewProfileSection }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(viewProfileSection);

    const sidebarClass = viewProfileSection ? 'sidebar open' : 'sidebar close';

    return (
        <div className={`profile-container ${sidebarClass}`}>
            <div className='profile-img mt-5 mb-3'>
                <img width={'100%'} className='img-fluid rounded-circle' src={profileImg} title='Profile' alt="Profile" />
            </div>
            <h4 className='text-white'>Abdul Basith M</h4>

            <button className='btn btn-outline-primary mt-3' onClick={handleShow}> Edit Profile <i className="fa-solid fa-pen ms-2"></i></button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <label className='d-flex flex-column align-items-center justify-content-center'>
                        <input style={{display:'none'}} type="file"  />
                        <img width={'200px'} height={'200px'} src={noImage} alt="default-profile" />
                    </label>
                    <div className='mt-3'>
                        <input type="text" className='form-control text-black fw-bold' placeholder='Enter Your Name' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Save</Button>
                </Modal.Footer>
            </Modal>

            <div className='hr-line mt-5 mb-3'></div>
            <div className='w-100 d-flex flex-column align-items-start p-3 justify-content-center'>
                <Link to={'/myPosts'} className='blog-link'><p >My Posts</p></Link>
                <Link to={'/blogEditor'} className='blog-link'><p>Create New Blog</p></Link>
                <Link className='logout'>
                    <div className='btn btn-info p-2 w-100'>
                        Log Out
                        <i class="fa-solid fa-arrow-right-from-bracket ms-2"></i>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MyProfile