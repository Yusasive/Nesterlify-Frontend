
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
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}
