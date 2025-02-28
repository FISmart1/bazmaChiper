import  yusuf2  from "../../assets/yusuf2.png";
import  berke  from "../../assets/berke.png";

export default function Team() {
    return (
        <div className="container team">
    <div className="row d-flex justify-content-center align-items-center text-center gap-5">
        <div className="col-4 card" style={{ width: "18rem" }}>
            <div className="judul">Full-Stack Developer</div> {/* Tambahkan judul */}
            <div className="img-container">
                <img src={yusuf2} alt="Nur Yusuf" className="img-fluid" />
            </div>
            <div className="card-body">
                <p>Nur Yusuf Ferdiansyah</p>
            </div>
        </div>
        <div className="col-4 card" style={{ width: "18rem" }}>
            <div className="judul">Guru Pembimbing</div>
            <div className="img-container">
                <img src={berke} alt="Qiageng Berke Jaiyurrahman" className="img-fluid" />
            </div>
            <div className="card-body">
                <p>Luthfi Abdurrahman S.Pd</p>
            </div>
        </div>
        <div className="col-4 card" style={{ width: "18rem" }}>
            <div className="judul">Full-Stack Developer</div>
            <div className="img-container">
                <img src={berke} alt="Nur Yusuf" className="img-fluid" />
            </div>
            <div className="card-body">
                <p>Qiageng Berke Jaiyurrahman</p>
            </div>
        </div>
    </div>
</div>

    );
}