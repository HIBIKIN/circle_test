import React, {FC} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(() =>
  createStyles({
    header: {
      borderBottom: "1px solid",
      '& img': {
        margin: "5px",
      },
    },
    title: {
      // backgroundColor: "#00BC13",
      textAlign: "center",
      marginTop: "10px",
      '& h1': {
        position: "relative",
        // width: "50%",
        margin: "0 auto",
        textAlign: "center",
        display: "inline-block",
        fontSize: "39px",
      },
    },
    block: {
      width: "100%",
      height: "60%",
      backgroundColor: "#FBD605",
      position: "absolute",
      top: "20px",
      zIndex: -1,
    },
    sentence: {
      textAlign: "center",
      fontSize: "14px",
      marginBottom: "50px",
      marginTop: "3px",
    },
  }),
)

const Header: FC = () => {
  const classes = useStyle();
  return(
    <div>
      <header className={classes.header}>
        <img src="https://placehold.jp/50x50.png" alt="便利舎ロゴ"/>


      </header>
      <div className={classes.title}>
        <h1>
          ワセダサークル診断
          <Paper elevation={3} square className={classes.block}></Paper>
        </h1>
      </div>
      <p className={classes.sentence}>質問に答えておすすめのサークルを診断しよう！</p>
    </div>
  );
}

export default Header;