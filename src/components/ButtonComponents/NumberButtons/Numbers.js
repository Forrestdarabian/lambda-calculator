import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { numbers } from './src.data.js'

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbers, setNumbers] = useState();
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       const numberButtons = numbers.map(element => {
         '<button>${element}</button>';
       });
       
       }

       <button onClick={() => setCount(count + 1)}>
         Click Here!
       </button>
    </div>
  );
};
