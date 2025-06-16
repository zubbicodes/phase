import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Certifications from './pages/Certifications';
import Events from './pages/Events';
import About from './pages/About';
import Workflow from './pages/Workflow';
import ElasticProducts from './pages/ElasticProducts';
import Tapes from './pages/Tapes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/elastics" element={<ElasticProducts />} />
            <Route path="/products/tapes" element={<Tapes />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/workflow" element={<Workflow />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;