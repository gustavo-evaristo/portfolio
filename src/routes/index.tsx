import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export default function RoutesContainer () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="*" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}