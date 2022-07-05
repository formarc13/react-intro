import React from "react";
import PropTypes from "prop-types";

const Props = ({
    string = "String por default", 
    number, 
    object, 
    array, 
    handleClick,
    n1,
    n2
}) => {
    return (
        <div>
            <h2>Props</h2>
            <ul>
                <li>
                    Prop 1: {string}
                </li>
                <li>
                    Prop 2: {number}
                </li>
                <li>
                    Prop 3: {object.nombre}
                </li>
                <li onClick={() => handleClick()}>
                    Prop 4: {array[0]}
                </li>
                <li>
                    La suma de {n1} y {n2} es {(n1 + n2)}
                </li>
            </ul>
        </div>
    )
}

Props.defaultProps = {
    number: 20,
    handleClick: () => console.log("No me pasaron funcion")
}

Props.propTypes = {
    n1: PropTypes.number.isRequired,
    n2: PropTypes.number.isRequired,
    string: PropTypes.string,
    number: PropTypes.number,
    array: PropTypes.array,
    handleClick: PropTypes.func,
    object: PropTypes.object
}

export default Props;


