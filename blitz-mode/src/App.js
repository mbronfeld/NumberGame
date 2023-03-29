import './App.css';
import React from 'react';
import GameUI from './GameUI';
import Timer from './timer';


let list_of_buttons = [
  [{text: 1, id: 1, visible: true},
  {text: 2, id: 2, visible: true},
  {text: 3, id: 3, visible: true},
  {text: 4, id: 4, visible: true}],
  [{text: 2, id: 1, visible: true},
    {text: 3, id: 2, visible: true},
    {text: 4, id: 3, visible: true},
    {text: 5, id: 4, visible: true}],
  [{text: 3, id: 1, visible: true},
    {text: 4, id: 2, visible: true},
    {text: 5, id: 3, visible: true},
    {text: 6, id: 4, visible: true}],
  [{text: 4, id: 1, visible: true},
    {text: 5, id: 2, visible: true},
    {text: 6, id: 3, visible: true},
    {text: 7, id: 4, visible: true}],
  [{text: 5, id: 1, visible: true},
    {text: 6, id: 2, visible: true},
    {text: 7, id: 3, visible: true},
    {text: 8, id: 4, visible: true}]]

const target_list = [10, 11, 12, 13, 14];

const getNumbers = () => {
  const numbers = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  return numbers
}

const getButtons = (numbers) => {
  return [{text: numbers[0], id: 1, visible: true},
    {text: numbers[1], id: 2, visible: true},
    {text: numbers[2], id: 3, visible: true},
    {text: numbers[3], id: 4, visible: true}]
}

const getTarget = (numbers) => {
  const backwardsLooper = [4, 3, 2]
  for (let it = 0; it < backwardsLooper.length; it ++) {
    const size = backwardsLooper[it]
    const index1 = Math.floor(Math.random() * size)
    let index2 = Math.floor(Math.random() * size)
    while (index1 === index2) {
      index2 = Math.floor(Math.random() * size)
    }

    const num1 = numbers[index1]
    const num2 = numbers[index2]

    let result

    const op = Math.floor(Math.random() * 4)
    if (op === 0) {
      result = num1 + num2
    }
    if (op === 1) {
      result = num1 - num2
    }
    if (op === 2) {
      result = num1 * num2
    }
    if (op === 3) {
      if (num2 !== 0) {
        if (num1%num2 === 0) {
          result = num1 / num2
        }
        else {
          it --;
          continue
        }
      }
      else {
        it --;
        continue
      }
    }

    if (index1 > index2) {
      numbers.splice(index1, 1)
      numbers.splice(index2, 1)
    }
    else {
      numbers.splice(index2, 1)
      numbers.splice(index1, 1)
    }

    numbers.splice(numbers.length, 0, result)
  }

  return numbers[0] 
}

export default function App() {

  const [score, setScore] = React.useState(0);
  const [gamePlayable, setGamePlayable] = React.useState(true);
  
  const upScore = () => {
    const newScore = score + 1;
    setScore(newScore)
  }

  React.useEffect(() => {
    setTimeout(function () {
      setGamePlayable(false);
      console.log("DONE")
    }, 60000);
  }, []);

  const startingNums = getNumbers()
  const startingButtons = getButtons(startingNums)
  const startingTarget = getTarget(startingNums)

  return (
    <div className="App">
      { gamePlayable ? 
        <div className="playable-game-view">
          <Timer/>
          <GameUI list_of_buttons={list_of_buttons} target_list={target_list} changeScore={upScore} score={score} 
            getNumbers={getNumbers} getButtons={getButtons} getTarget={getTarget} startingButtons={startingButtons} startingTarget={startingTarget}/>
          <div className='score-box'>
            Score: {score}
          </div> 
        </div>   
        : 
        <div className='victory'>
          You scored: {score}
        </div>}
    </div>
    
  );

}