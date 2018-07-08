import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: red;
`;
const Thumbnail = styled.img`
    position: relative;
    max-width: 100%;
`;
export class Tile extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <Wrapper>
                <Thumbnail src={this.props.imagePath} />
            </Wrapper>
        );
    }
}