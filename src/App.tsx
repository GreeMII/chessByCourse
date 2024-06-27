import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import BoardComponent from "./components/BoardComponent";
import './App.css'
import {Board} from "./models/Board";

function App() {
    const[board,setBoard]=useState(new Board());

    useEffect( () => {
        restartBoard()
    }, []);

    function restartBoard() {
        const board = new Board();
        board.initCells()
        board.addFigures()
        setBoard(board)
    }
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
