// App.js

/*

Pseudo Code for Project 3 - Solo React App - Meowkipurdia

My app Meowkipurdia will be built for users who are interested in getting a cat. The app serves to provide and function as an easy to access/use tool for the use to collect information about different breeds of cats. The information will becoming from https://api.thecatapi.com/v1/. The api appears to have proper documentation.  I will use MAP to populate a dropdown list of each cat breed. The use will select a cat breed from the dropdown and the app will display on the page the following:

- Name of the Cat Breed
- An Image of the Cat Breed
- A block of text with a description of characteristic of the selected breed.

I will access the data using an Axios call and embed the API in the Axios call header to make it more secure. 

I will need to write methods/functions for the following. 
- Axios call and resulting  data (cat title, pic and info) to make it functional.
    - Make the call in useEffect to avoid a loop of data requests.
- Populate the dropdown with MAP. 
- Displaying the requested info.
- An event lister for when the user makes their selection

Stretch Goals: Use data in available in API that displays cat charaistics on a scale from 1-5 (Intelligence, affection, child friendliness.)
Stretch Goals: Allow the user to make a list of favorite cat breeds using Fire Base.
*/

// My modules
import { useEffect, useState} from 'react';
import axios from "axios";

// My styling

import './App.css';

// My components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Dropdown from './components/Dropdown.js';
import CatDisplay from './components/CatDisplay.js';


const App = () => {
const [catBreed, setCatBreed] = useState({});
// This is the state/hook I will use to populate my dropdown menu
const [ allBreeds, setAllBreeds ] = useState([]);
const [apiError, setApiError] = useState(false);



  useEffect(() => {
    // performing the network request
    axios({
      url: "https://api.thecatapi.com/v1/breeds",
      method: "GET",
      dataResponse: "json",
          headers: {
          'x-api-key': 'ed7e185c-1684-4408-938a-98f68dadc5c5',
          },
        }).then((response) => {
        setAllBreeds(response.data)
          
        }).catch((error) => {
          setApiError(true) 
        })
        

      }, [])


      const getCatData=(e,catId) => {
        e.preventDefault();
        const findBreed = allBreeds.filter(breed => breed.id === catId);
        setCatBreed(findBreed[0]);
      }


  // WORKING ON MY DROPDOWN - Begin Return Section
    
  return (
    <div className="wrapper">
      <Header />
        {
          apiError 
          ?<p>Sorry, please refresh and try again.</p>
          : <Dropdown breeds={allBreeds} getCatData={getCatData}/> 
        }
        
        <CatDisplay catBreed={catBreed}/>

        {/* Testing displays work fine assigned parts of the array ex: response.data[37].description for catText */}

     

      <Footer />
    </div>




  );

  }

export default App;

