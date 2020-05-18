import React, { FC } from 'react';

const BenrishaRecommend: FC = () => {
  return(
    <div>
      <p>このサークルもおすすめ!!</p>
      <img src="https://placehold.jp/300x300.png" alt="便利舎画像"/>
      <div>
        <p>
          便利舎は早稲田大学公認の企画サークルだよ！
          <br/>文化祭とかで芸能人をお呼びしたイベントを企画しています！
          <br/>去年はフワちゃん、ローランド、
          <br/>宇垣美里アナなどをお呼びしました。
          <br/>また、早稲田祭イチ盛り上がる
          <br/>早稲田王を主催しています！
          <br/>アットホームなサークルなので、
          <br/>どんな人でも歓迎です！
          <br/>ぜひチェックしてみよう！
        </p>
        <button>
          公式サイトをチェック!!
        </button>
        <div>
          <img src="https://placehold.jp/300x300.png" alt="Twitterのやーつ" />
        </div>
      </div>
    </div>
  );
}

export default BenrishaRecommend;
