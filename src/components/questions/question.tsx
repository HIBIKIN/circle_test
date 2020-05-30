import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';


const useStyle = makeStyles(() =>
  createStyles({
    paper: {
      padding: "5px",
      margin: "0 30px",
      height: "230px",
    },
    howQuestion: {
      marginTop: '5px',
      marginBottom: "20px",

      '& span': {
        padding: "7px",
        marginLeft: '10px',
        marginTop: "10px",
        background: "#f5f4f2",
        borderRadius: "9999px",
      },
    },  
    questionText: {
      margin: "5px",
      textAlign: "center",
    },
    choicelist: {
      width: "100%",
      padding: "5px",
      diaplay: "table",
      marginTop: "25px",
    },
    choice: {
      width: "19%",
      listStyle: "none",
      margin: "0 auto",
      display: "table-cell",
      float: "left",
      textAlign: "center",
    },
    button: {
      width: "50px",
      height: "50px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "0px 0px 0px 15px #EEEEEE inset",
      border: "none",
      // diaplay: "block",

      '&:hover': {
        boxShadow: "0px 0px 0px 15px #E0E0E0 inset",
      },
    },
    buttonText: {
      fontSize: "10px",
      width: "75%",
      margin: "1px auto",
    },

  }),
)


type Props = {
  q: string,
  n:number,
  handleAnswer: any
}


const Question: React.FC<Props> = ({n, q, handleAnswer}) => {
  const classes = useStyle();

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.howQuestion}>
        <span>第{n}/10問</span>
      </div>
      <h2 className={classes.questionText}>{q}</h2>
      <div className={classes.choicelist}>
        <li className={classes.choice}>
          <IconButton className={classes.button} onClick={() => handleAnswer(1)}></IconButton>
          <p className={classes.buttonText}>とても当てはまる</p>
        </li>
        <li className={classes.choice}>
          <IconButton className={classes.button} onClick={() => handleAnswer(2)}></IconButton>
          <p className={classes.buttonText}>やや当てはまる</p>
        </li>
        <li className={classes.choice}>
          <IconButton className={classes.button} onClick={() => handleAnswer(3)}></IconButton>
          <p className={classes.buttonText}>どちらとも言えない</p>
        </li>
        <li className={classes.choice}>
          <IconButton className={classes.button} onClick={() => handleAnswer(4)}></IconButton>
          <p className={classes.buttonText}>あまり当てはまらない</p>
        </li>
        <li className={classes.choice}>
          <IconButton className={classes.button} onClick={() => handleAnswer(5)}></IconButton>
          <p className={classes.buttonText}>全く当てはまらない</p>
        </li>
      </div>
    </Paper>
  );
}

export default Question;
