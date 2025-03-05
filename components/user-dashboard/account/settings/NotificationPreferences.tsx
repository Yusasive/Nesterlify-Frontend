import { useState } from "react";

const NotificationPreferences = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);

  const [preferences, setPreferences] = useState({
    bookings: false,
    cheapFlight: false,
    transaction: false,
  });

  const handleMasterToggle = () => {
    const newState = !emailNotifications;
    setEmailNotifications(newState);

    if (!newState) {
      setPreferences({
        bookings: false,
        cheapFlight: false,
        transaction: false,
      });
    }
  };

  const handleToggle = (key: keyof typeof preferences) => {
    if (emailNotifications) {
      setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-300 rounded-lg p-4">
      {/* Master Toggle */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <p className="text-gray-900 font-medium">
            Get notifications on your email
          </p>
          <p className="text-gray-500 text-sm">miraclegift@gmail.com</p>
        </div>
        <button
          onClick={handleMasterToggle}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
            emailNotifications ? "bg-[#F05A1B]" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
              emailNotifications ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      <div className="mt-4">
        <p className="text-[#2C2C2C] text-base font-medium mb-2">
          Select your notification preference
        </p>
        <div className="border-gray-200 p-2 rounded-lg">
          {[
            { key: "bookings", label: "Bookings" },
            { key: "cheapFlight", label: "Cheap Flight" },
            { key: "transaction", label: "Transaction" },
          ].map(({ key, label }) => (
            <div
              key={key}
              className="flex justify-between items-center py-2 border-b last:border-none"
            >
              <span className="text-[#2C2C2C] text-base">{label}</span>

              <button
                onClick={() => handleToggle(key as keyof typeof preferences)}
                disabled={!emailNotifications}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                  preferences[key as keyof typeof preferences]
                    ? "bg-[#F05A1B]"
                    : "bg-gray-300"
                } ${!emailNotifications ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    preferences[key as keyof typeof preferences]
                      ? "translate-x-6"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
