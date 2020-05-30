import React, { FC, useState } from "react";
import Question from '../components/questions/question';

// type Props = {
//   a: number,
//   handleAnswer: FC,
// }

const QuestionPage: FC = () => {
  const [data, setData] = useState([]);

  const handleAnswer = (a: any) => {
    setData(a)
  }


  return (
    <div>
      <p>{data}</p>
      <Question
        q={"友達100人作りたい"}
        n={1}
        handleAnswer={handleAnswer}
      />
      {/* <Question
        q={"自分、彼氏彼女ほしいっす"}
        n={2}
        handleAnswer={handleAnswer}
      /> */}
    </div>
  );
}

export default QuestionPage;