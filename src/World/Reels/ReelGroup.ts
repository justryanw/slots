import { Container } from "pixi.js";
import Reel from "./Reel";
import { COLUMNS, SYMBOL_SPACING } from "./config";
import { ArrayFrom } from "../../utils";

export default class ReelGroup extends Container {
	protected reels: Reel[];

	constructor() {
		super();

		this.reels = ArrayFrom(COLUMNS, (i) => {
			const reel = new Reel()
			reel.x = i * SYMBOL_SPACING;
			return reel;
		});

		this.addChild(...this.reels);
	}
}
