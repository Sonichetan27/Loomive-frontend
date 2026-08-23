import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AIAssistantWidget from "./components/AIAssistantWidget";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Customize from "./pages/Customize";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import GrainOverlay from "./components/GrainOverlay";
import AdminLogin from "./pages/admin/AdminLogin";
import ForgotPassword from "./pages/admin/ForgotPassword";
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";

// Lazy loaded components
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminProducts = lazy(() => import("./pages/admin/Products"));
const AdminCategories = lazy(() => import("./pages/admin/Categories"));
const ChangePassword = lazy(() => import("./pages/admin/ChangePassword"));


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop/>
    <GrainOverlay />
    <Navbar />
    <FloatingWhatsApp />
    <AIAssistantWidget />
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin Routes */}
        <Route path="/secure-panel-7f3a2c9e/login" element={<AdminLogin />} />
        <Route path="/secure-panel-7f3a2c9e/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/secure-panel-7f3a2c9e"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
