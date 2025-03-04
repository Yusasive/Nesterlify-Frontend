import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { E164Number } from "libphonenumber-js";

interface PhoneNumberProps {
  value: string | undefined;
  onChange: (val: string) => void;
  isEditing: boolean;
}

export default function PhoneNumber({
  value,
  onChange,
  isEditing,
}: PhoneNumberProps) {
  return (
    <div>
      <label className="block text-base font-medium text-[#2C2C2C]">
        Phone number
      </label>
      <div className="mt-1 flex items-center border rounded-md overflow-hidden">
        {isEditing ? (
          <PhoneInput
            international
            defaultCountry="NG"
            value={value as E164Number | undefined}
            onChange={(val) => onChange(val || "")}
            className="mt-1 py-3 block text-gray-800 w-full p-2 border rounded-md flex-1"
          />
        ) : (
          <p className="p-2 text-gray-500 py-3 flex-1 bg-gray-100">
            {value || "—"}
          </p>
        )}
      </div>
    </div>
  );
}
