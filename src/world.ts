import { Container, Graphics, Point, Texture } from 'pixi.js';
import UISprite from './ui/sprite';
import UIContainer from './ui/container';
import withTween from './mixins/tween';

const TweenableSprite = withTween(UISprite)
class Bunny extends TweenableSprite {}

export default class World extends Container {
    static readonly Aspect = 1.5;
    static readonly Height = 100;

    bunny: Bunny;

    constructor(parent: Container) {
        super();
        parent.addChild(this);

        this.debug();

        const leftHalf = new UIContainer();
        this.addChild(leftHalf)
        leftHalf.setBounds(new Point(0.2, 0.2), new Point(0.8, 0.8));

        this.bunny = new Bunny(Texture.from("bunny.png"));
        leftHalf.addChild(this.bunny);

        // this.bunny.bunnymode();
        this.bunny.setBounds(new Point(0.2, 0.2), new Point(0.8, 0.8));

        this.bunny.play();
        this.bunny.debug();

        // this.bunny = new Bunny(test);
    }

    debug() {
        const width = World.Height * World.Aspect;
        const height = World.Height;

        const graphics = new Graphics();
        graphics.beginFill(0xDE3249, 0.3);
        graphics.lineStyle(2, 0xDE3249, 1, 0);
        graphics.drawRect(-width / 2, -height / 2, width, height);
        graphics.endFill();
        this.addChild(graphics);
    }
}