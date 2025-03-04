export default function EditableInput({
  label,
  value,
  onChange,
  isEditing,
  optional = false,
  type = "text",
}: {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  isEditing: boolean;
  optional?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-base font-medium text-[#2C2C2C]">
        {label} {optional && "(Optional)"}
      </label>
      {isEditing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="mt-1 py-3 block text-gray-800 w-full p-2 border rounded-md"
        />
      ) : (
        <p className="mt-1 p-2 border py-3 text-gray-500 bg-gray-100 rounded-md">{value || "—"}</p>
      )}
    </div>
  );
}
