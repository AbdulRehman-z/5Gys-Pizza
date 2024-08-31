import { Link } from "react-router-dom";

type LinkButtonProps = {
  children: React.ReactNode;
  to: string;
};

const LinkButton = ({ children, to }: LinkButtonProps) => {
  return (
    <Link className="text-blue-600" to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
