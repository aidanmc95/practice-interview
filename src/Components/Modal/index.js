import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Modal = (props) => {

    const totalPrice = () => {
        let price = 0
        props.cart.forEach(element => {
            price += element.count * element.price / 100
        });

        return `$${Math.floor(price)}.${Math.floor(price * 10) % 10}${Math.floor(price * 100) % 10}`
    }

    const renderItems = () => {
        return props.cart.map(item => {
            return <CartElement className='flex'>
                <div className='flex' >
                    <img alt={item.name} src={item.picture_url} />
                    <div>
                        <div>{item.name}</div>
                        <p style={{fontSize: 14, fontWeight: 400}}>Price: {item.display_price}</p>
                    </div>
                </div>
                <div>
                    <div>Total orderded: {item.count}</div>
                    <div>Total Cost: {`$${Math.floor(item.count * item.price / 100)}.${Math.floor(item.count * item.price / 10) % 10}${Math.floor(item.count * item.price) % 10}`} </div>
                </div>
                <button onClick={() => props.updateCart(item, item.count, false)}>remove</button>
            </CartElement>
        })
    }
    
    return (
        <ModalDiv className='myModal'>
            <div class="modal-content">
                <div className='flex'>
                    <p>Cart</p>
                    <span class="close" onClick={() => props.close()}>&times;</span>
                </div>
                <div className='modal-items'>
                    {renderItems()}
                </div>
                <div className='flex'>
                    <p>Estimated Total: {totalPrice()}</p>
                    <button onClick={() => props.close()}>Submit Order</button>
                </div>
            </div>
        </ModalDiv>
    );
};

const ModalDiv = styled.div`
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 100; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

    .modal-content {
        background-color: #fefefe;
        margin: 60px auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 60%; /* Could be more or less, depending on screen size */
        max-height: calc(100% - 120px);
        overflow: auto;

        .flex {
            justify-content: space-between;

            p, span {
                margin: 0;
                line-height: 40px;
                text-align: left;
            }

            p {
                font-size: 28px;
                font-weight: 600;
            }
        }
    }

    .modal-items {
        padding: 0 0 60px 0;
    }
      
    /* The Close Button */
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
      
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

const CartElement = styled.div`
    padding: 5px 0;
    border-bottom: 1px solid rgba(204, 204, 204, 0.8);

    img {
        width: 200px;
    }
`;