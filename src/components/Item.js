import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
    background: red;
`;
const ItemLink = styled.a`
    padding: 5px 60px;
    float: left;
    background: orange;
    color: black;
    &:hover { background: black; color: white; }`;

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