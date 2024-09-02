import { useSelector } from "react-redux";
import SearchOrder from "../features/order/SearchOrder";
import { getUsername } from "../features/user/userSlice";

const Header = () => {
  const username = useSelector(getUsername);

  return (
    <header className="flex items-center justify-between border-b-2 border-stone-400 bg-yellow-400 px-4 py-3 md:px-6">
      <h1 className="text-xl font-semibold tracking-wider text-yellow-900">
        🍕 Pizza Time
      </h1>
      <SearchOrder />
      {username && (
        <h1 className="text-xl font-semibold tracking-wider text-yellow-900">
          {username}
        </h1>
      )}
    </header>
  );
};

export default Header;
