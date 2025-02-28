import React, { useContext } from 'react';

import { Routes, Route, Navigate } from "react-router-dom";

import Awal from "../views/dahboards/awal"

import CaesarCipher from "../views/home/index"

export default function AppRoutes() {
    return (
        <Routes>
            {/* route "/" */}

            <Route path="/" element={<Awal />} />

            <Route path="/chiper" element={<CaesarCipher />} />

        </Routes>
    );
}