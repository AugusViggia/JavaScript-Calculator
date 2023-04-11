import './App.css';
import { useState } from 'react';

function App() {
  const [lastPressed, setLastPressed] = useState(undefined);
  const [calc, setCalc] = useState('0');
  const [nums, setNums] = useState('0, 1, 2, 3, 4, 5, 6, 7, 8, 9');
  const [operators, setOperators] = useState('+, -, *, /')
  
  const handleClick = (event) => {
    const innerText = event.target.textContent;

    
    switch (innerText) {
        
      case 'AC': {
        setCalc('0');
        break;
      };
      
      case '=': {
        const operation = eval(calc);
        
        setCalc(operation);
        break;
      };
        
      case '.': {
        const splitted = calc.split(/[\+\-\*\/]/);
        const lastItem = splitted.slice(-1)[0];

        if (!lastItem.includes('.')) setCalc(calc + '.');

        break;
      };
      
      default: {
        let display = undefined;
        if (operators.includes(innerText)) {
          if (operators.includes(lastPressed) && innerText !== '-') {
            const lastNumbIdx = calc.split('').reverse().findIndex(
              char => char !== ' ' && nums.includes(+char)
            );
            display = calc.slice(0, calc.length - lastNumbIdx) + ` ${innerText} `;
          } else {
            display = `${calc} ${innerText} `;
          }
        } else {
          display = calc === "0" ? innerText : calc + innerText;
        }
        setLastPressed(innerText);
        setCalc(display);
      };
        
    }
    setLastPressed(innerText);
  };
  
  return (
    <div className="App">
      <div className="calculator">
        <div id="display">{calc}</div>
        <div className="buttonsDiv">
          <button className="button" id="clear" onClick={handleClick}>
            AC
          </button>
          <div className="button">
          </div>
          <div className="button">
          </div>
          <div className="button" id="divide" onClick={handleClick}>
            /
          </div>
          <div className="button" id="seven" onClick={handleClick}>
            7
          </div>
          <div className="button" id="eight" onClick={handleClick}>
            8
          </div>
          <div className="button" id="nine" onClick={handleClick}>
            9
          </div>
          <div className="button" id="multiply" onClick={handleClick}>
            *
          </div>
          <div className="button" id="four" onClick={handleClick}>
            4
          </div>
          <div className="button" id="five" onClick={handleClick}>
            5
          </div>
          <div className="button" id="six" onClick={handleClick}>
            6
          </div>
          <div className="button" id="subtract" onClick={handleClick}>
            -
          </div>
          <div className="button" id="one" onClick={handleClick}>
            1
          </div>
          <div className="button" id="two" onClick={handleClick}>
            2
          </div>
          <div className="button" id="three" onClick={handleClick}>
            3
          </div>
          <div className="button" id="add" onClick={handleClick}>
            +
          </div>
          <div className="button" id="zero" onClick={handleClick}>
            0
          </div>
          <div className="button" id="decimal" onClick={handleClick}>
            .
          </div>
          <button className="button" id="equals" onClick={handleClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;