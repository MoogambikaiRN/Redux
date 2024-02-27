import React, { useState } from 'react'
import { addNumber,subNumber,mulNumber,divNumber } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux';

const Calculator=()=> {
    const [inputValue1,setInputValue1]=useState();
    const [inputValue2,setInputValue2]=useState();

    const dispatch = useDispatch(); 
    const addResult=useSelector((state)=>state.add.result); 
    const subResult=useSelector((state)=>state.sub.result);
    const mulResult=useSelector((state)=>state.mul.result); 
    const divResult=useSelector((state)=>state.div.result);

    const handleAddition=()=>{
        const num1=parseInt(inputValue1);
        const num2=parseInt(inputValue2);
        dispatch(addNumber(num1+num2));
     }
     const handleSubtraction=()=>{
        const num1=parseInt(inputValue1);
        const num2=parseInt(inputValue2);
        dispatch(subNumber(num1-num2));
     }
     const handleMultiplication=()=>{
        const num1=parseInt(inputValue1);
        const num2=parseInt(inputValue2);
        dispatch(mulNumber(num1*num2));
     }
     const handleDivision=()=>{
        const num1=parseInt(inputValue1);
        const num2=parseInt(inputValue2);
        dispatch(divNumber(num1/num2));
     }

    return (
    <div>
        <h1>Calculator</h1>
    <input type='number' value={inputValue1} onChange={(e)=>setInputValue1(e.target.value)} />
    <input type='number' value={inputValue2} onChange={(e)=>setInputValue2(e.target.value)} />
    <button onClick={handleAddition}>Addition</button>
    <button onClick={handleSubtraction}>Subtraction</button>
    <button onClick={handleMultiplication}>Multiplication</button>
    <button onClick={handleDivision}>Division</button>
    <p>Addition Result :{addResult}</p>
    <p>Subtraction Result :{subResult}</p>
    <p>Multiplication Result :{mulResult}</p>
    <p>Division Result :{divResult}</p>
    

    </div>
  )
}

export default Calculator