import React, { Component } from 'react';
import styled from 'styled-components';

import bannerUrl from './../images/battlefield4-report1.1.png';
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
    z-index: 2000;
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