import { useState } from "react";

export default function HillCipher() {
    const [mode, setMode] = useState("encrypt");
    const [text, setText] = useState("");
    const [size, setSize] = useState(3);
    const [matrix, setMatrix] = useState(Array.from({ length: size }, () => Array(size).fill(0)));
    const [result, setResult] = useState("");

    function modInverse(a, m) {
        a = ((a % m) + m) % m;
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) return x;
        }
        return null;
    }

    function matrixDeterminant(matrix) {
        if (matrix.length === 2) {
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        }
        return matrix[0][0];
    }

    function matrixInverse(matrix, mod) {
        let det = matrixDeterminant(matrix);
        let detInv = modInverse(det, mod);
        if (detInv === null) return null;
        let invMatrix = [[matrix[1][1], -matrix[0][1]], [-matrix[1][0], matrix[0][0]]];
        return invMatrix.map(row => row.map(value => ((value * detInv) % mod + mod) % mod));
    }

    function hillCipher(text, matrix, mode) {
        let result = "";
        let n = matrix.length;
        let textArr = text.replace(/[^A-Z]/gi, "").toUpperCase().split("");
        while (textArr.length % n !== 0) textArr.push("X");
        
        let vectors = [];
        for (let i = 0; i < textArr.length; i += n) {
            vectors.push(textArr.slice(i, i + n).map(c => c.charCodeAt(0) - 65));
        }

        if (mode === "decrypt") {
            let inverseMatrix = matrixInverse(matrix, 26);
            if (!inverseMatrix) return "Matrix tidak dapat dibalik!";
            matrix = inverseMatrix;
        }

        for (let vector of vectors) {
            let newVector = Array(n).fill(0);
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    newVector[i] += matrix[i][j] * vector[j];
                }
                newVector[i] = (newVector[i] % 26 + 26) % 26;
            }
            result += newVector.map(v => String.fromCharCode(v + 65)).join("");
        }
        return result;
    }

    function updateCipher(newText, newMatrix, newMode) {
        setResult(hillCipher(newText, newMatrix, newMode));
    }

    function updateMatrix(row, col, value) {
        const newMatrix = matrix.map((r, i) => r.map((c, j) => (i === row && j === col ? parseInt(value) || 0 : c)));
        setMatrix(newMatrix);
    }

    function changeMatrixSize(newSize) {
        setSize(newSize);
        setMatrix(Array.from({ length: newSize }, () => Array(newSize).fill(0)));
    }

    return (
        <div className="container">
            <h2 className="text-black">Bazma <span style={{ color: "orange" }}>Cipher</span></h2>
            <p className="text-black">Selamat datang di Bazma Cipher, silahkan pilih menu yang tersedia.</p>
            <br />
            <div className="container form">
                <h1>Hill Cipher</h1>
                <br />

                <label htmlFor="mode">Mode:</label>
                <select 
                    id="mode" 
                    className="mb-3"
                    value={mode} 
                    onChange={(e) => {
                        setMode(e.target.value);
                        updateCipher(text, matrix, e.target.value);
                    }}
                >
                    <option value="encrypt">Enkripsi</option>
                    <option value="decrypt">Dekripsi</option>
                </select>
                <br />
                <br />
                <label htmlFor="text">Masukkan Plain Teks:</label>
                <textarea 
                    id="text" 
                    placeholder="Ketik teks di sini..." 
                    value={text} 
                    onChange={(e) => {
                        setText(e.target.value);
                        updateCipher(e.target.value, matrix, mode);
                    }}
                />

                <label htmlFor="size">Ukuran Matriks:</label>
                <input 
                    type="number" 
                    id="size" 
                    min="2" 
                    max="10" 
                    value={size} 
                    onChange={(e) => changeMatrixSize(parseInt(e.target.value) || 2)}
                    style={{ width: "50px", margin: "5px" }}
                />
                
                <h3>Matriks Kustom:</h3>
                <div>
                    {matrix.map((row, i) => (
                        <div key={i} style={{ display: "flex" }}>
                            {row.map((val, j) => (
                                <input
                                    key={j}
                                    type="number"
                                    value={val}
                                    onChange={(e) => updateMatrix(i, j, e.target.value)}
                                    style={{ width: "50px", margin: "5px" }}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <h3>Hasil:</h3>
                <p className="result">{result}</p>
            </div>
        </div>
    );
}
