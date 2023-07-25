import { Link } from "react-router-dom";

export default function OwnerNavbar(props) {
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
                  to="/owner/ownerpage"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/owner/addcategory"
                >
                  Add Category
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/owner/additem"
                >
                  Add Item
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/owner/totalorder"
                >
                  Total Orders
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

OwnerNavbar.defaultProps = {
  title: "UIU Canteey",
};
