import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    footer: {
      padding: "0px",
      marginTop: "auto",
      width: "100%",
      borderTop: "1px solid #E5E5E5",
    },
    text: {
      textAlign: "center",
      fontSize: "14px",
    },
  }),
)

const Footer: FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <footer>
        <p className={classes.text}>
          <span>©</span>企画集団便利舎
        </p>
      </footer>
    </div>
  );
}

export default Footer;