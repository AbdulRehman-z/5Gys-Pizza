import { Link } from "react-router-dom";

type ButtonProps = {
  variant?: "primary" | "secondary" | "small";
  children: React.ReactNode;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  variant = "primary",
  children,
  to,
  disabled,
  onClick,
}: ButtonProps) => {
  const base =
    "bg-yellow-400 rounded-full text-stone-50 font-semibold focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1 transition-all duration-150 disabled:cursor-not-allowed";

  const buttonVariantStyles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      " inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to) {
    return (
      <Link className={buttonVariantStyles[variant]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    // console.log("onClick");
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={buttonVariantStyles[variant]}
      >
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={buttonVariantStyles[variant]}>
      {children}
    </button>
  );
};
