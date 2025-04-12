import { Application } from 'pixi.js';
import World from './world';

export default class App extends Application {
	world!: World;

	async init() {
		await super.init({
			resizeTo: window
		});
		document.body.appendChild(this.canvas);

		this.world = new World(this.stage);

		this.resizeView(this.screen);
		this.renderer.on('resize', (width, height) => {
			this.resizeView({ width, height });
		});

		this.ticker.add((ticker) => {
			this.world?.bunny.update(ticker.deltaMS);
		});

	}

	resizeView({ width, height }: { width: number, height: number }) {
		const aspect = width / height;

		const scale = (aspect > World.Aspect ? height : width / World.Aspect) / World.Height
		this.stage.scale.set(scale);

		this.world.y = height / (2 * scale);
		this.world.x = width / (2 * scale);
	}
}

const app = new App();
await app.init();
