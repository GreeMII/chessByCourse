import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.available = false;
        this.board = board;
        this.id = Math.random();
    }

    changePosFig(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target)
            target.changePosFig(this.figure)
            this.figure = null;
        }
    }

    isEmpty() {
        return this.figure === null;
    }

    isEnemy(target:Cell) {
        if (target.figure){
            return this.figure?.color !== target.figure.color
        }
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x) {
            return false;
        }

        const minY = Math.min(this.y, target.y);
        const maxY = Math.max(this.y, target.y);

        for (let i = minY + 1; i < maxY; i++) {
            if (!(this.board.getCell(this.x, i)).isEmpty()) {
                return false
            }
        }
        return true;
    }

    isEmptyHorizontal(target: Cell): boolean {
        if (this.y !== target.y) {
            return false;
        }

        const minX = Math.min(this.x, target.x);
        const maxX = Math.max(this.x, target.x);

        for (let i = minX + 1; i < maxX; i++) {
            if (!(this.board.getCell(i, this.y)).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyDiagonal(target: Cell): boolean {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);

        if (absY !== absX) {
            return false
        }

        const dy = this.y < target.y ? 1 : -1;
        const dx = this.x < target.x ? 1 : -1;

        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
                return false
            }

        }
        return true

    }
}