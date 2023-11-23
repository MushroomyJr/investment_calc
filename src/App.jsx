import Header from "./components/Header";
import Input from "./components/Input";
import Investments from "./components/Investments";
import "./index.css";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div>
      <Header />
      <Input userInput={userInput} onChange={handleChange} />
      <Investments input={userInput} />
    </div>
  );
}

export default App;
