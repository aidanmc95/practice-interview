import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Card } from './Card'

export const ItemCards = (props) => {
    const renderItems = (section) => {
        return section.items.map(item => {
            return <Card item={item} updateCart={props.updateCart} />
        })
    }

    const renderSections = () => {
        return props.items.menus.map(section => {
            return <SectionContainer id={section.id}>
                <h2>{section.name}</h2>
                <div className='grid'>
                    {renderItems(section)}
                </div>
            </SectionContainer>
        })
    }

    return (
        <ItemCardsContainer id='items'>
            {renderSections()}
        </ItemCardsContainer>
    );
};

const ItemCardsContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
`;

const SectionContainer = styled.div`
    h2 {
        margin: 20px 0 10px 0;
        letter-spacing: 0em;
        text-align: left;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
    }
`;