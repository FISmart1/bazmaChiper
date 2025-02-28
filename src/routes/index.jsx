import React, { useContext } from 'react';

import { Routes, Route, Navigate } from "react-router-dom";

import CaesarCipher from "../views/home/index"

export default function AppRoutes() {
    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<CaesarCipher />} />

        </Routes>
    );
}