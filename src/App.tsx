import React, { createContext, ReactElement } from 'react';
import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import ShoppingList from './components/pages/ShoppingList';
import Tasks from './components/pages/Tasks';
import Events from './components/pages/Events';
import NavBar from './components/molecules/NavBar';

const socket = socketIOClient(process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:4001');

export const socketContext = createContext(socket);

function App(): ReactElement {
  return (
    <BrowserRouter>
      <NavBar />
      <socketContext.Provider value={socket}>
        <div className="App">
          <Routes>
            <Route path="/shop" element={<ShoppingList />} />
            <Route path="/" element={<ShoppingList />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </socketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
