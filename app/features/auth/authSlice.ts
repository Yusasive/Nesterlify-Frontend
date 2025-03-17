import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  role: string;
  profilePicture?: string;
  isBlocked: boolean;
  emailNotification: boolean;
  twoFa: boolean;
  title: string;
  gender: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  phoneNumber: string;
  nationality: string;
  birthPlace: string;
  issuanceDate: string;
  state: string;
  city: string;
  zipcode: string;
  houseNo: string;
  houseAddress: string;
  documenttype: string;
  issuedby: string;
  passportNo: string;
  passportExpiryDate: string;
  dateOfBirth: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  expiresAt: number | null;
}

const EXPIRATION_TIME = 5 * 60 * 60 * 1000; 

const getStoredAuthState = () => {
  if (typeof window === "undefined")
    return { token: null, user: null, expiresAt: null };

  try {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedExpiresAt = localStorage.getItem("expiresAt");

    if (storedToken && storedUser && storedExpiresAt) {
      const expiresAt = parseInt(storedExpiresAt, 10);
      const currentTime = Date.now();

      if (currentTime > expiresAt) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("expiresAt");
        return { token: null, user: null, expiresAt: null };
      }

      return {
        token: storedToken,
        user: JSON.parse(storedUser),
        expiresAt,
      };
    }
  } catch (error) {
    console.error("Error reading localStorage:", error);
  }

  return { token: null, user: null, expiresAt: null };
};

const initialState: AuthState = getStoredAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      const expiresAt = Date.now() + EXPIRATION_TIME;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.expiresAt = expiresAt;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("expiresAt", expiresAt.toString());
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.expiresAt = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("expiresAt");
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };

        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
