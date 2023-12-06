import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ backgroundColor:'black'}} className='p-4'>
      <div className="d-flex justify-content-between px-5 w-100 flex-wrap">
        <div className="website" style={{ width: '400px' }}>
          <h4 className='mb-3'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontFamily:'Roboto Mono', fontWeight:'bolder'}} >
              Bloglet
            </Link>
          </h4>
          <p style={{fontSize:'17px',color:'white'}}>Empowering voices through seamless expression. Join our vibrant community on Broglet. Unleash creativity with modern design, fostering connections through shared narratives.</p>
          <p className='text-secondary'>Currently v1.0.0.</p>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='text-white'>Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white'}}>Landing Page</Link>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white'}}>Home</Link>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4 className='text-white'>Guides</h4>
          <Link to={'https://react.dev/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{ textDecoration: 'none', color: 'white' }}>Routing</Link>
        </div>
        <div className="contact">
          <h4 className='text-white'>Contact Us</h4>
          <div className="sub d-flex">
            <input type="text" className='form-control' placeholder='Enter your Email Id' />
            <button className='btn btn-warning border-0 ms-1'><i class="fa-solid fa-arrow-right d-flex align-items-center justify-content-center"></i></button>
          </div>
          <div className="icons fs-4 d-flex justify-content-evenly mt-3">
            <Link to={'https://mail.google.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-envelope"></i></Link>
            <Link to={'https://www.twitter.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter"></i></Link>
            <Link to={'https://www.linkedin.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://www.instagram.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram"></i></Link>
            <Link to={'https://www.github.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-github"></i></Link>
            <Link to={'https://www.facebook.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook"></i></Link>
          </div>
        </div>
      </div>
      <p className='text-secondary text-center mt-4'>Copyright © 2023 Bloglet. Built with React.</p>
    </div>
  )
}

export default Footer