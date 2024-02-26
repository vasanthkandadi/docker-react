import './App.css';
import Variables from './Variables';
import Operation from './Operation';
import Result from './Result';
import { useState } from 'react';

function App() {

  const [result,setResult] = useState(0);
  const [operation,setOperation] = useState(null);

  const onSubmitNumber = (a,b)=>{
    if(operation){
      if (operation=='add'){
        console.log(a+b);
        setResult(a+b);
      }
      if (operation=='minus'){
        console.log(a-b);
        setResult(a-b);
      }
      if (operation=='into'){
        console.log(a*b);
        setResult(a*b);
      }
      if (operation=='by'){
        console.log(a/b);
        setResult(a/b);
      }
    }
  }

  const onSubmit = (value) =>{
    setOperation(value);
  }

  
  return (
    <div className="App">
      <Operation onSubmit={onSubmit}></Operation>
      <Variables onSubmitNumber={onSubmitNumber}></Variables>
      <Result result={result}></Result>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Switched to feature branch</p>
        
    </div>
  );
}

export default App;
