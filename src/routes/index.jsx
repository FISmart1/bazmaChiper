import React from 'react';

import { Route, Routes } from "react-router-dom";

import CaesarCipherView from "../views/CaesarChiperView";
import VigenereView from "../views/VigenereView";
import Rot18View from "../views/Rot18View";
import HillCipherView from "../views/HillCipherView"
import Awal from "../views/dahboards/awal"

import CaesarCipher from "../views/home/index"

export default function AppRoutes() {
    return (
        <Routes>
            {/* route "/" */}
            <Route path="/caesar" element={<CaesarCipherView />} />
            <Route path="/vigenere" element={<VigenereView />} />
            <Route path="/rot18" element={<Rot18View />} />
            <Route path="/hill" element={<HillCipherView  />} />
            <Route path="/" element={<Awal />} />

        </Routes>
    );
}