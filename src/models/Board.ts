import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Quenn} from "./figures/Quenn";
import {Pawn} from "./figures/Pawn";
import {Bishop} from "./figures/Bishop";
import {Horse} from "./figures/Horse";
import {Rook} from "./figures/Rook";
import {King} from "./figures/King";

export class Board {
    cells: Cell[][] = []
    public initCells() {
        for (let i = 0; i < 8;i++){
            const row:Cell[] = []
            for (let j = 0; j < 8; j++) {
                if((i+j) % 2 !== 0){
                    row.push(new Cell(this,j,i,Colors.BLACK, null)) // Черная
                }else{
                    row.push(new Cell(this,j,i,Colors.WHITE, null)) // Белая
                }
            }
            this.cells.push(row)
        }
    }
    //определение координаты и добавление начального положения фигур:
    public getCell(x:number, y:number){
        return this.cells[y][x]
    }

    public addFigures() {
        this.addPawns()
        this.addQueen()
        this.addBishop()
        this.addHorse()
        this.addRook()
        this.addKing()
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i,1))
            new Pawn(Colors.WHITE, this.getCell(i,6))
        }
    }
    private addQueen() {
        new Quenn(Colors.BLACK, this.getCell(3,0))
        new Quenn(Colors.WHITE, this.getCell(3,7))
    }
    private addBishop() {
        new Bishop(Colors.BLACK, this.getCell(2,0))
        new Bishop(Colors.BLACK, this.getCell(5,0))
        new Bishop(Colors.WHITE, this.getCell(2,7))
        new Bishop(Colors.WHITE, this.getCell(5,7))
    }
    private addHorse() {
        new Horse(Colors.BLACK, this.getCell(1,0))
        new Horse(Colors.BLACK, this.getCell(6,0))
        new Horse(Colors.WHITE, this.getCell(1,7))
        new Horse(Colors.WHITE, this.getCell(6,7))
    }
    private addRook() {
        new Rook(Colors.BLACK, this.getCell(0,0))
        new Rook(Colors.BLACK, this.getCell(7,0))
        new Rook(Colors.WHITE, this.getCell(0,7))
        new Rook(Colors.WHITE, this.getCell(7,7))
    }
    private addKing(){
        new King(Colors.BLACK, this.getCell(4,0))
        new King(Colors.WHITE, this.getCell(4,7))
    }

    //функции подсветки доступных ходов

    public highLight(selectedCell: Cell|null){
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }
    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }
}

