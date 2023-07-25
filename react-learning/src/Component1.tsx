// import {useState, react, useEffect} from "react";

// interface Component1Props {
//   name: string;
//   color: "red" | "bue";
// }

// // this part of the code is run once. Will not be run many times as component will do
// interface IMyFunc {
//   arrayMonth: string[];
//   // for mixed array we use the below
//   // array: any[];
//   month: string;
// }

// const Component1 = ({name, color}: Component1Props) => {
//   const [state, setState] = useState<number>(0);

//   const myFunc = ({arrayMonth, month}: IMyFunc) => {
//     return arrayMonth.includes(month);
//   };
// // for something that is not changing in application
//   myFunc({arrayMonth: [MONTHS.JANUARY]}, month: MONTHS.JANUARY);

//   useEffect(() => {
//     setState((state) => state + 1);
//     console.log(state);
//   }, []);

//   setState(10);
//   return <div style={{color: color}}>{name}</div>;
// };

// export default Component1;
