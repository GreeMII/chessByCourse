import {Figure, FigureNames} from "./Figure";

import blacklogo from "../../img/black-pawn.png"
import whitelogo from "../../img/white-pawn.png"
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Pawn extends Figure{

    firstStep = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.PAWN;
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.firstStep = false;
    }

    canMove(target: Cell): boolean {
        if(!(super.canMove(target))){
            return false;
        }
        const cordColor = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstCordColor = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if (((target.y === this.cell.y + cordColor) || (this.firstStep && (target.y === this.cell.y + firstCordColor))) && target.x === this.cell.x && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }
        if((target.y === this.cell.y + cordColor) && (target.x === this.cell.x +1 || target.x === this.cell.x - 1) && this.cell.isEnemy(target)) {
            return true;
        }

        return false
    }
}