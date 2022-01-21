import { useState } from "react";


const Dropdown= ({breeds, getCatData}) => {
// TO Do:
// 1.  Event Handler - Pass the userChoice results/cat name to filtering method.

const [ userChoice, setUserChoice] = useState("placeholder");

const userInputHandler = (e) => {
    setUserChoice(e.target.value);
}


// const filterDisplayData((userChoice.filter) => 
//     return[

//     ]
console.log(breeds);

// 2. Use filter results to pull the following out of the array, Cat Name, Cat Pic, Cat text.
// 3. Set Store those in their respective states.
// 4. Call/Display those respective consts.

// const userResults = prop.breeds.filter((item.name===userChoice)?

return (
<form onSubmit={(e) => {getCatData(e, userChoice)}}> 
   
  <select onChange = {userInputHandler}> 
    <option value = "placeholder" key="placeholder">Please select a cat.</option>  
    {breeds.map((item, index) => {
        return (<option key={item.value} value={item.id}>{item.name}</option>)
    })}
</select>
<button type="submit" disabled={userChoice === "placeholder" ? true:false}  > Select Your Cat!</button>

</form>



)}

export default Dropdown