import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/app/store/store";
import { login, logout } from "@/app/features/auth/authSlice";

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other fields your user object contains
}

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogin = (token: string, user: User) => {
    dispatch(login({ token, user }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return { auth, handleLogin, handleLogout };
};
