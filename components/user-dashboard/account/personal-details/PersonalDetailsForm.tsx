"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { login } from "@/app/features/auth/authSlice";
import axios from "axios";
import toast from "react-hot-toast";
import PersonalDetails from "./PersonalDetails";
import LocationDetails from "./LocationDetails";
import PassportIdDetails from "./PassportIdDetails";

interface User {
  id: string;
  name: string;
  email: string;
}

interface PersonalDetailsFormData {
  title: string;
  gender: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  dob: string;
  phone: string;
}

interface LocationFormData {
  nationality: string;
  state: string;
  city: string;
  zipCode: string;
  houseNumber: string;
  houseAddress: string;
}

interface PassportIdFormData {
  documentType: string;
  issuedBy: string;
  passportNumber: string;
  passportExpiry: string;
}

type FullProfileFormData = User &
  PersonalDetailsFormData &
  LocationFormData &
  PassportIdFormData;

export default function PersonalDetailsForm() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token) || "";

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FullProfileFormData>(
    user
      ? {
          ...user,
          title: "",
          gender: "",
          firstName: "",
          lastName: "",
          middleName: "",
          dob: "",
          phone: "",
          nationality: "",
          state: "",
          city: "",
          zipCode: "",
          houseNumber: "",
          houseAddress: "",
          documentType: "",
          issuedBy: "",
          passportNumber: "",
          passportExpiry: "",
        }
      : {
          id: "",
          name: "",
          email: "",
          title: "",
          gender: "",
          firstName: "",
          lastName: "",
          middleName: "",
          dob: "",
          phone: "",
          nationality: "",
          state: "",
          city: "",
          zipCode: "",
          houseNumber: "",
          houseAddress: "",
          documentType: "",
          issuedBy: "",
          passportNumber: "",
          passportExpiry: "",
        }
  );

  const handleChange = (field: keyof FullProfileFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put("/users/editprofile", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        if (token) {
          dispatch(login({ token, user: formData }));
        }
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Update Error:", error);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow space-y-8">
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "✅ Submit" : "✏️ Edit details"}
      </button>
      <PersonalDetails
        formData={formData}
        handleChange={handleChange}
        isEditing={isEditing}
      />
      <LocationDetails
        formData={formData}
        handleChange={handleChange}
        isEditing={isEditing}
      />
      <PassportIdDetails
        formData={formData}
        handleChange={handleChange}
        isEditing={isEditing}
      />
      {isEditing && (
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      )}
    </div>
  );
}
