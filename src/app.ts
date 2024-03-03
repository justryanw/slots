import * as PIXI from 'pixi.js';
import World from './world';

declare global {
    var __PIXI_APP__: PIXI.Application<HTMLCanvasElement>
}

export default class App extends PIXI.Application<HTMLCanvasElement> {
    world: World;

    constructor() {
        super({
            background: '#1099bb',
            resizeTo: window,
        });
        document.body.appendChild(this.view);

        globalThis.__PIXI_APP__ = this;

        this.world = new World(this.stage);

        this.world.resize(this.screen);
        this.renderer.on('resize', (width, height) => {
            this.world.resize({ width, height });
        });

        this.ticker.add((delta) => {
            this.world.bunny.update(delta);
        });
    }
}
