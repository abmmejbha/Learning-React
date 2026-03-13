import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [to, setTo] = useState("BDT");
  const [from, setFrom] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };
  const convert = () => {
    const rate = currencyInfo[to];
    setConvertedAmount(rate * amount);
  };

  return (
    <>
      <div
        className="w-screen h-screen flex items-center justify-center  bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="max-w-md w-full p-5 border rounded-lg bg-white/30 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={currencyOptions}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <div className="w-full relative ">
              <button 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-md px-2 py-0.5 border-2 border-white"
            type="button" 
            onClick={swap}>
              swap
            </button>
            </div>
            <InputBox
              label="To"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisabled={true}
              currencyOptions={currencyOptions}
            />
            <button 
            className="w-full bg-blue-500 rounded-lg text-white py-1.5 "
            type="submit">Convert</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
