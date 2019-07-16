import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { specials } from './src.data.js'

const Speciald = () => {
  // STEP 2 - add the imported data to state
  const [specials, setSpecials] = useState();
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       const SpecialButtons =specials.map(element => {
         '<button>${element}</button>';
       });
       
       }

       <button onClick={() => setCount(count + 1)}>
         Click Here!
       </button>
    </div>
  );
};
