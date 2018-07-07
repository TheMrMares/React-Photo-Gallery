import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    background: blue;
`;

export class Footer extends React.Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                footer
            </Wrapper>
        );
    }
}