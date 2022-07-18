import React from "react";
import s from "./Affairs.module.css";

type AffairPropsType = {
  // key не нужно типизировать
  affair: {
    _id: number;
    name: string;
    priority: "high" | "middle" | "low" | "all";
  }; // need to fix any
  deleteAffairCallback: (idNum: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }; // need to fix

  let textValue = s.Hight;

  if (props.affair.priority === "middle") {
    textValue = s.Middle;
  }
  if (props.affair.priority === "low") {
    textValue = s.Low;
  }

  return (
    <div className={s.string}>
      {props.affair.name}
      <span className={textValue}>{props.affair.priority}</span>
      <button onClick={deleteCallback} className={s.buttonList}>
        X
      </button>
    </div>
  );
}

export default Affair;
