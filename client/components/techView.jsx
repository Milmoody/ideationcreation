import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js'
import { StatefulToolTip } from "react-portal-tooltip"


function TechView({techs}){

    let TechButtons = [];
    const statefulButtons = [];

   
        techs.forEach((tech, i) => {
        statefulButtons.push(<span style={{margin: "10px", width: "60px"}} key={i} className="techButton btn btn-default">{tech}</span>);
        TechButtons.push(<StatefulToolTip parent={ statefulButtons[i] } key={i} position="right" arrow="center" className="stateful-button">{tech}</StatefulToolTip>);
        })

    return(
        
        <div className="techList" >
             {statefulButtons, TechButtons}
        </div>
    )
}

export default TechView;