
import { Routes, Route } from "react-router-dom";

import Awal from "../views/dahboards/awal"

import Team from "../views/team/index"

import HillCipher from "../views/home/hill"

import CaesarCipher from "../views/home/index"

export default function AppRoutes() {
    return (
        <Routes>
            {/* route "/" */}

            <Route path="/" element={<Awal />} />

            <Route path="/chiper" element={<CaesarCipher />} />

            <Route path="/hill" element={<HillCipher />} />

            <Route path="/team" element={<Team />} />

        </Routes>
    );
}