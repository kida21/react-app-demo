import Calculator from "./Calculator";
import Result from "./Result";
import { useState } from "react";
function App() {
  const[enteredNumber,setEnteredNumber]=useState({
      first:0,
      second:0
  })
  const[operation,setUpdatedOperation]=useState('add')
  function firstNumberHandler(event){
       setEnteredNumber({
          first:+event.target.value,
          second:enteredNumber.second
       })
  }
  function secondNumberHandler(event){
    setEnteredNumber({
       first:enteredNumber.first,
       second:+event.target.value
    })
  } 
  function operationHandler(event){
      setUpdatedOperation(event.target.value)
  }
   let result;
  if(operation==='add'){
     result= enteredNumber.first + enteredNumber.second
  }
  else if(operation==='sub'){
  result= enteredNumber.first - enteredNumber.second
  }
  else if(operation==='mul'){
    result = enteredNumber.first * enteredNumber.second
  }
  else if(operation==='div' && enteredNumber.second !==0){
   result = enteredNumber.first / enteredNumber.second
  }
  else if(enteredNumber.second===0){
    result='undefined'
  }
  return(
    <div>
       <Calculator onFirstNumberChanged={firstNumberHandler}
                  onOperationChanged={operationHandler} 
                 onSecondNumberChanged={secondNumberHandler}/>
       <Result calculationResult={result}/>
    </div>
  )
}

export default App;
