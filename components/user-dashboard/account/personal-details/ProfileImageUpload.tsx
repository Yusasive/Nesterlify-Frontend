"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { updateUser } from "@/app/features/auth/authSlice";
import { HiCamera } from "react-icons/hi";
import Image from "next/image";

export default function ProfileImageUpload() {
  const dispatch = useDispatch();


  const user = useSelector((state: RootState) => state.auth.user);
  const storedImage =
    typeof window !== "undefined" ? localStorage.getItem("profileImage") : null;

  const [image, setImage] = useState<string>(
    user?.profilePicture || storedImage || "/default-avatar.png"
  );

  useEffect(() => {
    if (user?.profilePicture) {
      setImage(user.profilePicture);
    }
  }, [user?.profilePicture]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      setImage(imageUrl);

      dispatch(updateUser({ profilePicture: imageUrl }));
      localStorage.setItem("profileImage", imageUrl);
    }
  };

  return (
    <div className="flex items-center space-x-4 py-3 border-b border-gray-300">
      <div className="relative w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
        <Image
          src={image || "/default-avatar.png"}
          alt="Profile"
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
        <label
          htmlFor="file-upload"
          className="absolute bottom-0 right-0 bg-white rounded-full border-2 border-orange-500 p-1 cursor-pointer"
        >
          <HiCamera className="text-orange-500" size={20} />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <div>
        <p className="text-lg font-medium text-gray-900">
          {user?.username || "User Name"}
        </p>
        <p className="text-sm text-gray-500">
          {user?.email || "user@example.com"}
        </p>
      </div>
    </div>
  );
}
