import React, { Component } from 'react';
import styled from 'styled-components';

import bannerUrl from './../images/header-background.jpg';
import {Navigation} from './Navigation';

const Wrapper = styled.header`
    background: red;
`;
const Banner = styled.div`
    width: 100%;
    float: left;
    height: 100vh;
`;
const BannerImage = styled.img`
    width: 100%;
    float: left;
`;
const StyledNavigation = styled(Navigation)`
    position: fixed;
    z-index: 300;
    top: 0;
`;

export class Header extends React.Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                <StyledNavigation/>
                <Banner>
                    <BannerImage src={bannerUrl}/>
                </Banner>
            </Wrapper>
        );
    }
}