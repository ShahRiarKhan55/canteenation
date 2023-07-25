import { Link } from "react-router-dom";

export default function FacultyNavbar(props) {
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
                  to="/faculty/facultymenu"
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/faculty/facultyorder"
                >
                  My Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

FacultyNavbar.defaultProps = {
  title: "UIU Canteey",
};
