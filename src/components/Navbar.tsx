import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar()
{
    return(
 <div className="container-fluid bg-light position-relative shadow">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <Link
          to="/"
          className="navbar-brand font-weight-bold text-secondary"
          style={{ fontSize: "50px" }}
        >
          <i className="flaticon-043-teddy-bear"></i>
          <span className="text-primary">KidKinder</span>
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>

            <Link to="/about" className="nav-item nav-link">
              About
            </Link>

            <Link to="/BClass" className="nav-item nav-link">
              Classes
            </Link>

            <Link to="/team" className="nav-item nav-link">
              Teachers
            </Link>

            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>

          {/* <a
            href="https://htmlcodex.com/downloading/?item=1144"
            className="btn btn-primary px-4"
            target="_blank"
            rel="noreferrer"
          >
            Buy Pro Version
          </a> */}
        </div>
      </nav>
    </div>
    );
}
export default Navbar;