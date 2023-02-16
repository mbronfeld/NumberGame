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
  {text: 8, id: 4, visible: true}],]

const target_list = [10, 11, 12, 13, 14];

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
    }, 30000);
  }, []);

  return (
    <div className="App">
      { gamePlayable ? 
        <div className="playable-game-view">
          <Timer/>
          <GameUI list_of_buttons={list_of_buttons} target_list={target_list} changeScore={upScore} score={score}/>
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