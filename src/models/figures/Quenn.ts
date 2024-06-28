import {Figure, FigureNames} from "./Figure";

import blacklogo from "../../img/black-queen.png"
import whitelogo from "../../img/white-queen.png"
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Quenn extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.QUENN;
    }

    canMove(target: Cell): boolean {
        if(!(super.canMove(target))){
            return false;
        }
        if(this.cell.isEmptyVertical(target)){
            return true;
        }
        if(this.cell.isEmptyHorizontal(target)){
            return true;
        }
        if(this.cell.isEmptyDiagonal(target)){
            return true;
        }
        return false
    }
}