import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ResultPage from "./resultPage";
import QuestionPage from './questionPage';
import Header from '../components/header'
import Footer from '../components/footer';
import StartBlock from '../components/startBlock';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
    },
    blank: {
      backgroundColor: '#F8E266',
    },
    main: {
      display: "flex",
      flexDirection: "column",
      minHeight: "95vh",
    },

  }),
)


const TopPage: FC = () => {
  const classes = useStyle();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Grid container className={classes.root}>
            <Grid item sm={3} className={classes.blank}></Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.main}>
                <Header />
                <StartBlock />
              </div>
              <Footer />
            </Grid>
            <Grid item sm={3} className={classes.blank}></Grid>
          </Grid>
        </Route>
        <Route exact path="/question">
          <Grid container className={classes.root}>
            <Grid item sm={3} className={classes.blank}></Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.main}>
                <Header />
                <QuestionPage />
              </div>
              <Footer />
            </Grid>
            <Grid item sm={3} className={classes.blank}></Grid>
          </Grid>
        </Route>
        <Route exact path="/result/:keyword">
          <Grid container className={classes.root}>
            <Grid item sm={3} className={classes.blank}></Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.main}>
                <Header />
                <ResultPage />
              </div>
              <Footer />
            </Grid>
            <Grid item sm={3} className={classes.blank}></Grid>
          </Grid>
        </Route>
      </Switch>
    </Router>
  );
}

export default TopPage;