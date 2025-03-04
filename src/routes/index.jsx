
import { Routes, Route } from "react-router-dom";

import Awal from "../views/dahboards/awal"

import Team from "../views/team/index"

import HillCipher from "../views/home/hill"

import ROT18Cipher from "../views/home/rot"

import VigenereCipher from "../views/home/vigenere"

import CaesarCipher from "../views/home/index"

export default function AppRoutes() {
    return (
        <Routes>
            {/* route "/" */}

            <Route path="/" element={<Awal />} />

            <Route path="/chiper" element={<CaesarCipher />} />

            <Route path="/hill" element={<HillCipher />} />

            <Route path="/rot18" element={<ROT18Cipher/>}/>

            <Route path="/vigenere" element={<VigenereCipher/>}/>

            <Route path="/team" element={<Team />} />



        </Routes>
    );
}