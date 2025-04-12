import { Container, Text, Ticker } from "pixi.js";
import Symbol from "./Symbol";
import { arrayFrom, mod } from "../../utils";
import { EXTRA_DISTANCE, SYMBOL_COUNT, SYMBOL_SPACING } from "./config";
import { APP } from "../../main";

export default class Reel extends Container {
	protected symbols: Symbol[];

	protected offset = 0;

	constructor() {
		super();

		this.symbols = arrayFrom(SYMBOL_COUNT, (i) => {
			const symbol = Symbol.random();
			symbol.y = i * SYMBOL_SPACING;

			const indexText = new Text({
				text: i,
				style: { fontSize: 40 }
			});
			symbol.addChild(indexText);

			return symbol;
		});

		this.addChild(...this.symbols);

		APP.ticker.add(this.update, this);
	}

	protected update(ticker: Ticker) {
		this.offset += ticker.deltaMS / 1000;
		this.updateSymbolY();
	}

	protected updateSymbolY() {
		this.symbols.forEach((symbol, i) => {
			symbol.y = (mod(i + this.offset + EXTRA_DISTANCE, SYMBOL_COUNT) - EXTRA_DISTANCE) * SYMBOL_SPACING;
		});
	}
}
