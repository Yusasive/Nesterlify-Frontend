import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

interface DropdownSectionProps {
  title: string;
  children: React.ReactNode;
}

const DropdownSection: React.FC<DropdownSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      {/* Header (Title + Arrow) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-4 text-lg font-medium text-gray-900 focus:outline-none"
      >
        {title}
        <span className="text-[#F05A1B] text-2xl">
          {isOpen ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </button>

      {/* Dropdown Content */}
      {isOpen && <div className="px-4 pb-4 text-gray-700">{children}</div>}
    </div>
  );
};

export default DropdownSection;
