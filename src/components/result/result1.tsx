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
  const [data, setData] = useState<CircleData[]>([]);
  const { keyword } = useParams();

  const getData = async(searchWord: string) => {
    const db = firebase.firestore();
    const circleDataRef = db.collection("circleData");
    const searchedData = circleDataRef.where("keyword", "==", searchWord);
    const circle = await searchedData.get();
    const temporaryData: object[] = [];
    circle.docs.map(doc => {
      temporaryData.push(doc.data());
    })
    setData(temporaryData as CircleData[]);
  }

  useEffect(() => {
    getData(keyword);
  }, []);


  return(
    <div>
      {data.map((circle) => (
        <div>
          <img className={classes.circleImage} src={circle.image} alt={circle.name} />
          <h3 className={classes.title}>{circle.name}</h3>
        </div>
      ))}
      <ShareButton />
      <Paper elevation={1} className={classes.paper}>
        <p>
          〇〇なあなたにおすすめのサークルは
          <br />放送研究会！
          <br />人数が多くてたくさん友達ができそうな予感！
          <br />〇〇なあなたを一言で表すと
        </p>
      </Paper>
      <StartBlock />
      <ShareButton />
      <BenrishaRecommend />
    </div>
  );
}

export default Result1;