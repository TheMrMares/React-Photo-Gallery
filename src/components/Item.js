import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
    
`;
const ItemLink = styled.a`
    padding: 10px 60px;
    float: left;
    color: white;
    font-weight: bolder;
    transition: 0.25s ease;
    &:hover { 
        background: rgba(0,0,0,0.2); 
    }`;

export class Item extends React.Component {
    constructor(){
        super();
    }
    passData({target}){
        this.props.callbackFromParent(this);
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <ItemLink onClick={this.passData.bind(this)}>{this.props.active} {this.props.name}</ItemLink>
            </Wrapper>
        );
    }
}