import React, {FC} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(() =>
  createStyles({
    startButton: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '20px',
    },

  }),
)



const StartBlock: FC = () => {
  const classes = useStyle();

  return(
    <Paper>
      <p>
        10の質問に答えて
        <br/>性格診断とおすすめのサークルを
        <br/>見てみよう
      </p>
      <Button variant="contained" color="secondary">
        診断を開始する
      </Button>
    </Paper>
  );
}

export default StartBlock;