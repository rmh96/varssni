import React, { useReducer, useState } from "react";

///////////////////////////////////////////////// - HOC

//HOC:
//MagicComponent(OriginalComponent) => NewComponent(OriginalComponent + Features)
// const hocComp = (oc) =>{
//   return function nc () {
//     return oc;
//   }
// }
//ways of passing comp to hoc:
//export default MagicComponent(OriginalComp);

// const Day3 = () => {
//   const CounterViaHOC = HocComponent(Counter);
//   const HoverViaHOC = HocComponent(HoverCount);
//   return (
//     <div>
//       <CounterViaHOC disabled={true} />
//       <br />
//       <HoverViaHOC disabled={false} />
//     </div>
//   );
// };

// export default Day3;

const HocComponent = (OriginalComp) => {
  return function NewComponent(props) {
    console.log("Props in New comp - ", props);
    const [count, setCount] = useState(0);
    const handleChange = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <>
        {props.disabled ? (
          <div style={{ position: "relative" }}>
            {console.log("If")}
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid red",
              }}
            ></div>
            <OriginalComp count={count} handleChange={handleChange} />
          </div>
        ) : (
          <>
            {console.log("Else")}
            <OriginalComp count={count} handleChange={handleChange} />
          </>
        )}
      </>
    );
  };
};

// const Counter = ({ count, handleChange }) => {
//   return (
//     <>
//       <button onClick={handleChange}>+</button>
//       <div>Click Count - {count}</div>
//     </>
//   );
// };

// const HoverCount = ({ count, handleChange }) => {
//   console.log("Props - ", count, handleChange);
//   return (
//     <>
//       <div
//         onMouseOver={handleChange}
//         style={{ border: "1px solid black", width: "100px" }}
//       >
//         Hover me
//       </div>
//       <div>Hover count - {count}</div>
//     </>
//   );
// };

///////////////////////////////////////////////////// - useReducer
// const obj = {
//   name: "",
//   age: "",
//   group: "",
//   skills: {
//     primary: "",
//     secondary: "",
//     common: "",
//     additional: []
//   },
//   lang: [a,b,c],
//   address: {
//     pincode, city, town, ..
//   }
// }

//useReducer:
//Args - initialState, Reducers
//return  - state, dispatch function(...actions)

const initialState = { counter: 0 };

const reducers = (state, actions) => {
  switch (actions) {
    case "increment": {
      console.log("Increment action trigger:");
      console.log("Previous state - ", state);
      const res = { counter: state.counter + 1 };
      return res;
    }
    case "decrement": {
      return { counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

const Day3 = () => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return <Counter state={state} dispatch={dispatch} />;
};

export default Day3;

const Counter = (props) => {
  console.log("Props - ", props);
  const { state, dispatch } = props;
  return (
    <>
      <button onClick={() => dispatch("increment")}>
        Count - {state.counter}
      </button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </>
  );
};
