import { Link, useLocation } from "react-router-dom";
import './App.css';
import logo from "./assets/logo2.png"; 
import AppRoutes from './routes';

export default function App() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid d-flex justify-content-around">
          <a className="d-flex align-items-center" href="/">
            <img src={logo} alt="Logo" width="200px" height="50" className="me-2" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse w-100" id="navbarNav">
            <ul className="navbar-nav gap-3 w-100 ">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/caesar" ? "active-nav" : ""}`} to="/caesar">Caesar Cipher</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/vigenere" ? "active-nav" : ""}`} to="/vigenere">Vigenere</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/rot18" ? "active-nav" : ""}`} to="/rot18">ROT 18</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/hill" ? "active-nav" : ""}`} to="/hill">Hill Cipher</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <AppRoutes />
      </div>

      <footer className="bg-white">
        <h4 className="text-black">SMK TI BAZMA</h4>
      </footer>
    </div>
  );
}
