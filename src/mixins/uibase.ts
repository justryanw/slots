import { Container, Graphics, Point } from "pixi.js";
import { Constructor } from "./constructor";

export interface UIBase {
  min: Point;
  max: Point;
  setBounds(min: Point, max: Point): void;
}

export default function withUIBase<TBase extends Constructor<Container>>(Base: TBase) {
  return class extends Base implements UIBase {
    min = new Point(0, 0);
    max = new Point(1, 1);

    setBounds(min: Point, max: Point) {
      this.min = min;
      this.max = max;
      // set container scale
    }

    debug() {
      // console.log(this.width, this.height);
      const graphics = new Graphics();
      graphics.beginFill(0xDE3249, 0.3);
      graphics.lineStyle(2, 0xDE3249, 1, 0);
      graphics.drawRect(-this.width / 2, -this.height / 2, this.width, this.height);
      graphics.endFill();
      this.addChild(graphics);
    }
  }
}
