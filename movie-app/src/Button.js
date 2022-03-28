import React from 'react'
import PropTypes from 'prop-types';
import styes from "./Button.module.css";

function Button({text}) {
    return (
        <div>
            <button className={styes.title}>{text}</button>
        </div>
    )
}

Button.propTypes ={
    text: PropTypes.string.isRequired,
}

export default Button
