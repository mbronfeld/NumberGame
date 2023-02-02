import './App.css';
import ButtonArray from './ButtonArray';
import React from 'react';
import OpButtonArray from './OpButtonsArray';
import ChosenButtonArray from './ChosenButtonArray';
import UndoButton from './UndoButton';

let buttons = [
  {text: 1, id: 1, visible: true},
  {text: 2, id: 2, visible: true},
  {text: 3, id: 3, visible: true},
  {text: 4, id: 4, visible: true}
];

let lastButtons = [
  {id: "1", visible: true},
  {id: "2", visible: true},
  {id: "3", visible: true},
  {id: "4", visible: true},
]

const operations = [
  {text: "+", id: "1"},
  {text: "−", id: "2"},
  {text: "×", id: "3"},
  {text: "÷", id: "4"},
];

const target = 10;

export default function App() {

  const checkWinCondition = () => {
    const targetButton = buttons.filter((button) => button.visible)
    if (targetButton.length === 1) {
      if (targetButton[0].text === target) {
        setWinReached(true)
      }
    }
  }

  const evaluate = () => {
    const op = topOpButton.id;
    let result;
    const a = topLeftNumberButton.text
    const b = topRightNumberButton.text
    if (op === "1") {
        result =  a+b
    }
    else if (op === "2") {
        result = a-b
    }
    else if (op === "3") {
        result = a*b
    }
    else {
        if (b === 0) {
            return
        }
        result = parseFloat((a/b).toFixed(3))
        if (result % 1 === 0) {
          result = parseInt(result)
        }
    }
    pushLastState(bottomNumberButtons)
    const unusedButtons = bottomNumberButtons.filter((button) => button.id !== topLeftNumberButton.id && button.id !== topRightNumberButton.id)
    unusedButtons.push({text: result, id: topLeftNumberButton.id , visible: true})
    setBottomNumberButtons(unusedButtons)
    checkWinCondition()
    setTopLeftNumberButton(null)
    setTopRightNumberButton(null)
    setTopOpButton(null)
  }
  

  const undo = () => {
    console.log('UNDOING')
    const temp = copyButtons(lastState[lastState.length - 1])
    //
    setBottomNumberButtons(temp)
    setLastState(lastState.slice(0, lastState.length - 1))
    console.log(lastState)
  }

  const copyButtons = (buttons, forceVisible=false) => {
    let newButtons = []
    //console.log(buttons)
    buttons.forEach((elem) => {
      const visible = forceVisible || elem.visible
      const toBeAdded = {text: elem.text, id: elem.id, visible: visible}
      newButtons = [...newButtons, toBeAdded]
    });
    return newButtons
  }
  
  const [winReached, setWinReached] = React.useState(false)
  const [bottomNumberButtons, setBottomNumberButtons] = React.useState(buttons);
  const [topLeftNumberButton, setTopLeftNumberButton] = React.useState();
  const [topRightNumberButton, setTopRightNumberButton] = React.useState();
  
  const [bottomOpButtons, setBottomOpButton] = React.useState(operations);
  const [topOpButton, setTopOpButton] = React.useState();

  const [lastState, setLastState] = React.useState([]);

  const [addState, setAddState] = React.useState(false);

  const pushLastState = React.useCallback((bottomNumberButtons) => {
      console.log("nbnb : " , bottomNumberButtons)
      const temp = copyButtons(bottomNumberButtons, true)
      setLastState([...lastState, temp])
      console.log("new last state: " , lastState)
      setAddState(false)
    }, [lastState]);

  const handleBottomNumberClick = React.useCallback((buttonID) => {
      if ((topLeftNumberButton) && (topRightNumberButton)) {
        return
      }
      if (topLeftNumberButton){
        console.log({buttonID})
        const clickedButton = bottomNumberButtons.find((button) => button.id === buttonID)
        clickedButton.visible = false;
        setTopRightNumberButton(clickedButton)
      }
      else {
        console.log({buttonID})
        const clickedButton = bottomNumberButtons.find((button) => button.id === buttonID)
        clickedButton.visible = false;
        setTopLeftNumberButton(clickedButton)
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
    setTopOpButton(op);
  }, [bottomOpButtons, topOpButton]);

  const handleTopOpClick = React.useCallback((opID) => {
    console.log(opID)
    setTopOpButton(null)
  });

  return (
    <div className="App">
      <div className='target'>
          Try to reach: {target}
      </div>
      <div className='undo-button-container'>
        {lastState.length > 0 ? <UndoButton onClick={() => undo()}/> : null}
      </div>
      {!winReached ? <header className="App-header">
         <ChosenButtonArray numberButtons={[topLeftNumberButton, topRightNumberButton]}
                            operatorButton={[topOpButton]} 
                            onNumberButtonClick={handleTopNumberClick}
                            onOperatorButtonClick={handleTopOpClick}
                            evaluate={evaluate}/>
         <div className="lower-button-groups">
            <ButtonArray buttons={bottomNumberButtons} onButtonClick={handleBottomNumberClick}/>
            <OpButtonArray operations={bottomOpButtons} onButtonClick={handleBottomOpClick}/>
         </div>
      </header> : <div> YOU WON!!!!! </div>}
    </div>
  );
}


//max shi is a genius
// quentin