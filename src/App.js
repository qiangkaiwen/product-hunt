import React from 'react';
import { Product } from './features/product/Product';
import Header from './components/HeaderComponent.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Product />
      </main>
    </div>
  );
}

export default App;
