import { useState } from "react";
import AddInputs from "./AddInputs";

const Grid = ({ passGame }) => {
  const [game, setGame] = useState({
  });
  const [clickedId, setClickedId] = useState({ row: '', column: '' })
  const [gameFlag, setGameFlag] = useState(false);

  const getNumbersWithInputs = (newNumbers) => {
    const currentNumbers = newNumbers;
    setGame(currentNumbers);
    if(!gameFlag){
      setGameFlag(true);
    }
    return newNumbers
  }

  return (
    <div>
      <AddInputs getNumbersWithInputs={getNumbersWithInputs}/>
      {gameFlag ? <table>{game.rows.map((e, row) => {
        return (
          <tr>
            {e.map((e, column) => {
              return (
                <td key={column} onClick={() => setClickedId({ row: row, column: column })}>
                  {e}
                </td>
              )
            })}
          </tr>)
      })}</table> : null}
    </div>
  )
}

export default Grid;