import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  );
};

export default SearchOrder;
