import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import FindDoctors from './pages/FindDoctors.tsx';
import Clinics from './pages/Clinics.tsx';
import About from './pages/About.tsx';
import Registration from './pages/Registration.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-doctors" element={<FindDoctors />} />
            <Route path="/clinics" element={<Clinics />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;