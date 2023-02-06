import React from "react";
import GameStateButton from "./GameStateButton"
import Timer from "./timer";

function GameStateButtonContainer({lastState, undo, reset, target, solved}) { 

    const userUndoButton = lastState.length > 0 ? <GameStateButton caption={"UNDO"} onClick={() => undo()}/> : null
    const userResetButton = lastState.length > 0 ? <GameStateButton caption={"RESET"} onClick={() => reset()}/> : null

    return(
        <div className='game-state-button-container'>
            <Timer/>
            {userResetButton}
            <div className='target'>
                Try to reach: {target}
            </div>
            {userUndoButton}
            <div className ='target'>
                Solved: {solved}
            </div>
        </div>
    )
}

export default GameStateButtonContainer