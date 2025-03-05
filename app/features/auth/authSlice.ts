import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define User Interface
interface User {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  role: string;
  profilePicture?: string;
  isBlocked: boolean;
  emailNotification: boolean;
  twoFa: boolean;
}

// Define Auth State Interface
interface AuthState {
  token: string | null;
  user: User | null;
}

const storedToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
const storedUser =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;

const initialState: AuthState = {
  token: storedToken,
  user: storedUser ? JSON.parse(storedUser) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;

      // Store token & user in localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;

      // Remove token & user from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };

        // Update user data in localStorage
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
