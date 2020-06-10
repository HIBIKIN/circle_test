import React, { FC, useState, useEffect } from 'react';
import ShareButton from '../shareButton';
import StartBlock from '../startBlock';
import BenrishaRecommend from '../benrishaRecommend';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import firebase from '../../firebase';
import { CircleData } from '../../types/types';
import {useParams} from 'react-router-dom';


const useStyle = makeStyles(() =>
  createStyles({
    paper: {
      marginTop: "30px",
      padding: "20px 5px",
      margin: "0 30px",
      backgroundColor: "#fff",
      marginBottom: "40px",
      '& p' : {
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
    title: {
      // marginLeft: "30px",
      fontSize: "22px",
      textAlign: "center",
    },
  }),
)



const Result1: FC = () => {
  const classes = useStyle();
  const [circle, setCircle] = useState<CircleData>(Object) //初期値に空のObjectを入れてる。けど書き方よくないっぽい？interface作るでもいいかも
  const { keyword } = useParams();

  const getData = async(searchWord: string) => {
    const db = firebase.firestore();
    const circleDataRef = db.collection("circleData").doc(searchWord); //documentがsearchWordの奴を選択してる
    const circle = await circleDataRef.get(); //さっき洗濯した奴をgetで取ってきてる
    const temporaryData = circle.data();  //circleの中身を入れてる
    setCircle(temporaryData as CircleData);
  }

  useEffect(() => {
    getData(keyword);
  }, []);

  return(
    <div>
        <div>
          <img className={classes.circleImage} src={circle.image} alt={circle.name} />
          <h3 className={classes.title}>{circle.name}</h3>
        </div>
      <ShareButton />
      <Paper elevation={1} className={classes.paper}>
        <p>{circle.text}</p>
      </Paper>
      <StartBlock />
      <ShareButton />
      <BenrishaRecommend />
    </div>
  );
}

export default Result1;