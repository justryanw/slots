import { Container, Point } from "pixi.js";
import { Constructor } from "./constructor";
import { UIBase } from "./uibase";

export default function withTween<TBase extends Constructor<Container & UIBase>>(Base: TBase) {
  return class extends Base {
    start = new Point(0, 0);
    end = new Point(1, 1);

    play() {
      this.x += this.end.x
      this.y += this.end.y;
      // do an actual tween
    }
  }
}
