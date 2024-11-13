import { Sprite, Texture } from "pixi.js";
import withUIBase from "../mixins/uibase";

export default class UISprite extends withUIBase(Sprite) {
    constructor(texture: Texture) {
        super(texture);
    }

    bunnymode(): void {
      this.texture = Texture.from("bunny.png");
    }
}