import App from "../App.js"
import { useState } from "react";


const Dropdown= (props) => {

const [ userChoice, setUserChoice] = useState("");
const userInputHandler = (event) => {
    setUserChoice(event.target.value);
}

console.log(props);

return (
<form> {/* We need submit button and ON submit. To display find the breed and filter (item.name====userchoice - true, returns one thing. Consider putting into state.)over array upon submisson  */}
<select onChange ={userInputHandler}>
    <option value = "placeholder">Please select a cat.</option>  
    {props.breeds.map((item, index) => {
        return (<option key={item.value} value={item.name}>{item.name}</option>)
    })}
</select>
</form>
)}

export default Dropdown