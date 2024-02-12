import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import HomePage from "./pages/HomePage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import Pricing from "./pages/Pricing";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;