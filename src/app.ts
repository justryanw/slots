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

        this.resizeView(this.screen);
        this.renderer.on('resize', (width, height) => {
            this.resizeView({ width, height });
        });

        this.ticker.add((delta) => {
            // this.world.bunny.play();
            console.log(this.world.bunny.width);
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
