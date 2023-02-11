import React from "react";
import GameStateButton from "./GameStateButton"

function GameStateButtonContainer({lastState, undo, reset, target, solved}) { 

    const userUndoButton = lastState.length > 0 ? <GameStateButton caption={"UNDO"} onClick={() => undo()}/> : null
    const userResetButton = lastState.length > 0 ? <GameStateButton caption={"RESET"} onClick={() => reset()}/> : null

    return(
        <div className='game-state-button-container'>
            {userResetButton}
            <div className='target'>
                Try to reach: {target}
            </div>
            {userUndoButton}
        </div>
    )
}

export default GameStateButtonContainer