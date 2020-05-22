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
              <Header />
              <StartBlock />
              <Footer />
            </Grid>
            <Grid item sm={3} className={classes.blank}></Grid>
          </Grid>
        </Route>
        <Route exact path="/question">
          <Grid container className={classes.root}>
            <Grid item sm={3} className={classes.blank}></Grid>
            <Grid item sm={6} xs={12}>
              <Header />
              <QuestionPage />
              <Footer />
            </Grid>
            <Grid item sm={3} className={classes.blank}></Grid>
          </Grid>
        </Route>
        <Route exact path="/result">
          <Grid container className={classes.root}>
            <Grid item sm={3} className={classes.blank}></Grid>
            <Grid item sm={6} xs={12}>
              <Header />
              <ResultPage />
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