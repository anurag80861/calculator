import React, { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState("")

  function display(value) {
    setInput(input + value);
  }
  
  function calculation() {
    try {
      setInput(evaluate(input.replace('÷', '/').replace('x', '*')).toString());
    } catch (e) {
      setInput("Error");
    }
  }

  function resetButton() {
    setInput("");
  }
 
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <h1 className='flex justify-start items-start min-h-screen '>Calculator</h1>
      <form className='h-[500px] w-[380px] rounded-xl p-5 bg-black'>
        <input type='text' readOnly value={input} className='h-[45px] w-full text-white bg-[#5e5959] focus:outline-none rounded-xl ' />
        <div className='text-white font-semibold grid grid-cols-4 grid-rows-5 text-3xl gap-y-2 my-3 items-center justify-center '>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={resetButton}>C</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("+/-")}>+/-</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("%")}>%</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#FF9500] flex justify-center items-center cursor-pointer' onClick={() => display("÷")}>÷</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("7")}>7</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("8")}>8</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("9")}>9</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#FF9500] flex justify-center items-center cursor-pointer' onClick={() => display("x")}>x</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("4")}>4</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("5")}>5</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("6")}>6</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#FF9500] flex justify-center items-center cursor-pointer' onClick={() => display("-")}>-</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("1")}>1</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("2")}>2</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display("3")}>3</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#FF9500] flex justify-center items-center cursor-pointer' onClick={() => display("+")}>+</span>
          <span className='h-[70px] col-span-2 rounded-full bg-[#1C1C1C] flex justify-start items-center pl-2 cursor-pointer' onClick={() => display("0")}>0</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer' onClick={() => display(".")}>.</span>
          <span className='h-[70px] w-[70px] rounded-full bg-[#FF9500] flex justify-center items-center cursor-pointer' onClick={calculation}>=</span>
        </div>
      </form>
    </div>
  )
}

export default App