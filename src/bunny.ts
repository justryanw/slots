import { Container, Sprite, Texture } from "pixi.js";

export default class Bunny extends Sprite {
	constructor(parent: Container) {
		super(Texture.from('bunny'))

		parent.addChild(this);
		this.anchor.set(0.5);
	}

	update(delta: number) {
		this.rotation += 0.1 * delta;
	}
}
