import React, {FC} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyle = makeStyles(() =>
  createStyles({
    paper: {
      padding: "10px",
      margin: "0 30px"
    },
    text: {
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "bold",
    },
    startButton: {
      display: 'flex',
      width: "80%",
      margin: 'auto',
      fontWeight: "bold",
      fontSize: "20px",
      backgroundColor: '#FBD605',
    },
    link: {
      textDecoration: "none",
    },

  }),
)



const StartBlock: FC = () => {
  const classes = useStyle();

  return(
    <Paper elevation={3} className={classes.paper}>
      <p className={classes.text}>
        10の質問に答えて
        <br/>性格診断とおすすめのサークルを
        <br/>見てみよう
      </p>
      <Link className={classes.link} to="/question">
        <Button className={classes.startButton} variant="contained">
          診断を開始する
        </Button>
      </Link>
    </Paper>
  );
}

export default StartBlock;