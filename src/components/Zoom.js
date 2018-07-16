import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0;
`;
const RelativeWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
const ZoomClose = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
    z-index: 1100;
    background: rgba(0,0,0,0.8);
`;
const ZoomImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1200;
    max-width: 80%;
    max-height: 80%;
    border: 12px solid rgba(255,255,255,1);
`;

export class Zoom extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <Wrapper>
                <RelativeWrapper>
                    <ZoomImg src={this.props.imagePath}></ZoomImg>
                </RelativeWrapper>
                <ZoomClose onClick={this.props.clickClose}/>
            </Wrapper>
        );
    }
}