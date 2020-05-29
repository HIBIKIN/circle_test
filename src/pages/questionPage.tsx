import React, { FC, useState } from "react";
import Question1 from '../components/questions/question1';
import { AnswerData } from '../types/types';

const QuestionPage: FC = () => {
  const [data, setData] = useState<AnswerData[]>([]);


  return (
    <div>
      <Question1 q1={data.q1} />
    </div>
  );
}

export default QuestionPage;