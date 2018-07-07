import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    background: green;
`;

export class Main extends React.Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                main
            </Wrapper>
        );
    }
}