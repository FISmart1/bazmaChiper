import { useState } from "react";

export default function ROT18Cipher() {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    function rot18Cipher(text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let c = text[i];
            let code = text.charCodeAt(i);
            
            if (code >= 65 && code <= 90) { // Huruf besar (A-Z)
                result += String.fromCharCode(((code - 65 + 13) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // Huruf kecil (a-z)
                result += String.fromCharCode(((code - 97 + 13) % 26) + 97);
            } else if (code >= 48 && code <= 57) { // Angka (0-9)
                result += String.fromCharCode(((code - 48 + 5) % 10) + 48);
            } else { // Karakter lain tidak berubah
                result += c;
            }
        }
        return result;
    }

    function updateCipher(newText) {
        setResult(rot18Cipher(newText));
    }

    return (
        <div className="container">
            <h2 className="text-black">Bazma <span style={{ color: "orange" }}>Cipher</span></h2>
            <p className="text-black">Selamat datang di Bazma Cipher, silakan gunakan ROT18.</p>
            <br />
            <div className="container form">
                <h1>ROT18 Cipher</h1>
                <br />
                <label htmlFor="text">Masukkan Teks:</label>
                <textarea 
                    id="text" 
                    placeholder="Ketik teks di sini..." 
                    value={text} 
                    onChange={(e) => {
                        setText(e.target.value);
                        updateCipher(e.target.value);
                    }}
                />
                <h3>Hasil:</h3>
                <p className="result">{result}</p>
            </div>
        </div>
    );
}
