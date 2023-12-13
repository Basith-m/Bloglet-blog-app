import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MyProfile from '../components/MyProfile';
import { Row, Col } from 'react-bootstrap';
import './Dashboard.css'
import BlogView from '../components/BlogView';
import SearchBlog from '../components/SearchBlog';
import { allBlogsAPI } from '../Services/allAPI';

function Dashboard() {
    const [viewProfileSection, setViewProfileSection] = useState(false);
    const [allBlogs, setAllBlogs] = useState([])
    const [searchKey, setSearchKey] = useState("")

    const getAllBlogs = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

            // api call
            const result = await allBlogsAPI(searchKey, reqHeader)
            if (result.status === 200) {
                setAllBlogs(result.data)
            } else {
                console.log(result);
            }
        }
    }

    useEffect(() => {
        getAllBlogs()
    }, [searchKey])

    return (
        <div>
            <Header
                insideDashboard
                viewProfileSection={viewProfileSection}
                setViewProfileSection={setViewProfileSection}
            />
            {viewProfileSection && (
                <MyProfile viewProfileSection />
            )}

            <div id='#top'></div>

            <div className='search-container'>
                <SearchBlog searchKey={searchKey} setSearchKey={setSearchKey} />
            </div>

            <div style={{marginBottom:'135px'}} className="sticky-top-toggle">
                <a href='#top' className='top-toggle'>
                    <i className="fa-solid fa-circle-up fs-1 text-success"></i>
                </a>
            </div>


            {
                allBlogs?.length > 0 ?
                    allBlogs?.map(blog => (
                        <Row className='dashboard-container align-items-center mx-0'>
                            <Col></Col>
                            <Col sm={12} md={10} lg={8}>
                                <BlogView blog={blog}  />
                            </Col>
                            <Col></Col>
                        </Row>
                    ))
                    :
                    null
            }



        </div>
    );
}

export default Dashboard;
