import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;