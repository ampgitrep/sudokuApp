import { useState } from "react";

const Grid = ({ passGame }) => {
  const [game, setGame] = useState({
  });
  const [clickedId, setClickedId] = useState({row: '', column: ''})
  const [gameFlag, setGameFlag] = useState(false); 
  const array = [];
  const fillArray = () => {
    do {
      let randIndex = Math.floor(Math.random() * (10 - 1) + 1);
      if (array.indexOf(randIndex) === -1) {
        array.push(randIndex);
      }
    } while (array.length < 9);
    if (!gameFlag) {
      setGameFlag(true);
    }
  };


  const getGame = () => {
    fillArray();
    let a = array[0]
    let b = array[1];
    let c = array[2];
    let d = array[3];
    let e = array[4];
    let f = array[5];
    let g = array[6];
    let h = array[7];
    let i = array[8];
    const newGame = {
      rows: [[a, b, c, d, e, f, g, h, i], [d, e, f, g, h, i, a, b, c], [g, h, i, a, b, c, d, e, f], [c, a, b, h, i, g, e, f, d], [h, i, g, f, d, e, c, a, b], [e, f, d, c, a, b, h, i, g], [i, g, h, b, c, a, f, d, e], [f, d, e, i, g, h, b, c, a], [b, c, a, e, f, d, i, g, h]]
    };
    passGame(newGame);
    return newGame;
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(clickedId);
  }

  return (
    <div>
      <button onClick={() => setGame(getGame())}>make game</button>
      {gameFlag ? <table>{game.rows.map((e,row)=> {
       return (
       <tr>
         {e.map((e, column) => {
           return (
             <td key={column} onClick={()=> setClickedId({row: row, column: column})}>{e}</td>
           )
         })}
       </tr> )
      })}</table> : null}
      <button onClick={handleClick}>show id</button>
    </div>
  )
}

export default Grid;