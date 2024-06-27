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
        return super.canMove(target);
    }
}