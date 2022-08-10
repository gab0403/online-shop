import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/19².png';

const HeaderStyled = styled.div`
  background-color: #F3444F;
  display: flex;
  justify-content: center;
  margin-botton: 10%;
`;

export default class Header extends Component {
  render() {
    return (
      <Link to="/">
        <HeaderStyled>
          <img
            src={ logo }
            size="150"
            height="150"
            alt="logo-img"
            style={ { borderRadius: '5rem' } }
          />
        </HeaderStyled>
      </Link>
    );
  }
}
