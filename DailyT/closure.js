let name = "varssni";

// function hello() {
//   console.log("Hiii");
// }

// console.log(hello);

//closure
//principal 1
//printing function name => function block code
//principal 2
// {
//   let name = "varssni";
//   function printName() {
//     console.log(name);
//   }
//   printName();
// }
//inner block always remembers outer block
//principal 3
//not only remember, it can manipulate the outer block

const outer = () => {
  let count = 0;
  const inner = (args) => {
    count += args;
    console.log("Name - ", count);
    return count;
  };
  return inner;
};

const adminName = outer("name");
adminName(10);
adminName(10);
adminName(10);
adminName(10);
const count = adminName();

// Pub sub design pattern
