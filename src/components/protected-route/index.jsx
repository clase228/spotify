import { Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selectors/auth"
export const ProtectedRoute = ({ redirectPath = "/" }) => {
   const isAllowed = useSelector(authSelector);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet/>;
};