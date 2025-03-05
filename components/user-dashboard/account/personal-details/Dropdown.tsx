interface DropdownProps {
  label: string;
  options: string[];
  value: string | number | undefined;
  onChange: (val: string) => void;
  isEditing: boolean;
  disabled?: boolean;
}

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  isEditing,
}: DropdownProps) {
  return (
    <div>
      <label className="text-sm text-[#2C2C2C] font-medium">{label}</label>
      {isEditing ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full py-3 px-3 text-gray-800 border rounded-md"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <p className="w-full px-3 py-5 border text-gray-500 rounded-md bg-gray-100">
          {value}
        </p>
      )}
    </div>
  );
}
