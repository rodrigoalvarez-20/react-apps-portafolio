import React from "react";
import "./styles.css";

const Location = ({city}) => {
    //Desctructuring
    return (
        <div className="location_Container">
            {city}
        </div>
    )
};


export default Location;
