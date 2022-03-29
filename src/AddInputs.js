import { useState } from "react";
import Numbers from "./GetNumbers";
const AddInputs = ({ getNumbersWithInputs }) => {

  const [answers, setAnswers] = useState([]);
  const [answerFieldEntry, setAnswerFieldEntry] = useState(0);

  const getAnswers = (answers) => {
    const currentAnswers = answers;
    let row = {};
    for(let index = 0; index <= currentAnswers.rows.length; index++){
     row[index] = randomChoiceForInputs();
    }
    for(let value = 1; value < currentAnswers.rows[0].length; value++){
      // if(currentAnswers.rows[0].includes(row[0][value])){
      //   console.log(currentAnswers.rows[0][value], Object.keys(currentAnswers.rows[0].indexOf(value)));
      // }
      if(currentAnswers.rows[0].includes(row[0][value])){
      console.log(currentAnswers.rows[0].indexOf(value))
      }
    }
    
    getNumbersWithInputs(currentAnswers);
    return currentAnswers;
  }

  const makeAnswerKey = (e) => {
    const answerKey = answers;
    e.preventDefault();
    answerKey.push(answerFieldEntry);
    setAnswers([...answerKey]);
  }
 
  const randomChoiceForInputs = () => {
    const randomArray = [];
    do{
      let randomIndex = Math.floor(Math.random()*(9-1));
      if(randomArray.indexOf(randomIndex)=== -1){
        randomArray.push(randomIndex);
      }
    }while(randomArray.length < 6);
    return randomArray;
  }

  return (
    <div>
     <Numbers getAnswers={getAnswers}/>
    <input
      type="text"
      value={answerFieldEntry}
      onChange={(e) => setAnswerFieldEntry(e.target.value)}
    />
    <button onClick={makeAnswerKey}>show Answers</button>
    {answers ? <p>{answers} </p>: null}
    </div>
  )
}

export default AddInputs;