import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Contact from "./pages/Contact";
import Header from "./components/header";
import { CartProvider } from "./context/CartProvider";

// Code Splitting
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));


function App() {
  return (
    <CartProvider>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Suspense fallback={<p className="p-4">Loading the page...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </CartProvider>
  );
}

export default App;
