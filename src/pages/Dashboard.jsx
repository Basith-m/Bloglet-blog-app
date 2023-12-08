import { useState } from 'react';
import Header from '../components/Header';
import MyProfile from '../components/MyProfile';
import { Row, Col } from 'react-bootstrap';
import './Dashboard.css'
import BlogView from '../components/BlogView';
import SearchBlog from '../components/SearchBlog';

function Dashboard() {
    const [viewProfileSection, setViewProfileSection] = useState(false);

    return (
        <>
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
                <SearchBlog />
            </div>

            <div className="sticky-top-toggle">
                <a href='#top' className='top-toggle'>
                    <i className="fa-solid fa-circle-up fs-1 text-success"></i>
                </a>
            </div>

            <Row style={{marginTop:'118px'}} className='dashboard-container align-items-center mx-0'>
                <Col></Col>
                <Col sm={12} md={10} lg={8}>
                    <BlogView />
                </Col>
                <Col></Col>
            </Row>
        </>
    );
}

export default Dashboard;
