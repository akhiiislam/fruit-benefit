import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const navigate = useNavigate();

  const HandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      navigate(`/list?name=${name}`); // Navigate to the desired route with the query parameter
    }
  };

  return (
    <form
      className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={HandleSearch}
    >
      <input
        className="flex-1 bg-transparent outline-none"
        placeholder="Search"
        type="text"
        name="name"
      />
      <button type="submit" className="cursor-pointer">
        {/* Use a standard <img> tag */}
        <img src="/search.png" alt="Search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
