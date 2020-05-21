import React, { FC } from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(() =>
  createStyles({
    buttonStyle: {
      // height: '300px',
    },

  }),
)

const ShareButton: FC = () => {
  const classes = useStyle();
  return(
    <Button className={classes.buttonStyle} variant="contained" color="primary">
      Twitterで結果をシェア
    </Button>
  );
}

export default ShareButton;