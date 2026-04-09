import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Customize from "./pages/Customize";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loaded components
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop/>
    <Navbar />
    <FloatingWhatsApp />
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
