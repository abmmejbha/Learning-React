import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  //useRef hook
  const passwordRef = useRef(null);

  //const generatePassword = useCallback

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    if (numberAllowed) chars += "0123456789";
    if (characterAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      const ranNum = Math.floor(Math.random() * chars.length);
      password += chars[ranNum];
    }
    setPassword(password);
  }, [length, numberAllowed, characterAllowed]);

  //copy to clipboard function
  const passwordCopied = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [password]);

  //useEffect hook
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-800">
        <h1 className="text-3xl text-center bg-black-400 p-3 rounded-lg mb-4 shadow">
          Password Generator
        </h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="bg-gray-500 outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 p-1 px-2 hover:bg-blue-600 transition-colors duration-300"
            onClick={passwordCopied}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex itmes-center gap-x-1">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1"></div>
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={characterAllowed}
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label>Special Characters</label>
        </div>
        <br />

        <button
          className="text-center bg-red-800 text-white p-2 rounded-lg hover:bg-red-400 transition-colors duration-300 w-full"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
    </>
  );
}
export default App;
