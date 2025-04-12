import * as PIXI from 'pixi.js';
import Bunny from './bunny';

export default class World extends PIXI.Container {
	static readonly Aspect = 1.5;
	static readonly Height = 100;

	bunny: Bunny;

	constructor(parent: PIXI.Container) {
		super();
		parent.addChild(this);

		this.debug();

		this.bunny = new Bunny(this);
	}

	debug() {
		const width = World.Height * World.Aspect;
		const height = World.Height;

		const graphics = new PIXI.Graphics()
			.rect(-width / 2, -height / 2, width, height)
			.fill(0xDE3249)
			.stroke({ width: 2, color: 0xDE3249, alignment: 1 });

		// this.addChild(graphics);
	}
}
