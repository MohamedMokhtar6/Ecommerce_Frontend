import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/auth/LoginPage";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/auth/SignUpPage";
import ProductDetailsPage from "./Pages/Product/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
import CategoriesPage from "./Pages/CategoriesPage";
import CheckoutPage from "./Pages/CheckoutPage";
import FooterBar from "./Components/util/FooterBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/category/:id" element={<CategoriesPage />} />
          <Route path="/order/checkout" element={<CheckoutPage />} />
        </Routes>
        <FooterBar />
      </BrowserRouter>
    </>
  );
}

export default App;
