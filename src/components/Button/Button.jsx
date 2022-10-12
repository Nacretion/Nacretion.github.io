import React from 'react';
import classes from "./Button.module.css";

export default function Button ({func, ico, children, active, id}) {
    return (
        <button onClick={func} className={(active? classes.buttonActive + " " : "") + classes.button} id={id}>
            <span className={classes.span}>{children}</span>
            <span className={classes.span}>{ico}</span>
        </button>
    );
};