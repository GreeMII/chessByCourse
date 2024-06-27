import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blacklogo from "../../img/black-bishop.png"
import whitelogo from "../../img/white-bishop.png"


export class Bishop extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell): boolean {
        return super.canMove(target);
    }
}