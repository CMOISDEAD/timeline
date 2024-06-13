type Props = {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "success" | "error" | "light";
  onClick?: () => void;
};

export const Button = ({
  disabled = false,
  children,
  className,
  color = "primary",
  onClick,
}: Props) => {
  const base = "rounded-none p-1 transition-colors";
  const colors = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 hover:text-white",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 hover:text-white",
    success: "bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white",
    error: "bg-red-500 text-white hover:bg-red-600 hover:text-white",
    light: "bg-transparent text-gray-500 hover:bg-gray-200",
  };

  return (
    <button
      disabled={disabled}
      className={`${colors[color]} ${base} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
