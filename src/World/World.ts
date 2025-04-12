import { Container, Graphics } from 'pixi.js';
import ReelGroup from './Reels/ReelGroup';
import { REELS_HEIGHT, REELS_WIDTH } from './Reels/config';

export default class World extends Container {
	static readonly Aspect = 1.5;
	static readonly Height = 1000;

	protected reels: ReelGroup;

	constructor(parent: Container) {
		super();
		parent.addChild(this);

		this.reels = new ReelGroup();
		this.addChild(this.reels);

		this.reels.x = -REELS_WIDTH / 2;
		this.reels.y = -REELS_HEIGHT / 2;

		this.debug();
	}

	debug() {
		const width = World.Height * World.Aspect;
		const height = World.Height;

		const graphics = new Graphics()
			.rect(-width / 2, -height / 2, width, height)
			.fill({ color: 0xDE3249, alpha: 0.2 })
			.stroke({ width: 2, color: 0xDE3249, alignment: 1 });

		this.addChild(graphics);
	}
}
