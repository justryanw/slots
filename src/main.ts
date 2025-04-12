import { Application, Assets } from 'pixi.js';
import World from './world';
import { manifest } from './manifest';

const APP = new Application();
let WORLD: World;

function resizeView(width: number, height: number) {
	const aspect = width / height;

	const scale = (aspect > World.Aspect ? height : width / World.Aspect) / World.Height
	APP.stage.scale.set(scale);

	WORLD.x = width / (2 * scale);
	WORLD.y = height / (2 * scale);
}

async function init() {
	await APP.init({ resizeTo: window });
	document.body.appendChild(APP.canvas);

	await Assets.init({ manifest });
	await Assets.loadBundle("game");

	WORLD = new World(APP.stage);

	resizeView(APP.screen.width, APP.screen.height);
	APP.renderer.on('resize', resizeView);

	APP.ticker.add((ticker) => {
		WORLD.bunny.update(ticker.deltaTime);
	});
}

init();
