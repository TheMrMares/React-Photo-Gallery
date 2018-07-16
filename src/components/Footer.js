import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    background: blue;
    text-align: center;
    min-height: 100vh;
    background: rgba(6,6,6,1);
`;
const FooterTitle = styled.h1`
    text-transform: uppercase;
    font-size: 1em;
    color: white;
`;
const FooterDesc = styled.p`
    color: white;
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export class Footer extends React.Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                <FooterTitle>
                    Title of our Footer
                </FooterTitle>
                <FooterDesc>
                    That is just my awesome footer. <br/>
                    Nothing special is placed here. <br/>
                    But you can look how is it made 
                </FooterDesc>
            </Wrapper>
        );
    }
}