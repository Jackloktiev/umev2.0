import React from 'react';
import "./mainContent.css";
import ChartBox from "../charts/chartBox";
import ChoiceBox from "../choice/choiceBox";

function mainContent(props) {
    return (
        <div className="Main">
            <ChartBox userData = {props.userData} />
            <ChoiceBox token = {props.token} setChartUpdate = {props.setChartUpdate} />
        </div>
    )
}

export default mainContent;