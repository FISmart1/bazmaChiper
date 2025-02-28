import AppRoutes from './routes';
import { Link } from "react-router-dom";
import './App.css';
import logo from "./assets/logo2.png"; // Sesuaikan path logo

export default function App() {
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
      <ul className="navbar-nav gap-2 w-100 ">
        <li className="nav-item">
          <Link className="nav-link" to="/chiper">Caesar Cipher</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/vigenere">Vigenere</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/rot18">ROT 18</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hill">Hill Cipher</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/team">Team Developer</Link>
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
