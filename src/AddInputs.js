import { useState } from "react";

const AddInputs = ({ getAnswers }) => {

  const [answers, setAnswers] = useState([]);
  const [answerFieldEntry, setAnswerFieldEntry] = useState(0);

  const makeAnswerKey = (e) => {
    const answerKey = answers;
    e.preventDefault();
    answerKey.push(answerFieldEntry);
    setAnswers([...answerKey]);
    getAnswers(answers);
  }
  
  return (
    <div>
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