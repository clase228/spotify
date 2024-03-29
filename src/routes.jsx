import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./components/protected-route";
const login = localStorage.getItem('login') 
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute/>}>
         <Route path="/main/*"  element={<Main />} />
         <Route path="/main/:id"  element={<Main />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
