import React, { FC, useState } from "react";
import Question from '../components/questions/question';
import { useHistory } from 'react-router-dom';

// type Props = {
//   a: number,
//   handleAnswer: FC,
// }

const QuestionPage: FC = () => {
  const history = useHistory();

  // 各questionの値の宣言といれるメソッド
  const [a1, setA1] = useState();
  const [a2, setA2] = useState();
  const [a3, setA3] = useState();
  const [a4, setA4] = useState();
  const [a5, setA5] = useState();
  const handleAnswer1 = (a: any) => {
    setA1(a)
  }
  const handleAnswer2 = (a: any) => {
    setA2(a)
  }
  const handleAnswer3 = (a: any) => {
    setA3(a)
  }
  const handleAnswer4 = (a: any) => {
    setA4(a)
  }
  const handleAnswer5 = (a: any) => {
    setA5(a)
  }

  // 計算処理
  const array: number[] = [a1, a2, a3, a4, a5]
  let average = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ) / 5
  if (!isNaN(average)){
    history.push('/result/'+ 'benrisha');
  }

  return (
    <div>
      <p>{array}</p>
      <p>{average}</p>
      <Question
        q={"友達100人作りたい"}
        n={1}
        handleAnswer={handleAnswer1}
      />
      <Question
        q={"自分、彼氏彼女ほしいっす"}
        n={2}
        handleAnswer={handleAnswer2}
      />
      <Question
        q={"お酒大好き！！"}
        n={3}
        handleAnswer={handleAnswer3}
      />
      <Question
        q={"スポーツ好き"}
        n={4}
        handleAnswer={handleAnswer4}
      />
      <Question
        q={"Youtbe見まっす！"}
        n={5}
        handleAnswer={handleAnswer5}
      />
    </div>
  );
}

export default QuestionPage;