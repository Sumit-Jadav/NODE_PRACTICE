const sum = (a, b) => {
  return a + b;
};

//? Named export :- when function is exported directly at the time of defination of the function
export const min = (a, b) => {
  return a - b;
};

const div = (a, b) => a / b;

const mul = (a, b) => a * b;

export default sum; //* Default export when there is need of only one function to be export & to import it we can use any name because there is only one export

export { mul, div }; //* Aggregate export :- multiple exports in one statement
