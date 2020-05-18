import React, { FC } from 'react';

const Question1: FC = () => {
  return (
    <div>
      <p>第1/10問</p>
      <h2>友達100人作りたい</h2>
      <div>
        <button>◉</button>
        <p>とても当てはまる</p>
      </div>
      <div>
        <button>◉</button>
        <p>やや当てはまる</p>
      </div>
      <div>
        <button>◉</button>
        <p>どちらとも言えない</p>
      </div>
      <div>
        <button>◉</button>
        <p>あまり当てはまらない</p>
      </div>
      <div>
        <button>◉</button>
        <p>全く当てはまらない</p>
      </div>
    </div>
  );
}

export default Question1;
