"use client";
import { useState } from "react";
import Tabs from "@/components/user-dashboard/account/Tabs";
import PersonalDetailsForm from "@/components/user-dashboard/account/personal-details/PersonalDetailsForm";
import ChnagePassword from "@/components/user-dashboard/account/password/ChangePassword";
import SettingsPage from "@/components/user-dashboard/account/settings/SettingsPage";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Personal details");

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Tabs onTabChange={setActiveTab} />
      {activeTab === "Personal details" && <PersonalDetailsForm />}
      {activeTab === "Password" && <ChnagePassword />}
      {activeTab === "Settings" && <SettingsPage />}
    </div>
  );
}
