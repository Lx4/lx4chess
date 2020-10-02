import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import ProfileContext from "../../context/profile/profileContext";

const Navbar = () => {
  const [text, setText] = useState("");
  const { setSearch } = useContext(ProfileContext);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    setSearch(text);
    history.push(`/profile/${text}`);
  };

  return (
    <ul className="flex items-center justify-between flex-wrap bg-black p-4">
      <li className="text-white font-semibold">
        <Link to="/">Home</Link>
      </li>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="rounded-full pl-4 focus:outline-none "
          placeholder="summoner's name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          className="ml-2 text-white bg-black focus:outline-none "
          value="Go"
        />
      </form>
    </ul>
  );
};

export default Navbar;
