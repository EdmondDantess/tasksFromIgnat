import React from "react";

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

  return (
    <div>
      {props.affair.name} {props.affair.priority}
      <button onClick={deleteCallback}>X</button>
    </div>
  );
}

export default Affair;
