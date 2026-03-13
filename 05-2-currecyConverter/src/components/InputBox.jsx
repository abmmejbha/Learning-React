import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency,
  amountDisabled = false,
}) {
  const id = useId();
  return (
    <div className="flex bg-white text-sm rounded-lg">
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={id}>{label}</label>
        <input
          className="outline-none bg-transparent w-full py-1.5"
          id={id}
          type="number"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => {
            onAmountChange(Number(e.target.value));
          }}
        />
      </div>

      {/* right side */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <select
          className="rounded-lg px-1 py-1 bg-blue-200 cursor-pointer outline-none"
          value={selectCurrency}
          name=""
          id=""
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox