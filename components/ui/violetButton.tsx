import React from "react";

interface VioletBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function VioletButton({ children, className = "", ...props }: VioletBtnProps) {
  return (
    <button
      className={`bg-[#AB5DFF] text-white rounded-full 
      hover:bg-purple-700 text-center font-cal ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}