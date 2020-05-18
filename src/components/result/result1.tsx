import React, { FC } from 'react';
import ShareButton from '../shareButton';
import StartBlock from '../startBlock';
import BenrishaRecommend from '../benrishaRecommend';



const Result1: FC = () => {
  return(
    <div>
      <img src="https://placehold.jp/300x300.png" alt="サークル画像" />
      <ShareButton />
      <StartBlock />
      <div>
        <p>
          〇〇なあなたにおすすめのサークルは
          <br />放送研究会！
          <br />人数が多くてたくさん友達ができそうな予感！
          <br />〇〇なあなたを一言で表すと
        </p>
      </div>
      <ShareButton />
      <BenrishaRecommend />
    </div>
  );
}

export default Result1;