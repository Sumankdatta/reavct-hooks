import React, { useState } from "react";

const UseStateExample = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });
  console.log(setUser);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;

    console.log({ [inputName]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="text-center my-10">
      <input
        onChange={handleChange}
        className="border border-indigo-600"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={handleChange}
        className="border border-indigo-600 mx-2"
        type="email"
        name="email"
        id="email"
      />
      <button className="btn btn-sm bg-pink-500 text-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UseStateExample;
