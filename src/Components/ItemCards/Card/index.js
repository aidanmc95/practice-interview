import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export const Card = (props) => {
    return (
        <CardContainer>
            <img alt={props.item.name} src={props.item.picture_url} />
            <div>{props.item.name}</div>
            <div className='flex' style={{padding: '5px 20px 5px 20px', justifyContent: 'space-between'}}>
                {props.item.display_price}
                <button onClick={() => props.updateCart(props.item, 1, true)}>+ Add</button>
            </div>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    width: 250px;
    height: 100%;
    background-color: #fff;
    border: 1px solid black;

    img {
        width: 210px;
        height: 200px;
        padding: 20px;
    }

    button {
        cursor: pointer;
    }
`;