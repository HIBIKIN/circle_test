import React, { FC } from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(() =>
  createStyles({
    buttonStyle: {
      textTransform: 'none',
      display: "block",
      margin: "40px auto",
      width: "314px",
      height: "50px",
      backgroundColor: "#17ACFF",
      color: "#fff",
      borderRadius: "9999px",
      fontSize: "20px",
      fontWeight: "bold",
    },

  }),
)

const ShareButton: FC = () => {
  const classes = useStyle();
  return(
    <Button className={classes.buttonStyle} variant="contained">
      Twitterで結果をシェア
    </Button>
  );
}

export default ShareButton;