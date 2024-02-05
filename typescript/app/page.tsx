"use client";
import React, { FormEvent, useState } from "react";
// import Box from "./components/Box";

export default function Home() {
  type stateType = {
    name: string;
    age: number;
  };
  const intialState: stateType = {
    name: "",
    age: 0,
  };
  const [user, setUser] = useState<stateType>(intialState);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(intialState);
    console.log(user);
  };

  return (
    <>
      {/* <Box
        label="input"
        placeholder="Enter Input"
        value={val}
        setter={setVal}
      /> */}
      <form onSubmit={submitHandler}>
        <input
          placeholder="Enter Age"
          type="number"
          value={user?.age}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
          }
        />
        <input
          placeholder="Enter Name"
          type="text"
          value={user?.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, name: e.target.value }))
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
