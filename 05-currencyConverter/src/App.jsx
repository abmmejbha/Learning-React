import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const currencyOption = Object.keys(currencyInfo);
  const [amount, setAmount] = useState(1);

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
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="w-full max-w-md mx-auto border border-b-indigo-400 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={currencyOption}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full ">
              <button
                type="button"
                className="text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-1 rounded-md border-2 px-2 py-0.5 border-white"
                onClick={swap}
              >
                Swap
              </button>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={currencyOption}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisabled
                />
                <hr className="border-gray-300" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
