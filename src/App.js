import './styles/App.scss';
import ShoppingList from "./components/pages/ShoppingList"
import Tasks from "./components/pages/Tasks"
import Events from "./components/pages/Events"
import NavBar from "./components/molecules/NavBar"
import React, {createContext} from "react";
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import socketIOClient from "socket.io-client";
const socket = socketIOClient(process.env.REACT_APP_BASE_URL);

export const socketContext = createContext(socket);

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <socketContext.Provider value={socket}>
        <div className="App">
          <Routes>
            <Route path={"/shop"} element={<ShoppingList/>}/>
            <Route path={"/"} element={<ShoppingList/>}/>
            <Route path={"/tasks"} element={<Tasks/>}/>
            <Route path={"/events"} element={<Events/>}/>
          </Routes>
        </div>
      </socketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
