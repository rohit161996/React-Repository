# OTP Input
- What number of digits should be in the OTP? 
- The component should be generic i.e. the number of digits should be variable such that it can be changed later.
- We can also code the problem on the shadcn.

## Array:-
- Create an array of size the `OTP_INPUT_DIGITS` and fill the array with empty characters.
```js
  new Array(OTP_DIGIT_COUNT).
```

## Keep the track of the array using the useState and render the OTP According to the Array:-
```js
const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT));
```

## NOTE:-
- The map should always `return` the html element to be printed.
- The return should not have the Parenthesis as {}, it should be ().
```js
      {
        inputArr.map((inp, index) => {
          return(<input
            
            /* To give the CSS using the tailwind */
            className="h-12 w-12 p-2 text-xl text-center border-2 rounded-xl"
            
            /* Give the key in the parent element of the component in the map */
            key={index}
            
            type="text"
            
            /* Value comes from the map */
            value={inputArr[index]}
          />);
        })
      }
```

```js
onChange={(e) => handleOnChange(e.target.value)}
```

- On refresh the Input should focus on the first input.
- The fields should have only numeric values.  
```js
  const handleOnChange = (value, index)=>{
    // Handle the characters
    if(isNaN(value)) return;
  }
```

- Setting the last element entered in the input box
```js
  const handleOnChange = (value, index)=>{
    if(isNaN(value)) return;

    const newArr = [...inputArr];
    newArr[index] = value.slice(-1); // Using the slice function
    setInputArr(newArr);
  }
```


## Once the number is entered focus on the next input.
- This is tricky we need to find reference and give the focus() function.
- refArr gives the reference to the input box.
- Each input box should have a reference to the refArr.

```js
const refArr = useRef([]);
```

```js
<input
    class="otp-input"
    key={index}
    type="text"
    value={inputArr[index]}
    onChange={(e) => handleOnChange(e.target.value, index)}
    ref={(input) => (refArr.current[index] = input)}
/>
```

## On page reload the first input box should be focused on
- It is done using the useEffect().
- If the current[0] is not present it will not throw any error, due to optional chaining.

```js
  useEffect(()=>{
    refArr.current[0]?.focus();
  },[]);
```

## On entering the value the focus should be on the next input box
```js
  const handleOnChange = (value, index) => {
    ...
    setInputArr(newArr);

    // Focus on the next input box
    refArr.current[index+1]?.focus();
  }
```

## On pressing the Backspace it should take us to the previous input.
```js
  const handleOnKeyDown = (event, index) => {
    console.log(event);
    // Move the cursor when the input box is erased.
    if (!event.target.value && event.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  }

<input
    class="otp-input"
    key={index}
    type="text"
    value={inputArr[index]}
    onChange={(event) => handleOnChange(event.target.value, index)}
    onKeyDown={(event) => handleOnKeyDown(event, index)}
    ref={(input) => (refArr.current[index] = input)}
/>
```
