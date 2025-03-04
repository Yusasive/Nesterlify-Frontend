import Dropdown from "./Dropdown";
import EditableInput from "./EditableInput";
import PhoneInput from "./PhoneInput";

interface PersonalDetailsFormData {
  title: string;
  gender: string;
  firstName: string;
  lastName: string;
  middleName?: string; 
  email: string;
  dob: string;
  phone: string;
}


interface PersonalDetailsProps {
  formData: PersonalDetailsFormData;
  handleChange: (field: keyof PersonalDetailsFormData, value: string) => void;
  isEditing: boolean;
}


export default function PersonalDetails({
  formData,
  handleChange,
  isEditing,
}: PersonalDetailsProps) {
  return (
    <div>
      <h1 className="text-lg text-[#2C2C2C] font-medium mb-4">
        PERSONAL DETAILS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropdown
          label="Title"
          options={["Mr", "Mrs", "Miss", "Dr"]}
          value={formData.title}
          onChange={(val) => handleChange("title", val)}
          isEditing={isEditing}
        />
        <Dropdown
          label="Gender"
          options={["Male", "Female", "Other"]}
          value={formData.gender}
          onChange={(val) => handleChange("gender", val)}
          isEditing={isEditing}
        />
        <EditableInput
          label="First name"
          value={formData.firstName}
          onChange={(val) => handleChange("firstName", val)}
          isEditing={isEditing}
        />
        <EditableInput
          label="Last name"
          value={formData.lastName}
          onChange={(val) => handleChange("lastName", val)}
          isEditing={isEditing}
        />
        <EditableInput
          label="Middle name"
          value={formData.middleName ?? ""} 
          onChange={(val) => handleChange("middleName", val)}
          isEditing={isEditing}
          optional
        />

        <EditableInput
          label="Email address"
          value={formData.email}
          isEditing={false}
        />
        <EditableInput
          label="Date of birth"
          value={formData.dob}
          onChange={(val) => handleChange("dob", val)}
          isEditing={isEditing}
          type="date"
        />
        <PhoneInput
          value={formData.phone}
          onChange={(val) => handleChange("phone", val)}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}
