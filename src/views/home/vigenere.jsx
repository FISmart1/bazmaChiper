import { useState } from "react";

export default function VigenereCipher() {
    const [mode, setMode] = useState("encrypt");
    const [text, setText] = useState("");
    const [key, setKey] = useState("KEY");
    const [result, setResult] = useState("");

    function vigenereCipher(text, key, mode) {
        let result = "";
        let keyIndex = 0;
        let keyLength = key.length;

        for (let i = 0; i < text.length; i++) {
            let c = text[i];
            let code = text.charCodeAt(i);
            let keyChar = key[keyIndex % keyLength].toUpperCase();
            let keyShift = keyChar.charCodeAt(0) - 65;

            if (code >= 65 && code <= 90) { // Huruf besar (A-Z)
                let newCode = mode === "encrypt"
                    ? ((code - 65 + keyShift) % 26) + 65
                    : ((code - 65 - keyShift + 26) % 26) + 65;
                result += String.fromCharCode(newCode);
                keyIndex++;
            }
            else if (code >= 97 && code <= 122) { // Huruf kecil (a-z)
                let newCode = mode === "encrypt"
                    ? ((code - 97 + keyShift) % 26) + 97
                    : ((code - 97 - keyShift + 26) % 26) + 97;
                result += String.fromCharCode(newCode);
                keyIndex++;
            }
            else { // Karakter lain tidak berubah
                result += c;
            }
        }
        return result;
    }

    function updateCipher(newText, newKey, newMode) {
        setResult(vigenereCipher(newText, newKey, newMode));
    }

    return (
        <div className="container">
            <h2 className="text-black">Bazma <span style={{ color: "orange" }}>Cipher</span></h2>
            <p className="text-black">Selamat datang di Bazma Cipher, silahkan pilih menu yang tersedia.</p>
            <br />
            <div className="container form">
                <h1>Vigenère Cipher</h1>
                <br />

                <label htmlFor="mode">Mode:</label>
                <select 
                    id="mode" 
                    className="mb-3"
                    value={mode} 
                    onChange={(e) => {
                        setMode(e.target.value);
                        updateCipher(text, key, e.target.value);
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
                        updateCipher(e.target.value, key, mode);
                    }}
                />
                
                <label htmlFor="key">Masukkan Kunci:</label>
                <input 
                    type="text" 
                    id="key" 
                    placeholder="Masukkan kunci..." 
                    value={key} 
                    onChange={(e) => {
                        setKey(e.target.value.toUpperCase());
                        updateCipher(text, e.target.value.toUpperCase(), mode);
                    }} 
                />

                <h3>Hasil:</h3>
                <p className="result">{result}</p>
            </div>
        </div>
    );
}
