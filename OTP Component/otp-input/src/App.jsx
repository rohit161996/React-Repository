import React, { useEffect, useRef, useState } from 'react'

const OTP_DIGIT_COUNT = 8;

const App = () => {

  /* const inputArr = [1,2,3,4,5]; */
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(''));

  /* Reference array to move to the next input box */
  /* It will store the reference to the input box */
  const refArr = useRef([]);

  /* When the page loads the input box 0 should be on the focus automatically */
  useEffect(() => {
    /* Optional Chaining is used because then the error will not occur if the first element 
     * of the current array is not referenced */
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    console.log(value);

    /* Handle the characters, if the user types any character it should be ignored */
    if (isNaN(value)) return;

    /* Remove the spaces */
    const newvalue = value.trim();

    /* Copy the array into a new array and update the new array */
    /* Spread Operator to copy the value */
    const newArr = [...inputArr];

    /* Only get the last input which is entered */
    newArr[index] = newvalue.slice(-1);

    /* Set the new array in the inputArr */
    /* Update the whole array with the help of the copy */
    /* You should not update it using "inputArr[index] = value;" */
    setInputArr(newArr);

    /* To move to the next input box call the focus() on the new Array */
    /* Only if the value is present in the box then only move to the next input box. */
    newvalue && refArr.current[index + 1]?.focus();
  }

  const handleOnKeyDown = (event, index) => {
    console.log(event);
    /* Move the cursor when the input box is erased. */
    /* If only the value is not present then only move to the next. */
    if (!event.target.value && event.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white h-[70vh] max-w-2xl mx-auto rounded-xl shadow-md p-8 gap-4">
      {/* Heading */}
      <h1 className="text-center text-2xl">
        Validate OTP
      </h1>

      <div className="flex gap-3">
        {/* Input Boxes rendering based on the number in variable */}
        {
          inputArr.map((inp, index) => {
            return (
              <input
                /* To give the CSS using the tailwind */
                className="h-12 w-12 p-2 text-xl text-center border-2 rounded-xl"

                /* Give the key in the parent element of the component in the map */
                key={index}
                type="text"

                /* Value comes from the map, Input array is binded to the input value with index */
                value={inputArr[index]}
                onChange={(event) => handleOnChange(event.target.value, index)}
                onKeyDown={(event) => handleOnKeyDown(event, index)}
                placeholder='-'
                /* Each input box should be one reference array */
                ref={(input) => (refArr.current[index] = input)}
              />
            );
          })
        }
      </div>

      <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 cursor-pointer rounded-md mt-6">
        Submit
      </button>
    </div>
  )
}

export default App
