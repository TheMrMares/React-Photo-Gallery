import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
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
    background: rgba(0,0,0,0.5);
`;
const ZoomImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1200;
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
                <ZoomClose/>
            </Wrapper>
        );
    }
}