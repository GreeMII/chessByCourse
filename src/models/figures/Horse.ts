import {Figure, FigureNames} from "./Figure";

import blacklogo from "../../img/black-horse.png"
import whitelogo from "../../img/white-horse.png"
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Horse extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.HORSE;
    }

    canMove(target: Cell): boolean {
        if(!(super.canMove(target))){
            return false;
        }
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        if((dx === 1 && dy === 2) || (dx === 2 && dy === 1)){
            return true;
        }
        return false
    }
}