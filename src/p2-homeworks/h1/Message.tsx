import React from 'react'
import classes from "./Message.module.css";

type MessageDataType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessageDataType) {
  return (
    <div className={classes.message}>
      <div>
        <img className={classes.avatar} src={props.avatar}/>
      </div>
      <div className={classes.dialog_window}>
        <div className={classes.name}>
          <span>{props.name}</span>
        </div>
        <div>
          <span className={classes.user_message}>{props.message}</span><span className={classes.time}>{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default Message
