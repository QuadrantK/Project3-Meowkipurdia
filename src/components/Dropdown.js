// DropDown.js
import { useState } from "react";

const Dropdown= ({breeds, getCatData}) => {
const [ userChoice, setUserChoice] = useState("placeholder");
const userInputHandler = (e) => {
    setUserChoice(e.target.value);
}

return (
<form onSubmit={(e) => {getCatData(e, userChoice)}}> 
   
  <select onChange = {userInputHandler} className="dropdown"> 
    <option value = "placeholder" key="placeholder">Please select a cat.</option>  
    {breeds.map((item, index) => {
        return (<option key={item.value} value={item.id}>{item.name}</option>)
    })}
</select>
<button type="submit" disabled={userChoice === "placeholder" ? true:false}  > Select Your Cat!</button>

</form>

)}

export default Dropdown