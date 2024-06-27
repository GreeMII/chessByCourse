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
        return super.canMove(target);
    }
}