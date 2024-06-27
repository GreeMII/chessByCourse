import {Figure, FigureNames} from "./Figure";

import blacklogo from "../../img/black-pawn.png"
import whitelogo from "../../img/white-pawn.png"
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Pawn extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        return super.canMove(target);
    }
}