import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

const StyledHeader = styled(Header)``
const StyledMain = styled(Main)``
const StyledFooter = styled(Footer)``

const cssPagePart = `
  font-family: Arial;
  float: left;
  width: 100%;`;

const StyledApp = styled.div`
  font-family: Helvetica;
  ${StyledHeader} { ${cssPagePart} }
  ${StyledMain} { ${cssPagePart} }
  ${StyledFooter} { ${cssPagePart} }`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <StyledHeader/>
        <StyledMain/>
        <StyledFooter/>
      </StyledApp>
    );
  }
}

export default App;
