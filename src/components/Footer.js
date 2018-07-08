import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    background: blue;
    text-align: center;
    min-height: 100vh;
`;
const FooterTitle = styled.h1`

`;
const FooterDesc = styled.p`

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