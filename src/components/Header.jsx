import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
import profileImg from '../Assets/profile-img.png'
import { useEffect, useState } from 'react'

function Header({ insideDashboard, insideMyPosts, viewProfileSection, setViewProfileSection }) {

  const [loggedIn, setLoggedIn] = useState(false)

  const handleProfile = () => {
    setViewProfileSection(!viewProfileSection)
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  return (
    <Navbar expand="lg" className="nav px-3 position-fixed top-0 w-100">
      <Container fluid>
        <Navbar.Brand>
          <Link className='nav-head' to={'/'}>
            <i class="fa-solid fa-blog me-4 text-success"></i>
            Bloglet
          </Link>
        </Navbar.Brand>
        {
          insideDashboard || insideMyPosts ?
            (
              !viewProfileSection ?
                <Nav className="ms-auto">
                  <div className='d-flex align-items-center justify-content-center'>
                    <div className='header-profile'>
                      <img width={'100%'} className='img-fluid rounded-circle' src={profileImg} alt="Profile" />
                    </div>
                    <div>
                      <i class="fa-solid fa-ellipsis-vertical fs-4 ms-3 text-white" onClick={handleProfile}></i>
                    </div>
                  </div>
                </Nav>
                :
                <Nav className="ms-auto  d-flex align-items-center">
                  <i class="fa-solid fa-xmark fs-4 text-white" onClick={handleProfile}></i>
                </Nav>
            )
            :
            <Nav className="ms-auto d-flex align-items-center">
              <button className='btn bg-none border-0' disabled={loggedIn}><Link className='link me-4' to={'/login'}>SignIn</Link></button>
              {
                loggedIn ?
                  <Link to={'/dashboard'} className='btn btn-light px-3 py-2'>Create Your Blog</Link>
                  :
                  <Link to={'/login'} className='btn btn-light px-3 py-2'>Create Your Blog</Link>
              }
            </Nav>
        }

      </Container>
    </Navbar >
  )
}

export default Header