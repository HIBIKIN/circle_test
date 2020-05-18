import React, { FC } from "react";
import Result1 from '../components/result/result1';


const ResultPage: FC = () => {
  return (
    <div>
      <h3>診断結果</h3>
      <p>あなたにおすすめのサークルは...</p>
      <Result1 />
    </div>
  );
}

export default ResultPage;