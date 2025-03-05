"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import axios from "axios";
import toast from "react-hot-toast";
import PersonalDetails from "./PersonalDetails";
import LocationDetails from "./LocationDetails";
import PassportIdDetails from "./PassportIdDetails";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
  dateOfBirth: string;
  phoneNumber: string;
}

interface LocationFormData {
  nationality: string;
  state: string;
  city: string;
  zipcode: string;
  houseNo: string;
  houseAddress: string;
}

interface PassportIdFormData {
  documenttype: string;
  issuedby: string;
  passportNo: string;
  passportExpiryDate: string;
}

type FullProfileFormData = User &
  PersonalDetailsFormData &
  LocationFormData &
  PassportIdFormData & {
    profilePicture?: string;
    birthPlace?: string;
    issuanceDate?: string;
  };

export default function PersonalDetailsForm() {
  const storedUser = useSelector((state: RootState) => state.auth.user);
  const storedToken = useSelector((state: RootState) => state.auth.token) || "";

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FullProfileFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user") || "null");
    const localToken = localStorage.getItem("token") || "";

    const userData = storedUser || localUser;
    const token = storedToken || localToken;

    if (userData && token) {
      setFormData({
        id: userData.id || "",
        name: userData.name || "",
        email: userData.email || "",
        title: userData.title || "",
        gender: userData.gender || "",
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        middleName: userData.middleName || "",
        dateOfBirth: userData.dob || "",
        phoneNumber: userData.phone || "",
        nationality: userData.nationality || "",
        state: userData.state || "",
        city: userData.city || "",
        zipcode: userData.zipCode || "",
        houseNo: userData.houseNumber || "",
        houseAddress: userData.houseAddress || "",
        documenttype: userData.documentType || "",
        issuedby: userData.issuedBy || "",
        passportNo: userData.passportNumber || "",
        passportExpiryDate: userData.passportExpiry || "",
        profilePicture:
          userData.profilePicture || "https://example.com/default.jpg",
        birthPlace: userData.city || "",
        issuanceDate: userData.issuanceDate || "2025-01-01",
      });
    }

    setLoading(false);
  }, [storedUser, storedToken]);

  const handleChange = (field: keyof FullProfileFormData, value: string) => {
    setFormData((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  const handleSave = async () => {
    if (!formData) return;

    const formattedData = {
      username: formData.name,
      fullName: `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`,
      email: formData.email,
      profilePicture:
        formData.profilePicture || "https://example.com/default.jpg",
      title: formData.title,
      gender: formData.gender,
      firstName: formData.firstName,
      lastName: formData.lastName,
      middleName: formData.middleName || "",
      phoneNumber: formData.phoneNumber, 
      nationality: formData.nationality,
      birthPlace: formData.city, 
      issuanceDate: formData.issuanceDate || "2025-01-01",
      state: formData.state,
      city: formData.city,
      zipcode: formData.zipcode,
      houseNo: formData.houseNo,
      houseAddress: formData.houseAddress,
      documenttype: formData.documenttype,
      issuedby: formData.issuedby,
      passportNo: formData.passportNo,
      passportExpiryDate: formData.passportExpiryDate,
      dateOfBirth: formData.dateOfBirth,
    };

    try {
      console.log("📤 Sending update request...", formattedData);

      const response = await axios.put("/api/editprofile", formattedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      });

      console.log("✅ Response received:", response.data);

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      }
    } catch (error: any) {
      console.error(
        "❌ Error updating profile:",
        error.response?.data || error
      );
      toast.error(error.response?.data?.message || "Failed to update profile.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!formData) return <p>No user data found.</p>;

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow space-y-8">
      <button
        onClick={() => {
          if (isEditing) {
            handleSave();
          } else {
            setIsEditing(true);
          }
        }}
        className={`px-16 py-3 rounded-lg text-base font-medium transition duration-300 ${
          isEditing
            ? "bg-[#F05A1B] text-[#FFFFFF]"
            : "bg-[#FFF0E9] text-[#F05A1B]"
        }`}
      >
        {isEditing ? "Save Changes" : "✏️ Edit details"}
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
    </div>
  );
}
