import { Container } from "pixi.js";
import Symbol from "./Symbol";
import { ArrayFrom } from "../../utils";
import { ROWS, SYMBOL_SPACING } from "./config";

export default class Reel extends Container {
	protected symbols: Symbol[];

	constructor() {
		super();

		this.symbols = ArrayFrom(ROWS, (i) => {
			const symbol = Symbol.random();
			symbol.y = i * SYMBOL_SPACING;
			return symbol;
		});

		this.addChild(...this.symbols);
	}
}
