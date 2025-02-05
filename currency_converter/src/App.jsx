import { useState } from "react";
import { InputBox } from "./components";
import BackgroundImage from "./assets/bgimg.png";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertAmount, setConvertAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      
    >
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-2">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectedCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amt) => setAmount(amt)}
            />
          </div>
          <div className="relative w-full h-0.5 my-3">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-2 mb-4">
            <InputBox
              label="To"
              amount={convertAmount}
              currencyOptions={options}
              selectedCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisabled={true}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
