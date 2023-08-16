import "./App.css";
import React, {useEffect, useState, useReducer, useRef} from "react";
import axios from "axios";
import Child from "./Child";

interface dataProp {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
// useReducer hook is useful when you are deadling with arrays, objects, data from backend. We created initial value
// const initialState = {
//   value: 0,
// };
// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {...state, value: state.value + 1 + action.payload};
//     case "DECREMENT":
//       return {...state, value: state.value - 1};
//     case "RESET":
//       return {value: 0};
//     default:
//       return state;
//   }
// };
function App() {
  // const [data, setData] = useState([]);
  // useState hook
  // const [init, setInit] = useState(1);
  // const [init2, setInit2] = useState(1);

  // memo
  const [init, upda] = useState(0);

  // useRef hook - it is not mutable. Prevents re-rendering. It used to manipulate DOM elements and make immutable references
  // const headingRef = useRef(null as any);
  // const [counter, setCounter] = useState(0);
  // const clear = useRef(null as any);

  // useEffect(() => {
  //   headingRef.current.style = "background:red";
  //   console.log(headingRef.current);
  //   clear.current = setInterval(() => {
  //     // every 1 second we change it by 1
  //     setCounter((prev) => prev + 1);
  //   }, 1000);
  // }, []);
  // userReducer hook
  // const [state, dispatch] = useReducer(reducer, initialState);

  // function handleIncrement() {
  //   // what we pass to dispatch is an action
  //   dispatch({type: "INCREMENT", payload: 2});
  // }
  // function handleDecrement() {
  //   // what we pass to dispatch is an action
  //   dispatch({type: "DECREMENT"});
  // }
  // function RESEThandler() {
  //   // what we pass to dispatch is an action
  //   dispatch({type: "RESET"});
  // }

  // userRef hook

  // [] means that this will run only on initial run
  // useEffect(() => {
  //   console.log(init);

  //   // once we mount the page, command after return will not run. Previous run gets unmounted
  //   return () => {
  //     console.log("cleanup");
  //   };
  // }, []);
  // async function fetch() {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   setData(res.data);
  // }
  // useEffect(() => {
  //   fetch();
  // }, []);

  return (
    <div>
      {/* memo */}
      <button onClick={() => upda((prev) => prev + 1)}>{init}</button>
      <Child />
      {/* useRef */}
      {/* <h1 ref={headingRef}>jai</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          clearInterval(clear.current);
        }}
      >
        stop
      </button> */}
      {/* useReducer */}
      {/* <h1>{state.value}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={RESEThandler}>DECREMENT</button> */}

      {/* useEffect */}
      {/* // the best practise is to give a callback, prev refers to previous value */}
      {/* <button onClick={() => setInit((prev) => prev + 1)}>AAA-{init}</button>
      <button onClick={() => setInit2((prev) => prev + 1)}>BBB-{init2}</button> */}
    </div>

    // <div className="App">
    //   {data?.map((item: dataProp) => {
    //     return (
    //       <h1 key={item.id}>
    //         {item.id}-{item.title}
    //       </h1>
    //     );
    //   })}
    // </div>
  );
}

export default App;

// db.collection.insertMany([{}, {}, {}, {}, {}, {}]);
