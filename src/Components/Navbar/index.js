import React, { useState } from 'react';
import styled from 'styled-components';

export const Navbar = (props) => {
    const cartCount = () => {
        let count = 0

        props.data.cart.forEach(element => {
            count += element.count
        });

        return count
    }

    return (
        <Root>
            <div>Contosos</div>
            {/* <input placeholder='Search for item' /> */}
            <div className='flex'>
                <img alt='Cart' src={require('../../Icons/Cart.svg').default} onClick={() => props.open()} />
                <p>{cartCount()} items</p>
                <button onClick={() => props.open()}>Order</button>
            </div>
        </Root>
    );
};

const Root = styled.div`
    position: fixed;
    width: 100vw;
    height: 40px;
    //background-color: rgb(50, 49, 48);
    background-color: #0078d4;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.28);
    padding: 0 20px;
    top: 0;
    
    z-index: 99;

    button {
        font-size: 20px;
        background: none;
        cursor: pointer;
        border-radius: 2px;

        &:hover {
            background: rgb(16, 110, 190);
        }
    }

    .flex {
        p {
            margin: 0;
        }

        img {
            width: 28px;
            height: 28px;
            padding: 6px;
            cursor: pointer;

            &:hover {
                background: rgb(16, 110, 190);
            }
        }
    }
`;