import React, { Component } from 'react';
import styled from 'styled-components';

import {Item} from './Item';

const Wrapper = styled.nav`
    background: red;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;`;
const StyledItem = styled(Item)`
    float: left;`;

export class Navigation extends React.Component {
    constructor(){
        super()
        this.state = {
            clicked: 'no'
        }
        let def_active = 'NOT';
        this.items = [
            {name: 'Gallery', active: def_active},
            {name: 'List', active: def_active}
        ]
    }
    handleCallback(data){
        this.setState(prevState => {
            return {
                clicked: 'yes'
            }
        })
        this.items.forEach((item,index) => {
            if(index != data.props.itemId){
                item.active = 'NOT'
            }
        })
        this.items[data.props.itemId].active = 'YES';
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <List>
                    {this.items.map((item,index)=>{
                        
                        return <StyledItem name={item.name} itemId={index} key={index} active={item.active} callbackFromParent={this.handleCallback.bind(this)}/>
                    })}
                </List>
            </Wrapper>
        );
    }
}