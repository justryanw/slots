import * as PIXI from 'pixi.js';

export default class Bunny extends PIXI.Sprite {
    constructor(parent: PIXI.Container) {
        super(PIXI.Texture.from('bunny.png'))

        parent.addChild(this);
        this.anchor.set(0.5);
    }

    update(delta: number) {
        this.rotation += 0.1 * delta;
    }
}