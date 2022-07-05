import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
  addUser: () => void; // need to fix any
  error: string; // need to fix any
  totalUsers: number; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = name === "" ? s.error : s.noError; // need to fix with (?:)

  const onKeyPressDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (name === "") {
      return null;
    }
    if (e.key === "Enter") {
      addUser();
    }
  };

  const valueHandler = name === "" ? true : false;

  return (
    <div className={inputClass}>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyPress={onKeyPressDownHandler}
      />
      <span>{error}</span>
      <button onClick={addUser} disabled={valueHandler}>
        add
      </button>
      <span>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
