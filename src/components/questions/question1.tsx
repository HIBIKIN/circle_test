import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';


const useStyle = makeStyles(() =>
  createStyles({
    startButton: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '20px',
    },

  }),
)


const Question1: FC = () => {
  return (
    <Paper>
      <p>第1/10問</p>
      <h2>友達100人作りたい</h2>
      <div>
        <Fab>◉</Fab>
        <p>とても当てはまる</p>
      </div>
      <div>
        <Fab>◉</Fab>
        <p>やや当てはまる</p>
      </div>
      <div>
        <Fab>◉</Fab>
        <p>どちらとも言えない</p>
      </div>
      <div>
        <Fab>◉</Fab>
        <p>あまり当てはまらない</p>
      </div>
      <div>
        <Fab>◉</Fab>
        <p>全く当てはまらない</p>
      </div>
    </Paper>
  );
}

export default Question1;
