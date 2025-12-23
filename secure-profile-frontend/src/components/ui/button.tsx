import React from "react";
import clsx from "clsx"; // optional but recommended for conditional classNames

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string; // allows custom classes
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  // Variant styles
  const variantClasses = clsx({
    "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
    "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "secondary",
    "border border-blue-600 text-blue-600 hover:bg-blue-50": variant === "outline",
    "bg-transparent text-blue-600 hover:bg-blue-50": variant === "ghost",
    "bg-red-600 text-white hover:bg-red-700": variant === "danger",
  });

  // Size styles
  const sizeClasses = clsx({
    "px-2 py-1 text-sm": size === "sm",
    "px-4 py-2 text-base": size === "md",
    "px-6 py-3 text-lg": size === "lg",
  });

  return (
    <button className={clsx("rounded font-semibold transition-colors", variantClasses, sizeClasses, className)} {...props}>
      {children}
    </button>
  );
};
