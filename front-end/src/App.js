import './App.css';
import ButtonArray from './ButtonArray';
import React from 'react';
import OpButtonArray from './OpButtonsArray';
import ChosenButtonArray from './ChosenButtonArray';
import { click } from '@testing-library/user-event/dist/click';

const buttons = [
  {text: "1", id: "1", visible: true},
  {text: "2", id: "2", visible: true},
  {text: "3", id: "3", visible: true},
  {text: "4", id: "4", visible: true},
];

const operations = [
  {text: "+", id: "1"},
  {text: "-", id: "2"},
  {text: "*", id: "3"},
  {text: "/", id: "4"},
];

function App() {

  const [bottomNumberButtons, setBottomNumberButtons] = React.useState(buttons);
  const [topLeftNumberButton, setTopLeftNumberButton] = React.useState();
  const [topRightNumberButton, setTopRightNumberButton] = React.useState();
  
  const [bottomOpButtons, setBottomOpButton] = React.useState(operations);
  const [topOpButton, setTopOpButton] = React.useState([]);

  const handleBottomNumberClick = React.useCallback((buttonID) => {
      if ((topLeftNumberButton) && (topRightNumberButton)) {
        return
      }
      if (topLeftNumberButton){
        console.log({buttonID})
        const clickedButton = bottomNumberButtons.find((button) => button.id === buttonID)
        clickedButton.visible = false;
        setTopRightNumberButton(clickedButton);
      }
      else {
        console.log({buttonID})
        const clickedButton = bottomNumberButtons.find((button) => button.id === buttonID)
        clickedButton.visible = false;
        setTopLeftNumberButton(clickedButton);
      }
      
  }, [bottomNumberButtons, topLeftNumberButton, topRightNumberButton]);
      
  const handleTopNumberClick = React.useCallback((buttonID) => {
    console.log({buttonID})
    if (topLeftNumberButton){
      if (buttonID === topLeftNumberButton.id) {
        topLeftNumberButton.visible = true;
        setTopLeftNumberButton(null)
        return
      }
    }
    topRightNumberButton.visible = true;
    setTopRightNumberButton(null)
  }, [bottomNumberButtons, topLeftNumberButton, topRightNumberButton]);

  const handleBottomOpClick = React.useCallback((opID) => {
    console.log({opID})
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
         <ChosenButtonArray numberButtons={[topLeftNumberButton, topRightNumberButton]}
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