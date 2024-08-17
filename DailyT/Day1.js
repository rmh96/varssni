import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

//React element  => process to get virtual dom(vd to actual: react dom)
//jsx => react element => process to get virtual dom(vd to actual: react dom)

// //React actual creating way using createElement
// const Greeting = React.createElement(
//   "h1",
//   {},
//   React.createElement("h4", {}, "Hello from h4")
// );

// console.log(Greeting);

//using jsx
const Greeting1 = () => {
  const fetchApi = () => {};
  return (
    <>
      <h1 style={{}}>Hello React</h1>
      {/* Different ways to invoke a comp. Child(), <Child /> */}
      <Child />
    </>
  );
};

const Child = () => {
  return <div>Hello from Func comp</div>;
};

//class
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: "Hello from Class comp" }, () =>
      console.log("state - ", this.state)
    );
  }

  //invoke when render is done
  componentDidMount() {
    //network api
    //axios return "hello"
    // this.setState({
    //   counter: "hello",
    // });
    this.handleClick();
    console.log(this.state);
  }

  //invoke when a state / props updates
  componentDidUpdate() {
    console.log("Hello I'm from update");
    //when state change from 0 to hello, new api call
  }

  //invoke before setState, and decide whether componenDidUpdate invoke or not
  shouldComponentUpdate(state) {
    // if (state === "hello") {
    //   console.log(this.state);
    //   return true;
    // }
    return true;
  }

  componentWillUnmount() {
    console.log("Unmounted");
    alert("Hello I'm getting unmounted");
  }

  render() {
    return this.state.counter;
  }
}

const App = () => {
  const [trigger, setTrigger] = useState(1);
  //   setTimeout(() => {
  //     setTrigger(!trigger);
  //   }, 4000);
  return trigger ? <Greeting /> : <Greeting1 />;
};

const GreetingFromFunc = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    //good practive to use prevValue
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  useEffect(() => {
    if (typeof counter === "string") console.log("Hello Initial");
    return () => {
      console.log("Unmounted");
    };
  }, [counter]);

  return (
    <>
      <button onClick={handleClick}>Counter - {counter}</button>
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<GreetingFromFunc />);
