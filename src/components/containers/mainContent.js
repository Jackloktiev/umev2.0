import React from 'react';
import "./mainContent.css";
import ChartBox from "../charts/chartBox";
import ChoiceBox from "../choice/choiceBox";
import Warning from "../charts/warning";

function mainContent(props) {
    let Charts = <ChartBox userData = {props.userData} />
    if(!props.normsSet){
        Charts = <Warning />
    }
    return (
        <div className="Main">
            {Charts}
            <ChoiceBox token = {props.token} setChartUpdate = {props.setChartUpdate} />
        </div>
    )
}

export default mainContent;