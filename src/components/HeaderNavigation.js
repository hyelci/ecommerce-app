import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function HeaderNavigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="comfy sloth" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav flex justify-center">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>

              <Link to={"/about"} className="nav-link">
                About
              </Link>
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
              <Link to={"/cart"} className="nav-link">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
