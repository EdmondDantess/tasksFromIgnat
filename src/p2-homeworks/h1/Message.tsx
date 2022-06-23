import React from 'react';

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
                <div className="avatarka">
                    <img src={props.avatar} alt=""/>
                </div>
                <div className="comment">
                    <div className="userName">{props.name}</div>
                    {props.message}
                    <div className="timeMessage">{props.time}</div>
                </div>
            </div>
            <div>
                <input type={'text'}></input>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Message;
