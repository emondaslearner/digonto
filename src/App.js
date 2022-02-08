import React, { Component } from 'react';
import Home from './Component/Home/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Item from './Component/Items/Item'
import AddItem from './Component/AddItem/AddItem';
import Store from './Component/Store/Store';
import AddToStore from './Component/AddToStore/AddToStore';

class App extends Component {
  render() {
    return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Item />} />
        <Route path='/addItem' element={<AddItem/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/addToStore' element={<AddToStore/>} />
      </Routes>
    );
  }
}

export default App;
