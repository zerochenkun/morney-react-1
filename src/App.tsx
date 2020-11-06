import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/money">Money</Link>
            </li>
            <li>
              <Link to="/tags">Tags</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Redirect from='/' exact to='/money'> </Redirect>
          <Route path="/money" component={Money}></Route>
          <Route path="/tags" component={Tags}></Route>
          <Route path="/statistics" component={Statistics}></Route>
          <Route path='*' component={NoMatch}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Money() {
  return <h2>Money</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}
function NoMatch() {
  return <h2>地址错误</h2>;
}