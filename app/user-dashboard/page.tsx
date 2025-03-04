"use client";
import { useState } from "react";
import Tabs from "@/components/user-dashboard/account/Tabs";
import PersonalDetailsForm from "@/components/user-dashboard/account/personal-details/PersonalDetailsForm";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Personal details");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Tabs onTabChange={setActiveTab} />
      {activeTab === "Personal details" && <PersonalDetailsForm />}
      {activeTab === "Password" && <p>Password Settings</p>}
      {activeTab === "Settings" && <p>General Settings</p>}
    </div>
  );
}
