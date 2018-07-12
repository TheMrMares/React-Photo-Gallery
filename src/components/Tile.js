import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    float: left;
    width: 20%;
    height: 11vw;
    border: 12px solid rgba(255,255,255,1);
    &:hover {
        border: 12px solid rgba(255,255,255,0.3);
    }
`;
const Thumbnail = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
`;
const LetCenter = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.5);
`;
export class Tile extends React.Component {
    constructor(){
        super();
    }
    passData({target}){
        this.props.callbackFromParent(this);
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <LetCenter>
                    <Thumbnail src={this.props.imagePath} onClick={this.passData.bind(this)}/>
                </LetCenter>
            </Wrapper>
        );
    }
}