"use client";
import { useState } from "react";
import ProfileImageUpload from "./personal-details/ProfileImageUpload";

const tabs = ["Personal details", "Password", "Settings"];

export default function Tabs({
  onTabChange,
}: {
  onTabChange: (tab: string) => void;
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <div>
        {" "}
        <ProfileImageUpload />
      </div>
      <div className="border-b flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-base font-medium ${activeTab === tab ? "text-[#F05A1B] border-b-2 border-[#F05A1B]" : "text-[#7F7F7F]"}`}
            onClick={() => {
              setActiveTab(tab);
              onTabChange(tab);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
}
