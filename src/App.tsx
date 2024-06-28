import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import './App.css'
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import Timer from "./components/Timer";

function App() {
    const[board,setBoard]=useState(new Board());
    const[whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const[blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const[currentPlayer, setCurrentPlayer] = useState<Player|null>(null);

    useEffect( () => {
        restartBoard()
        setCurrentPlayer(whitePlayer)
    }, []);

    function restartBoard() {
        const board = new Board();
        board.initCells()
        board.addFigures()
        setBoard(board)
    }

    function changePlayer(){
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }

  return (
    <div className="app">
        <Timer currentPlayer={currentPlayer} restart={restartBoard  }/>
      <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          changePlayer={changePlayer}
      />
    </div>
  );
}

export default App;
