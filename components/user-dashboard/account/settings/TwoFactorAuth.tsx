import { useState } from "react";

const TwoFactorAuth = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="">
      {/* Dropdown Content */}

      <div className="px-4 pb-4 flex justify-between items-center">
        <p className="text-[#2C2C2C] text-base">Enable two-factor authentication (2FA)</p>

        {/* Toggle Button */}
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`w-12 h-6 flex items-center rounded-full p-1 py-3 transition-colors ${
            isEnabled ? "bg-[#F05A1B]" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md py-3 transform transition-transform ${
              isEnabled ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
