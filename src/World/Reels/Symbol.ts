import { Container, Text } from "pixi.js";
import { SYMBOL_SIZE, SymbolValue } from "./config";
import { drawSquare, randomIntInclusive } from "../../utils";

const SYMBOLS = Object.values(SymbolValue);
const MIN = SYMBOLS.indexOf(SymbolValue.L1);
const MAX = SYMBOLS.indexOf(SymbolValue.H3);

export default class Symbol extends Container {
	protected text: Text;

	constructor(
		protected symbolValue: SymbolValue
	) {
		super();
		this.label = `Symbol-${symbolValue}`;

		this.text = new Text({
			text: symbolValue,
			style: {
				fontSize: 100
			}
		});

		this.text.anchor.set(0.5);
		this.text.position.set(SYMBOL_SIZE / 2);

		drawSquare(this, SYMBOL_SIZE, SYMBOL_SIZE);

		this.addChild(this.text);
	}

	static random(): Symbol {
		return new this(SYMBOLS[randomIntInclusive(MIN, MAX)]);
	}
}
