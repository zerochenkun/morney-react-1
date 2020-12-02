import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "components/Layout";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>
    </Layout >
  )
}

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>


  )
}

function Statistics() {
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
  )
}
function NoMatch() {
  return <h2>地址错误</h2>;
}