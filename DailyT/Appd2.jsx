import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

//controlled / state component
//with component state
// const Appd2 = () => {
//   const [name, setName] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Name - ", name);
//   };
// useEffect(()=>{
//   console.log("I'm getting re-mounted");
// }, [name])
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(event) => {
//           console.log("Change ", name, event.target.value);
//           setName(event.target.value);
//         }}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Appd2;

//uncontrolled / stateless comp
//either stateless(usestate / actions) or presentational(stateless && without actions)

const Appd2 = () => {
  const name = useRef(null);
  useEffect(() => {
    console.log("effect - ", name);
  }, []);
  const handleFocus = () => {
    name.current.focus();
  };
  // useLayoutEffect - after mount and before useEffect
  // useLayoutEffect(() => {
  //   name.current.style = "color: red";
  // }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Child ref={name} placeholder="name" max={40} />
      <button onClick={handleFocus}>Focus</button>
    </form>
  );
};

const Child = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});
export default Appd2;

//useref specs:
//assign & pass a dom section as a ref
//reference won't gop away until unmount
//no remounting

//createRef - Class components //remount - ref lost

//useReducer - Redux
//HOC
//Context API
//closure
