// import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function StudentNavbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: `#faeee7` }}
      >
        <div className="container-fluid">
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
                  to="/student/studentmenu"
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Log Out
                </Link>
              </li>
              {/* <li className="nav-item">
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
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

StudentNavbar.defaultProps = {
  title: "UIU Canteey",
};
