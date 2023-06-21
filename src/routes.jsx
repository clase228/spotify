import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { About } from "./pages/about";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";
import { Account } from "./pages/account";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      
      <Route path="/about" element={<About />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/account" element={<Account />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/main" element={<Main />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
