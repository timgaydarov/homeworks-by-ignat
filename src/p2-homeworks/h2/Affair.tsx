import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affair.module.css";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType// need to fix any
  deleteAffairCallback: (id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }// need to fix

  return (
    <div className={classes.wrapper}>
      <div className={classes.name}>{props.affair.name}</div>
      <div className={classes.priority}>{props.affair.priority}</div>
      <button onClick={deleteCallback}>X</button>
    </div>
  )
}

export default Affair
