import {useState}  from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const generatePassword = () => {
        let charSet = "";
        if(includeUppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
        if(includeNumbers) charSet += "0123456789";
        if(includeSymbols) charSet += "~`!@#$%^&*()_+[]{}:;<>,.?/";
        let generatedPassword = "";
        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet[randomIndex];
        }
        setPassword(generatedPassword);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password Copied");
    }

  return (
    <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length:</label>
            <input type="number" id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="upper" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)}/>
            <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="lower" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)}/>
            <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="numbers" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}/>
            <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="symbol" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
            <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
        <div className="generated-password">
            <input type="text" readOnly value={password}/>
            <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
        </div>
    </div>
  )
}

export default PasswordGenerator
