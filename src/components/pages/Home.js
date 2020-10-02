import React, { useState } from "react";

const Home = (props) => {
  const [text, setText] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    props.history.push(`/profile/${text}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <form onSubmit={onSubmit} className=" text-white text-center w-auto">
        {/* <label htmlFor="search">Summoner's DB</label> */}
        <input
          type="text"
          name="search"
          className="rounded-full px-4 py-4 text-gray-800 focus:outline-none shadow-xl w-64 "
          placeholder="Search summoner's name"
          autoComplete="off"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Home;
