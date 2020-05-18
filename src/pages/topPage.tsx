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



const TopPage: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
            <StartBlock />
          <Footer />
        </Route>
        <Route exact path="/question">
          <Header />
          <QuestionPage />
          <Footer />
        </Route>
        <Route exact path="/result">
          <Header />
          <ResultPage />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default TopPage;