import React from "react";
/* import "./CssStyles.css"; */
import Styles from "./CssStyles.module.css";
import PropTypes from 'prop-types';

const CssStyles = ({type, text, handleClick, variant}) => {

    return (
        <button 
            type={type} 
            className={`${Styles["btn"]} ${Styles[variant]}`} 
            onClick={() => handleClick()}>
            {text}
        </button>
    )
}

CssStyles.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    variant: PropTypes.string,
}

export default CssStyles;