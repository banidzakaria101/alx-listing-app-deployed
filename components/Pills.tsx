import React from "react";

interface PillProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`px-4 py-2 rounded-full border ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
