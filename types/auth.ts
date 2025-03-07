
export interface User {
  gender: string;
  firstName: string;
  lastName: string;
  middleName: string;
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
  title: string;
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
