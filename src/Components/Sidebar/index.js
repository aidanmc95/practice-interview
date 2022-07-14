import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export const Sidebar = (props) => {
    const contentRef = useRef(null)

    const renderSections = () => {
        return props.data.menus.map((section, id) => {
            return <SectionDiv className={id === props.section ? 'selected' : ''} onClick={() => props.updateSection(id)}>{section.name}</SectionDiv>
        })
    }

    return (
        <SideBarContainer ref={contentRef} >
            <div style={{marginTop: 20}}>
                {renderSections()}
            </div>
        </SideBarContainer>
    );
};

const SideBarContainer = styled.div`
    width: 270px;
    height: 100%;
    background-color: #fff;
    overflow: auto;
    // padding: 19px 0 0 16px;
    // margin: 0 20px 0 0;
    border-right: 1px solid rgba(204, 204, 204, 0.8);
`;

const SectionDiv = styled.div`
    width: 100%;
    padding: 5px 0;
    cursor: pointer;
    
    &.selected {
        background: #F3F2F1;
    }

    &:hover {
        background: #F3F2F1;
    }
`;