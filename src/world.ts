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

    resize({ width, height }: { width: number, height: number }) {
        const aspect = width / height;

        this.x = width / 2;
        this.y = height / 2;

        this.scale.x = this.scale.y = (aspect > World.Aspect ? height : width / World.Aspect) / World.Height;
    }

    debug() {
        const width = World.Height * World.Aspect;
        const height = World.Height;

        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xDE3249, 0.3);
        graphics.lineStyle(2, 0xDE3249, 1, 0);
        graphics.drawRect(-width / 2, -height / 2, width, height);
        graphics.endFill();
        this.addChild(graphics);
    }
}