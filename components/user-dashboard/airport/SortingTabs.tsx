import React from "react";

interface SortingTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SortingTabs: React.FC<SortingTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = ["cheapest", "best", "quickest"];

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-3 text-sm font-medium rounded-md capitalize ${
            activeTab === tab
              ? "bg-[#F05A1B] text-[#FFFFFF]"
              : "bg-[#F5F5F5] text-[#2C2C2C]"
          }`}
        >
          {tab} price
        </button>
      ))}
    </div>
  );
};

export default SortingTabs;
