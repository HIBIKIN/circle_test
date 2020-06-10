import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyle = makeStyles(() =>
  createStyles({
    paper: {
      padding: "20px 5px",
      margin: "40px 30px",
      backgroundColor: "#fff",
      '& p': {
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
    text: {
      fontSize: "18px",
      fontWeight: "bold",
      marginTop: "15px",
      marginLeft: "30px",
      marginBottom: "30px",
    },
    twitterButton: {
      display: 'flex',
      width: "80%",
      margin: 'auto',
      fontWeight: "bold",
      fontSize: "20px",
      backgroundColor: '#FBD605',
    },
  }),
)


const BenrishaRecommend: FC = () => {
  const classes = useStyle();
  return(
    <div>
      <p className={classes.text}>
        このサークルもおすすめ!!
      </p>
      <img className={classes.circleImage} src="../assets/images/benrisha_square.jpeg" alt="便利舎画像"/>
      <img className={classes.circleImage} src="http://img.kb-cdn.com/imgviewer/NVpIM2ptOHhYRzVmUk5rM1NrNlFxYVV6enV4aGk2UFRJMmxPckdDUUVNWTd3M0dVelBhYllTVTJTSVhOWUhCUGNGbzVhc0UvamVIWlVLRmxzUlJPd3lpQTZTMkhkdk8zbkszeEhpdmlSdVc1QW5rUDRHUlUvVzZCbXV4MDZRdkVKK1BpT0VoSk0reTRqdnFOLy9XL3JYTi9VcnFoK3V1ZS9mU2RrdkZuM3h2Y1dWaE9zRlhVVlRKMkdab3J5cExuRStPWm13MVAxajdKYXlhMENUNUtwUT09/webp" alt="便利舎画像"/>
      <Paper className={classes.paper}>
        <p>
          便利舎は早稲田大学公認の企画サークルだよ！
          <br/>文化祭とかで芸能人をお呼びしたイベントを企画しています！
          <br/>去年はフワちゃん、ローランド、
          <br/>宇垣美里アナなどをお呼びしました。
          <br/>また、早稲田祭イチ盛り上がる
          <br/>早稲田王を主催しています！
          <br/>アットホームなサークルなので、
          <br/>どんな人でも歓迎です！
          <br/>ぜひチェックしてみよう！
        </p>
        <Button className={classes.twitterButton}>
          公式サイトをチェック!!
        </Button>
      </Paper>
    </div>
  );
}

export default BenrishaRecommend;
