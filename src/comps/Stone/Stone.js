import React from "react";

import Rock from "../../icons/Rock";
import "./Stone.css";

function Stone(props){
    return(
        <div className={"stone pedra-de-" + props.type}>
            <p className="number-on-rock">{props.children}</p>
            <Rock type={props.type}/>
        </div>
    );
}

export default Stone;