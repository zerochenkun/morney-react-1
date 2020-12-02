import styled from 'styled-components'
import React from 'react';
import { Link } from 'react-router-dom'
require("icons/money.svg")
require("icons/chart.svg")
require("icons/label.svg")



const NavWrapper = styled.div`
  line-height:24px;  
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  > ul{
    display:flex;
    > li{
       width:33.333333%;
       text-align:center;
       padding:16px;
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money" />
                    </svg>
                    <Link to="/money">Money</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#label" />
                    </svg>
                    <Link to="/tags">Tags</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#chart" />
                    </svg>
                    <Link to="/statistics">Statistics</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav