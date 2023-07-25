import React from "react";
import {useEffect, useState, useContext, useMemo} from "react";

import {createContext} from "react";
import Child from "./Child";

const MobileContext = createContext(false);

const App = () => {
  // const [state, setState] = useState(0);
  // const [state2, setState2] = useState(0);
  // const [arr, setArr] = useState([]);

  // useEffect(() => {
  //   if (true) {
  //     console.log("Hey I got triggered");
  //   }
  // }, [arr]);
  // console.log(state);
  // console.log(state);
  // console.log(state);
  // Do not put heavy objects in the dependency array
  // const obj={}
  // const arr

  // usecontext

  const [isMobile, setIsMobile] = useState(false);
  const isMobileContext = useContext(MobileContext);
  const toggleView = (): void => {
    setIsMobile(!isMobile);
  };

  // useMemo applies for conctants, only when values are changing, only for specific value, useState is for the whole page
  const result = useMemo(() => {
    calculateNumber(1, 2), {number};
  });

  return (
    // <div>
    //   <button onClick={() => setState((prev) => prev + 1)}></button>
    //   <button onClick={() => setState2((prev) => prev + 1)}></button>
    <MobileContext.Provider value={false}>
      <Child />
      <button onClick={() => setIsMobile(!isMobile)}></button>
    </MobileContext.Provider>
    // </div>
  );
};

export default App;
