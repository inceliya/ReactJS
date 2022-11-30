import './App.css';
import CategoryList from './components/CategoryList';
import Category from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/Layout';
import Product from './components/Product';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <Suspense fallback={'Loading...'}>
            <Layout />
          </Suspense>
        )}>
          <Route path="/" element={<CategoryList />} />
          <Route path="/categories/:category/products" element={<Category />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
