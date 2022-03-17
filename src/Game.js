import Grid from "./MakeGrid";
import { useState } from "react";
const Game = () => {
  const [game, setGame] = useState({})
  
  const passGame = (currentGame) => {
    const thisGame = currentGame;
    console.log(thisGame);
  }

  return (
    <div>
     <Grid passGame={passGame}/>
    </div>
  );
}

export default Game;