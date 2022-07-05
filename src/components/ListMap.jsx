import React from "react";
import PropTypes from "prop-types";

const ListMap = ({listaDeUsuarios}) => {
    return (
        <div>
            <h2>Map ()</h2>
            <ul>
                {
                   listaDeUsuarios.map((usuario, index) => (
                       <li key={index}>{usuario}</li>
                   )) 
                }
            </ul>
        </div>
    )
}

ListMap.propTypes = {
 listaDeUsuarios: PropTypes.array.isRequired,
}

export default ListMap;