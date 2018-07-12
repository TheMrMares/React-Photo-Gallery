import React, { Component } from 'react';
import styled from 'styled-components';

import {Tile} from './Tile';
import {Zoom} from './Zoom';

import g_img1 from './../gallery/1.jpg';
import g_img2 from './../gallery/2.jpg';
import g_img3 from './../gallery/3.jpg';
let images = [];
images.push(g_img1, g_img2, g_img3);

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
`;

export class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            iPath: g_img1,
            isZoomed: true
        }
    }
    handleCallback(data){
        this.setState(prevState => {
            return {
                iPath: data.props.imagePath,
                isZoomed: false
            }
        });
    }
    handleClose(){
        this.setState(prevState => {
            return {
                isZoomed: true
            }
        })
    }
    showZoom(){
        if(this.state.isZoomed == false){
            return <Zoom imagePath={this.state.iPath} clickClose={this.handleClose.bind(this)}/>
        }
    }
    render(){
        return(
            <Wrapper className={this.props.className} callbackFromParent={this.handleCallback.bind(this)}>
                <TilesContainer>
                    {images.map((item,index) => {
                        return <StyledTile imagePath={item} callbackFromParent={this.handleCallback.bind(this)}/>
                    })}
                </TilesContainer>
                {this.showZoom()}
            </Wrapper>
        );
    }
}