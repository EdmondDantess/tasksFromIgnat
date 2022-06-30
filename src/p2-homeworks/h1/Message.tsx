import React from "react";
import "./Messages.css";

type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessagePropsType) {
  return (
    <div className="forBackground">
      <div className="commentArea">
        <img src={props.avatar} alt="" className="avatarka" />
        <div className="comment">
          <span className="userName">{props.name}</span>
          <span> {props.message}</span>
          <span className="timeMessage">{props.time}</span>
        </div>
      </div>
    </div>
  );
}

export default Message;
