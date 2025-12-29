import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styles from './App.module.css';
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import PrinterInfo from './pages/PrinterInfo';
import Models from './pages/Models/Models';

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/printer-info" element={<PrinterInfo />} />
          <Route path="/models" element={<Models />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}