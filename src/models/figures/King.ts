import {Figure, FigureNames} from "./Figure";

import blacklogo from "../../img/black-king.png"
import whitelogo from "../../img/white-king.png"
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class King extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        return super.canMove(target);
    }
}