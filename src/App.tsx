import {useState} from "react";


const App = () => {
    const[counter,setCounter]=useState<number>(0);

  return (
      <div>
<h2>{counter}</h2>
          <button onClick={()=>{setCounter(prevState=>{return ++prevState})}}>increment</button>
          <button onClick={()=>{setCounter(prevState=>{return --prevState})}}>decrement</button>
      </div>
  );
};

export default App;
