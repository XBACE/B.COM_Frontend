import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import HomePage from "./pages/HomePage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import Pricing from "./pages/Pricing";
import MarketStore from "./pages/MarketStore";
import AfterLoginPage from "./AfterLoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:userId/:token" element={<ResetPasswordPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/market-store" element={<MarketStore />} />
        <Route path='/home' element={<AfterLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;