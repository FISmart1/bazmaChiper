import { useState } from "react";

export default function CaesarCipher() {
    const [mode, setMode] = useState("encrypt");
    const [text, setText] = useState("");
    const [shift, setShift] = useState(3);
    const [result, setResult] = useState("");

    function caesarCipher(text, shift, mode) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let c = text[i];
            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) { // Huruf besar (A-Z)
                let newCode = mode === "encrypt"
                    ? ((code - 65 + shift) % 26) + 65
                    : ((code - 65 - shift + 26) % 26) + 65;
                result += String.fromCharCode(newCode);
            }
            else if (code >= 97 && code <= 122) { // Huruf kecil (a-z)
                let newCode = mode === "encrypt"
                    ? ((code - 97 + shift) % 26) + 97
                    : ((code - 97 - shift + 26) % 26) + 97;
                result += String.fromCharCode(newCode);
            }
            else { // Karakter lain tidak berubah
                result += c;
            }
        }
        return result;
    }

    function updateCipher(newText, newShift, newMode) {
        setResult(caesarCipher(newText, newShift, newMode));
    }

    return (
        <div className="container">
            <h2 className="text-black">Bazma <span style={{ color: "orange" }}>Chiper</span></h2>
            <p className="text-black">Selamat datang di Bazma Chiper, silahkan pilih menu yang tersedia.</p>
            <br />
            <div className="container form">
                <h1>Caesar Cipher</h1>
                <br />

                <label htmlFor="mode">Mode:</label>
                <select 
                    id="mode" 
                    className="mb-3"
                    value={mode} 
                    onChange={(e) => {
                        setMode(e.target.value);
                        updateCipher(text, shift, e.target.value);
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
                        updateCipher(e.target.value, shift, mode);
                    }}
                />

                <label htmlFor="shift">Kunci (Geser): <span>{shift}</span></label>
                <input 
                    type="range" 
                    id="shift" 
                    min="1" 
                    max="70" 
                    value={shift} 
                    onChange={(e) => {
                        setShift(Number(e.target.value));
                        updateCipher(text, Number(e.target.value), mode);
                    }} 
                />

                <h3>Hasil:</h3>
                <p className="result">{result}</p>
            </div>
        </div>
    );
}
