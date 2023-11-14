import { useState } from "react";
const Input = () => {
  const [inital, setInitial] = useState('')
  const [anual, setAnual] = useState('')
  const [returns, setReturn] = useState('')
  const intialHandler = (event) =>{
    console.log(event.target.value)
  }
  const anualHandler = (event)=>{
    console.log(event.target.value)
  }
  const returnHandler = (event)=>{
    console.log(event.target.value)
  }
  const durationHandler = (event)=>{
    console.log(event.target.value)
  }
  return (
    <form id="user-input" /*onChange={submitHandler}*/>
      <div>
        <div>
          <label>Initial Investment</label>
          <input type="number" min="0.01" step="0.01" onChange={intialHandler}/>
        </div>
        <div>
          <label>Anual Investment</label>
          <input type="number" onChange={anualHandler}/>
        </div>
        <div>
          <label>Expected Return</label>
          {/* <select>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select> */}
          <input type="number" onChange={returnHandler}></input>
        </div>
        <div>
          <label>Duration</label>
          <input type="number" min="1" step="1" onChange={durationHandler}/>
        </div>
      </div>
    </form>
  );
};

export default Input;
