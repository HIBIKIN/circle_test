import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ResultPage from "./resultPage";

const TopPage: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            こんにちは
          </div>
        </Route>
        <Route exact path="/result">
          <ResultPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default TopPage;