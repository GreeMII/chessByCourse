import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player|null;
    changePlayer: () => void;
}

const BoardComponent:FC<BoardProps> = ({board,setBoard, currentPlayer, changePlayer}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell:Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell);
            changePlayer();
            setSelectedCell(null);
            updateBoard();
        }else{
            if(cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
        }
    }

    useEffect(() => {
        highLight()
    }, [selectedCell])

    function highLight(){
        board.highLight(selectedCell);
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return(
        <div className="board">
            {board.cells.map((row,index) =>
                <React.Fragment key={index}>
                    {row.map(cell  => <CellComponent
                        click={click}
                        cell={cell}
                        key = {cell.id}
                        selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                    />)}
                </React.Fragment>
            )}
        </div>
    )
}
export default BoardComponent;