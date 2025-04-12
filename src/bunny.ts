import { Container, Sprite, Texture } from "pixi.js";
import { drawDebug } from "./utils";

export default class Bunny extends Sprite {
	constructor(parent: Container) {
		super(Texture.from('bunny'))

		parent.addChild(this);
		this.anchor.set(0.5);

		drawDebug(this);
	}

	update(delta: number) {
		this.rotation += 0.1 * delta;
	}
}
