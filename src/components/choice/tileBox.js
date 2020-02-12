import React from 'react';
import Tile from "./tile";
import "./tileBox.css";



function ChoiceBox(props) {


    return (
        <div className = "tileBox">
            {props.data.map(item=><Tile
            key = {item.id}
                name={item.name}
                imgUrl={item.imageUrl}
                cal={item.caloriesPer100g}
                carbs={item.carbsPer100g}
                prot={item.proteinsPer100g}
                fat={item.fatsPer100g}
                token = {props.token}
                setChartUpdate = {props.setChartUpdate}
            />)}
        </div>
    )
}

export default ChoiceBox;