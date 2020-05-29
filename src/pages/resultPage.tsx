import React, { FC } from "react";
import Result1 from '../components/result/result1';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



const useStyle = makeStyles(() =>
  createStyles({
    title: {
      marginLeft: "30px",
      fontSize: "22px",
    },
    text: {
      fontSize: "18px",
      fontWeight: "bold",
      marginLeft: "30px",
      marginBottom: "30px",
    },

  }),
)

const ResultPage: FC = () => {
  const classes = useStyle();
  return (
    <div>
      <h3 className={classes.title}>
        診断結果
      </h3>
      <p className={classes.text}>
        あなたにおすすめのサークルは...
      </p>
      <Result1 />
    </div>
  );
}

export default ResultPage;