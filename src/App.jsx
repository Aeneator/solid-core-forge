import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

import styles from './App.module.css';
import Footer from "./components/Footer";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}