import './App.css';
import ButtonArray from './ButtonArray';
import React from 'react';
import OpButtonArray from './OpButtonsArray';
import ChosenButtonArray from './ChosenButtonArray';

const buttons = [
  {text: "1", id: "1"},
  {text: "2", id: "2"},
  {text: "3", id: "3"},
  {text: "4", id: "4"},
];

const operations = [
  {text: "+", id: "1"},
  {text: "-", id: "2"},
  {text: "*", id: "3"},
  {text: "/", id: "4"},
];

function App() {

  const [bottomNumberButtons, setBottomNumberButtons] = React.useState(buttons);
  const [topNumberBottoms, setTopNumberBottoms] = React.useState([]);
  
  const [bottomOpButtons, setBottomOpButton] = React.useState(operations);
  const [topOpButton, setTopOpButton] = React.useState([]);

  const handleBottomNumberClick = React.useCallback((buttonID) => {
      if (topNumberBottoms.length >= 2) {
        return
      }
      console.log({buttonID})
      const newbottomNumberButtons = bottomNumberButtons.filter( (button) => button.id !== buttonID)
      setBottomNumberButtons(newbottomNumberButtons);

      const button = bottomNumberButtons.find((button) => button.id === buttonID);
      setTopNumberBottoms([...topNumberBottoms, button]);
  }, [bottomNumberButtons, topNumberBottoms]);
      
  const handleTopNumberClick = React.useCallback((buttonID) => {
    console.log({buttonID})
    const newtopNumberBottoms = topNumberBottoms.filter( (button) => button.id !== buttonID)
    setTopNumberBottoms(newtopNumberBottoms);
    
    const button = topNumberBottoms.find((button) => button.id === buttonID);
    setBottomNumberButtons([...bottomNumberButtons, button]);
  }, [bottomNumberButtons, topNumberBottoms]);

  const handleBottomOpClick = React.useCallback((opID) => {
    console.log({opID})
    if (topOpButton.length >= 1) {
      console.log("full")
      return
    }
    const op = bottomOpButtons.find((op) => op.id === opID);
    setTopOpButton([op]);
  }, [bottomOpButtons, topOpButton]);

  const handleTopOpClick = React.useCallback((opID) => {
    console.log(opID)
    setTopOpButton([])
  });

  return (
    <div className="App">
      <header className="App-header">
         <ChosenButtonArray numberButtons={topNumberBottoms} 
                            operatorButton={topOpButton} 
                            onNumberButtonClick={handleTopNumberClick}
                            onOperatorButtonClick={handleTopOpClick}/>
         <div className="lower-button-groups">
            <ButtonArray buttons={bottomNumberButtons} onButtonClick={handleBottomNumberClick}/>
            <OpButtonArray operations={bottomOpButtons} onButtonClick={handleBottomOpClick}/>
         </div>
      </header>
    </div>
  );
}

export default App;


/* instead of filetering out buttons set visible oand not visible on bottom buttons */