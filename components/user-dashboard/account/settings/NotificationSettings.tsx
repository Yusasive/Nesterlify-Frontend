import { useState } from "react";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    bookings: false,
    cheapFlight: false,
    transaction: false,
  });

  // Toggle individual notification settings
  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  return (
    <div className="">
      <div className="px-4 pb-4">
        <p className="text-[#2C2C2C] text-base mb-2">
          Select your notification alert preference on the website
        </p>

        {/* Notification List */}
        {[
          { key: "bookings", label: "Bookings" },
          { key: "cheapFlight", label: "Cheap Flight" },
          { key: "transaction", label: "Transaction" },
        ].map(({ key, label }) => (
          <div
            key={key}
            className="flex justify-between items-center px-3 py-2 border-b border-gray-300"
          >
            <span className="text-[#2C2C2C] text-base">{label}</span>

            {/* Toggle Switch */}
            <button
              onClick={() => handleToggle(key as keyof typeof settings)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings[key as keyof typeof settings]
                  ? "bg-[#F05A1B]"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  settings[key as keyof typeof settings]
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
