import { Container } from "pixi.js";
import Reel from "./Reel";
import { COLUMNS, REELS_HEIGHT, REELS_PADDING, REELS_WIDTH, SYMBOL_SPACING } from "./config";
import { arrayFrom, drawSquare } from "../../utils";

export default class ReelGroup extends Container {
	protected reels: Reel[];

	constructor() {
		super();

		this.reels = arrayFrom(COLUMNS, (i) => {
			const reel = new Reel()
			reel.x = i * SYMBOL_SPACING + REELS_PADDING;
			return reel;
		});

		this.addChild(...this.reels);

		drawSquare(this, REELS_WIDTH, REELS_HEIGHT)
	}
}
