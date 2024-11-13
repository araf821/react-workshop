import { Videotape } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <div className="nav-logo-container">
          <Videotape className="nav-logo-icon" />
          <Link to="/" className="navbar-logo">
            Catflix
          </Link>
        </div>
        <ul className="nav-links" role="menu">
          <li role="menuitem">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/shows" className="nav-link">
              Shows
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
