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
}

const storedToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
const storedUser =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;

const initialState: AuthState = {
  token: null,
  user: null,
};

if (typeof window !== "undefined") {
  try {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) initialState.token = storedToken;
    if (storedUser) initialState.user = JSON.parse(storedUser);
  } catch (error) {
    console.error("Error reading localStorage:", error);
  }
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
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
