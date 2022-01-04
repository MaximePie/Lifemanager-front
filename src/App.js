import './App.css';
import ShoppingList from "./components/pages/ShoppingList"
import Tasks from "./components/pages/Tasks"
import Navbar from "./components/molecules/Navbar"
import React, {createContext} from "react";
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import socketIOClient from "socket.io-client";
const socket = socketIOClient(process.env.REACT_APP_BASE_URL);

export const socketContext = createContext(socket);

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <socketContext.Provider value={socket}>
        <div className="App">
          <Routes>
            <Route path={"/shop"} element={<ShoppingList/>}/>
            <Route path={"/"} element={<ShoppingList/>}/>
            <Route path={"/tasks"} element={<Tasks/>}/>
          </Routes>
        </div>
      </socketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
