import "./App.css";
import {useState, useEffect} from "react";

// RULE 1: YOU HAVE TO HAVE PAGES NOT COMPONENENTS IN THIS FILE
function App() {
  const [state, setState] = useState(0);
  const [start, setStart] = useState(false);
  console.log("COMPONENT GOT RERENDERED");

  // this runs only one time when component gets created. It has dependency array and if add item into array, useEffect will be trigered whenever item in array is triggered
  useEffect(() => {
    console.log("USEEFFECT GOT TRIGGERED");
  }, [state]);

  return (
    <>
      <button onClick={() => setStart(true)}>START</button>
      <button onClick={() => setStart(false)}>CLICK ME</button>
      "Current is: {start ? "true" : "false"}"
      <button onClick={() => setState((argument) => argument + 1)}>
        CLICK ME
      </button>
      <h1>{state}</h1>
    </>
  );
}
export default App;
