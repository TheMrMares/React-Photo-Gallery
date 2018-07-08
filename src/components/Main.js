import React, { Component } from 'react';
import styled from 'styled-components';

import {Tile} from './Tile';
import {Zoom} from './Zoom';

import g_img from './../gallery/1.jpg';

const Wrapper = styled.section`
    background: green;
`;
const TilesContainer = styled.div`
    float: left;
    width: 80%;
    margin: 20px 10% 20px 10%;
    background: #eee;
    min-height: 100vh;
`;
const StyledTile = styled(Tile)`
    max-width: 20%;
    border: 12px solid white;
`;

export class Main extends React.Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                <TilesContainer>
                    <StyledTile imagePath={g_img}/>
                </TilesContainer>
                <Zoom imagePath={g_img}/>
            </Wrapper>
        );
    }
}