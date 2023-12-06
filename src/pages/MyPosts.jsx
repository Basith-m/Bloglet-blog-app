import { Navbar, Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import './MyPosts.css'
import BlogView from "../components/BlogView"

function MyPosts() {

    const navigate = useNavigate()

    const handleClickNewBlog = () => {
        navigate('/blogEditor')
    }

    return (
        <>
            <Navbar expand="lg" className="nav px-3 position-fixed z-1 top-0 w-100">
                <Container fluid>
                    <Navbar.Brand><Link className='nav-head' to={'/'}>Bloglet</Link></Navbar.Brand>
                </Container>
            </Navbar >

            <div className="myPost-container px-5 mb-3">
                <h3>Welcome <span className="text-warning">Abdul Basith m</span></h3>
                <div onClick={handleClickNewBlog} className="btn btn-primary shadow border border-2 d-flex align-items-center justify-content-center me-4">
                    <i class="fa-solid fa-plus fs-5 me-2"></i>
                    <span className="fs-5">New Blog</span>
                </div>
            </div>

            <Link to={'/dashboard'} className="back-link">
                <i class="fa-solid fa-arrow-right fa-rotate-180 me-2"></i>
                Back to Dashborad
            </Link>

            <Row className="p-5">
                <Col sm={6} md={4}>
                    <BlogView insideMyPost />
                </Col>
                <Col sm={6} md={4}>
                    <BlogView insideMyPost />
                </Col>
                <Col sm={6} md={4}>
                    <BlogView insideMyPost />
                </Col>
                <Col sm={6} md={4}>
                    <BlogView insideMyPost />
                </Col>
            </Row>
        </>
    )
}

export default MyPosts