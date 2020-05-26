import React, { FC } from 'react';
import ShareButton from '../shareButton';
import StartBlock from '../startBlock';
import BenrishaRecommend from '../benrishaRecommend';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyle = makeStyles(() =>
  createStyles({
    paper: {
      marginTop: "30px",
      padding: "20px 5px",
      margin: "0 30px",
      backgroundColor: "#fff",
      marginBottom: "40px",
      '& p' : {
        margin: "5px",
        textAlign: "center",
        fontSize: "18px",
      },

    },
    circleImage: {
      width: "300px",
      height: "300px",
      display: "block",
      margin: "0 auto",

    },
  }),
)



const Result1: FC = () => {
  const classes = useStyle();
  return(
    <div>
      <img src="https://placehold.jp/300x300.png" alt="サークル画像" className={classes.circleImage} />
      <ShareButton />
      <Paper elevation={1} className={classes.paper}>
        <p>
          〇〇なあなたにおすすめのサークルは
          <br />放送研究会！
          <br />人数が多くてたくさん友達ができそうな予感！
          <br />〇〇なあなたを一言で表すと
        </p>
      </Paper>
      <StartBlock />
      <ShareButton />
      <BenrishaRecommend />
    </div>
  );
}

export default Result1;