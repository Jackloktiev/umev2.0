import React, {useState} from 'react';
import "./tile.css";


function Tile(props) {
    const [quantity, setQuantity] = useState(0);
    const Now = new Date();
    const currDate = Now.getMonth() + "-" + Now.getDate() + "-" + Now.getFullYear();
    const title = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    
    const quantityChangeHandler = (event)=>{
        setQuantity(event.target.value);
    }
    const submitClickHandler = (event)=>{
        event.preventDefault();
        console.log("default behavior prevented");
        const formData={
            calories:props.cal,
            proteins:props.prot,
            carbs:props.carbs,
            fats:props.fat,
            date:currDate,
            token:props.token,
            quantity:quantity,
            name:props.name
        }
        console.log(formData);
        fetch("/consumed",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        }).then(response=>{
            return response.text();
        }).then(result=>{
            console.log(result);
        }).then(()=>{props.setChartUpdate(Math.random())})
    }
    return (
        <div className="card tile">
            <img src={props.imgUrl} className="card-img-top tile-img" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title title">{title}</h5>
                <div className="card-text">
                    <table>
                        <tbody>
                            <tr>
                                <th>Calories</th>
                                <th>{props.cal} cal</th>
                                <td></td>
                                <th>Fats</th>
                                <th>{props.fat} g</th>
                            </tr>
                            <tr>
                                <th>Carbs</th>
                                <th>{props.carbs} g</th>
                                <td></td>
                                <th>Proteins</th>
                                <th>{props.prot} g</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <form action="/consumed" method="POST" className="tileForm">
                    <p>Amount of grams consumed:</p>
                    <input type="number" name="quantity" value = {quantity} onChange = {quantityChangeHandler} />
                    <input type="number" name="calories" value={props.cal} readOnly className="hidden" />
                    <input type="number" name="fats" value={props.fat} readOnly className="hidden" />
                    <input type="number" name="carbs" value={props.carbs} readOnly className="hidden" />
                    <input type="number" name="proteins" value={props.prot} readOnly className="hidden" />
                    <input type="text" name="date" value={currDate} readOnly className="hidden" />
                    <input type="text" name="token" value={props.token} readOnly className="hidden" />
                    <input type="submit" className="button" onClick = {submitClickHandler} />
                </form>
            </div>
        </div>
    )
};


export default Tile;