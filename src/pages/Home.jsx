import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import { Row, Col, Collapse } from "react-bootstrap";
import blogerImg from "../Assets/bloger-img.jpg";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <div className="banner-container w-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="mb-3 text-dark">Publish your passions, your way</h1>
            <h4 className="mb-3 text-success">
              Create a Unique and beautiful blog easily.
            </h4>
            <div className="d-flex justify-content-center align-content-center">
              <button
                disabled={loggedIn}
                className="banner-btn btn btn-outline-dark m-2 d-flex align-items-center justify-content-center"
              >
                <Link className="btn bg-none border-0 fw-semibold fs-5" style={{ textDecoration: "none"}} to={"/login"}>
                  Sign In
                </Link>
              </button>
              {loggedIn ? (
                <Link
                  to={"/dashboard"}
                  className="banner-btn btn btn-dark m-2 fs-5 fw-semibold"
                >
                  Start a blog
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  className="banner-btn btn btn-dark m-2 fs-5 fw-semibold"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
        <Row className="session mt-5 mb-5 p-5">
          <Col sm={12} md={6} className="px-5">
            <h1 className="text-dark mb-3">Simple, meet flexible.</h1>
            <p className="fs-4 mb-3">
              Whatever you’re publishing. Whoever your audience is. Bloglet.com
              makes it simple to get started. And easy to expand your site as
              your audience grows.
            </p>
            {loggedIn ? (
              <Link to={"/dashboard"} className="btn btn-dark fs-5">
                Start writing
              </Link>
            ) : (
              <Link to={"/login"} className="btn btn-dark fs-5">
                Start writing
              </Link>
            )}
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-5 p-5 w-100">
          <Col sm={12} md={6} className="px-5">
            <div className="collapse-container mt-4">
              <div
                className="d-flex align-items-center"
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text"
                aria-expanded={open1}
              >
                <i class="fa-solid fa-chevron-up fa-rotate-90 me-4"></i>
                <h3 className="text-dark">Blog Beautifully</h3>
              </div>
              <Collapse in={open1} className="pt-3">
                <div id="example-collapse-text">
                  <p className="fs-5 ms-4">
                    Customize your blog’s look and feel in a couple of clicks
                    with beautifully designed themes. Bring your writing to life
                    with magical drag-and-drop layouts. Or put your fingerprint
                    on every font, color, and element on the page.
                  </p>
                </div>
              </Collapse>
            </div>

            <div className="collapse-container">
              <div
                className="d-flex align-items-center"
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
              >
                <i class="fa-solid fa-chevron-up fa-rotate-90 me-4"></i>
                <h3 className="text-dark">Edit Easily</h3>
              </div>
              <Collapse in={open2} className="pt-3">
                <div id="example-collapse-text">
                  <p className="fs-5 ms-4">
                    From simple and clean to glossy magazine – whatever your
                    publishing style, the intuitive block editor adapts to you.
                    Drag, drop, and easily swap out your menu, punch in a pull
                    quote, or make your post pop with a beautiful gallery. Just
                    like that.
                  </p>
                </div>
              </Collapse>
            </div>

            <div className="collapse-container">
              <div
                className="d-flex align-items-center"
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={setOpen3}
              >
                <i class="fa-solid fa-chevron-up fa-rotate-90 me-4"></i>
                <h3 className="text-dark">Share anything simply</h3>
              </div>
              <Collapse in={open3} className="pt-3">
                <div id="example-collapse-text">
                  <p className="fs-5 ms-4">
                    From video to audio, stories to GIFs, bring it all
                    together—right from where you write. And with plenty of
                    storage for every type of media, your content’s secure, easy
                    to reuse anywhere on your blog, and owned by you alone.
                  </p>
                </div>
              </Collapse>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="p-3 border-5">
              <img
                width={"100%"}
                className="img-fluid"
                src={blogerImg}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default Home;
