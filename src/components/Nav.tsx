import styled from 'styled-components'
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'

const NavWrapper = styled.div`
  line-height:24px;  
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  > ul{
    display:flex;
    > li{
       width:33.333333%;
       text-align:center;
       padding:16px;
       > a{
           display:flex;
           flex-direction:column;
           justify-content:center;
           align-items:center;
           padding:4px 0;
           .icon{
               width:24px;
               height:24px;
           }
           &.selected{
               color:green;
               .icon{
                   fill:green;
               }
           }
       }
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"></Icon>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="label"></Icon>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart"></Icon>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav