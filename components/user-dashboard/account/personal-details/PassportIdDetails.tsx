import { useEffect, useState } from "react";
import countries from "world-countries";
import Dropdown from "./Dropdown";
import EditableInput from "./EditableInput";

interface PassportIdDetailsFormData {
  documentType: string;
  issuedBy: string;
  passportNumber: string;
  passportExpiry: string;
}

interface PassportIdDetailsProps {
  formData: PassportIdDetailsFormData;
  handleChange: (field: keyof PassportIdDetailsFormData, value: string) => void;
  isEditing: boolean;
}


export default function PassportIdDetails({
  formData,
  handleChange,
  isEditing,
}: PassportIdDetailsProps) {
  const [countryOptions, setCountryOptions] = useState<string[]>([]);

  useEffect(() => {
    const countryNames = countries.map((country) => country.name.common);
    setCountryOptions(countryNames);
  }, []);

  return (
    <div>
      <h1 className="text-lg text-[#2C2C2C] font-medium mb-4">
        PASSPORT/ID DETAILS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropdown
          label="Document type"
          options={["Passport", "National ID", "Driver's License"]}
          value={formData.documentType}
          onChange={(val) => handleChange("documentType", val)}
          isEditing={isEditing}
        />
        <Dropdown
          label="Issued by"
          options={countryOptions} 
          value={formData.issuedBy}
          onChange={(val) => handleChange("issuedBy", val)}
          isEditing={isEditing}
        />
        <EditableInput
          label="Passport number"
          value={formData.passportNumber}
          onChange={(val) => handleChange("passportNumber", val)}
          isEditing={isEditing}
        />
        <EditableInput
          label="Passport expiry date"
          value={formData.passportExpiry}
          onChange={(val) => handleChange("passportExpiry", val)}
          isEditing={isEditing}
          type="date"
        />
      </div>
    </div>
  );
}
