import Header from "./components/Header";
import Input from "./components/Input";
import Investments from "./components/Investments";
import "./index.css";
import { useState } from "react";
const dummyData = [
  { year: 1, value: 10000, interest: 1000, totalInt: 1000, capital: 9000 },
  { year: 2, value: 11000, interest: 1000, totalInt: 2000, capital: 10000 },
];
function App() {
  const [investmentData, setData]=useState(dummyData)
  function dataHandler(type, data){
    if(type==='initial'){ 
      console.log('intial type data passed '+data)
    }else if(type==='anual'){
      console.log()
    }else if(type==='returns'){

    }else if(type==='durations'){

    }
  }
  return (
    <div>
      <Header />
      <Input dataHandler={dataHandler()}/>
      <Investments data={investmentData} />
    </div>
  );
}

export default App;
