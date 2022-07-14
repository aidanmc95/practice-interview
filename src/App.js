import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';
import './fonts.css';
import './App.css';

import data from './Data/data.json'

import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { ItemCards } from './Components/ItemCards'
import { Modal } from './Components/Modal'

function App() {
  const [currentData, setCurrentData] = useState({
    cart: [],
    data,
    section: 0
  })
  const [isOpenModal, setIsOpenModal] = useState(false)

  const updateSection = (value) => {
    let new_currentData = {...currentData}
    new_currentData.section = value

    document.getElementById(currentData.data.menus[value].id).scrollIntoView({
      behavior: 'smooth'
    })

    setCurrentData(new_currentData)
  }

  const updateCart = (item_full, count, add) => {
    let new_currentData = {...currentData}
    
    if(new_currentData.cart.filter(e => e.id === item_full.id).length > 0) {
      new_currentData.cart = new_currentData.cart.map(item => {
        if(item.id === item_full.id) {
          item.count += ((add ? 1 : -1) * count)
        }
        return item
      }).filter(item => item.count > 0)
    } else {
      new_currentData.cart.push({
        ...item_full,
        count: count
      })
    }

    setCurrentData(new_currentData)
  }

  const handleUserKeyPress = useCallback(event => {
    if(event.key === "Escape") {
      setIsOpenModal(false)
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress)
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress)
    };
  }, []);

  return (
    <div className="App">
      <Navbar data={currentData} open={() => setIsOpenModal(true)} />
      <Content>
        <Sidebar data={currentData.data} section={currentData.section} updateSection={updateSection} />
        <ItemCards items={currentData.data} updateCart={updateCart} />
      </Content>
      {isOpenModal && <Modal close={() => setIsOpenModal(false)} cart={currentData.cart} updateCart={updateCart} />}
    </div>
  );
}

const Content = styled.div`
  user-select: none;
  overflow-x: hidden;
  display: flex;
  justify-content: stretch;
  //height: calc(100vh - 40px - 91px);
  height: calc(100% - 40px);
  top: 40px;
  position: relative;
  gap: 20px;
`;

export default App;
