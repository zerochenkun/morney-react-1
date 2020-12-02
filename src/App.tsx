import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components'
const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`

const Main = styled.div`
  flex-grow:1;
  overflow:auto;
`
const Nav = styled.div`
  border:1px solid red;
  > ul{
    display:flex;
    > li{
       width:33.333333%;
       text-align:center;
       padding:16px;
    }
  }
`

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect from='/' exact to='/money'> </Redirect>
            <Route path="/money" component={Money}></Route>
            <Route path="/tags" component={Tags}></Route>
            <Route path="/statistics" component={Statistics}></Route>
            <Route path='*' component={NoMatch}></Route>
          </Switch>
        </Main>

        <Nav>
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
        </Nav>
      </Wrapper>
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