import { useState } from "react";

export default function HillCipher() {
    const [mode, setMode] = useState("encrypt");
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [result, setResult] = useState("");

    // Fungsi untuk membuat matriks kunci
    function createKeyMatrix(key) {
        const size = Math.sqrt(key.length);
        if (size !== 2 && size !== 3) {
            alert("Key must be 4 numbers (for 2x2 matrix) or 9 numbers (for 3x3 matrix).");
            return null;
        }

        const keyMatrix = [];
        for (let i = 0; i < size; i++) {
            keyMatrix.push(key.slice(i * size, (i + 1) * size));
        }
        return keyMatrix;
    }

    // Fungsi untuk mengalikan matriks dengan teks
    function multiplyMatrix(matrix, text) {
        const size = matrix.length;
        let result = '';

        for (let i = 0; i < text.length; i += size) {
            const block = text.slice(i, i + size); // Ambil blok teks
            const encryptedBlock = [];

            for (let row = 0; row < size; row++) {
                let sum = 0;
                for (let col = 0; col < size; col++) {
                    const char = block[col] || 'A'; // Jika karakter tidak ada, gunakan 'A' (nilai 0)
                    sum += matrix[row][col] * (char.charCodeAt(0) - 65);
                }
                encryptedBlock.push(String.fromCharCode((sum % 26) + 65));
            }

            // Potong hasil agar sesuai dengan panjang blok asli
            result += encryptedBlock.slice(0, block.length).join('');
        }

        return result;
    }

    // Fungsi untuk menghitung determinan matriks
    function calculateDeterminant(matrix) {
        const size = matrix.length;
        if (size === 2) {
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        } else if (size === 3) {
            return (
                matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
                matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
                matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])
            );
        }
        return 0;
    }

    // Fungsi untuk menghitung matriks adjoin
    function calculateAdjugateMatrix(matrix) {
        const size = matrix.length;
        if (size === 2) {
            return [
                [matrix[1][1], -matrix[0][1]],
                [-matrix[1][0], matrix[0][0]]
            ];
        } else if (size === 3) {
            const adjugate = [
                [
                    matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1],
                    -(matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]),
                    matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]
                ],
                [
                    -(matrix[0][1] * matrix[2][2] - matrix[0][2] * matrix[2][1]),
                    matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0],
                    -(matrix[0][0] * matrix[2][1] - matrix[0][1] * matrix[2][0])
                ],
                [
                    matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1],
                    -(matrix[0][0] * matrix[1][2] - matrix[0][2] * matrix[1][0]),
                    matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
                ]
            ];
            return adjugate;
        }
        return [];
    }

    // Fungsi untuk menghitung invers modulo
    function modInverse(a, m) {
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) {
                return x;
            }
        }
        return null;
    }

    // Fungsi untuk mengenkripsi atau mendekripsi teks
    function hillCipher(text, key, mode) {
        const keyMatrix = createKeyMatrix(key.split(' ').map(Number));
        if (!keyMatrix) return "";

        if (mode === "encrypt") {
            return multiplyMatrix(keyMatrix, text);
        } else {
            const size = keyMatrix.length();
            const det = calculateDeterminant(keyMatrix);
            const detInv = modInverse(det, 26);

            if (detInv === null) {
                return "Error: Key matrix is not invertible.";
            }

            const adjugateMatrix = calculateAdjugateMatrix(keyMatrix);
            const inverseMatrix = adjugateMatrix.map(row => 
                row.map(value => ((value * detInv) % 26 + 26) % 26)
            );

            return multiplyMatrix(inverseMatrix, text);
        }
    }

    // Fungsi untuk menghitung hasil
    function handleCalculate() {
        if (!text || !key) {
            alert("Please enter text and key.");
            return;
        }
        setResult(hillCipher(text, key, mode));
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
                    onChange={(e) => setMode(e.target.value)}
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
                    onChange={(e) => setText(e.target.value)}
                />

                <label htmlFor="key">Kunci :</label>
                <input 
                    type="text" 
                    id="key" 
                    placeholder="Contoh: 6 24 13 16" 
                    value={key} 
                    onChange={(e) => setKey(e.target.value)} 
                />

                <br />
                <br />
                <button className="btn-calculate" onClick={handleCalculate}>Calculate</button>
                <br />
                <br />
                <h3>Hasil:</h3>
                <p className="result">{result}</p>
            </div>
        </div>
    );
}