import React from "react";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "destructive" | "success" | "info";
}

export const Alert: React.FC<AlertProps> = ({ variant, className, children, ...props }) => {
  const variantClasses =
    variant === "destructive"
      ? "bg-red-50 border border-red-400 text-red-700"
      : variant === "success"
      ? "bg-green-50 border border-green-400 text-green-700"
      : "bg-blue-50 border border-blue-400 text-blue-700";

  return (
    <div className={`p-3 rounded flex items-center gap-2 ${variantClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

// ✅ Fixed AlertDescription with optional className
interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ children, className }) => {
  return <span className={`text-sm ${className || ""}`}>{children}</span>;
};
