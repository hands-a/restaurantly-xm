import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import Pages from './pages/Pages.jsx';
import Delivery from './pages/Delivery.jsx';

function App() {
  return (
    <Router> 
      <div className="font-sans min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
