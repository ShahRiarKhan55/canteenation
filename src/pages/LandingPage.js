import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import { Box } from "@chakra-ui/react";
// import StudentLogin from "./StudentLogin";

export default function LandingPage(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: `#faeee7` }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/studentlogin"
                >
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/facultylogin"
                >
                  Faculty
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/ownerlogin">
                  Owner
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Box>
        <Hero />
      </Box>
    </>
  );
}

LandingPage.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

LandingPage.defaultProps = {
  title: "UIU Canteey",
  aboutText: "About",
};
