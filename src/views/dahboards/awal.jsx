import logo from "../../assets/logo2.png"
import { Link } from "react-router-dom";

export default function Awal() {
    return (
        <div className="container Awal">
            <img src={logo} alt="Logo" width="800px" height="220" className="me-2" />
            <p className="col-md-12 fs-4 text-black">Selamat datang di website Bazma Chiper.</p>
            <Link to="/chiper" className="btn btn-lg me-3 btn-link">LANGSUNG GAS</Link>
        </div>
    );
}