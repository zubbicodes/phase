import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Events = lazy(() => import('./pages/Events'));
const About = lazy(() => import('./pages/About'));
const Workflow = lazy(() => import('./pages/Workflow'));
const ElasticProducts = lazy(() => import('./pages/ElasticProducts'));
const Tapes = lazy(() => import('./pages/Tapes'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/elastics" element={<ElasticProducts />} />
              <Route path="/products/tapes" element={<Tapes />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </Router>
  );
}

export default App;