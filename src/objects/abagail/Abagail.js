import { GameObject } from "../../GameObject.js";
import { Vector2 } from "../../Vector2.js";
import { Sprite } from "../../Sprite.js";
import { resources } from "../../Resource.js";
import { STAND_DOWN } from "./abagailAnimations.js";
import { Animations } from "../../Animations.js";
import { FrameIndexPattern } from "../../FrameIndexPattern.js";

export class Abigail extends GameObject {
  constructor(x, y) {
    super({
      position: new Vector2(x, y),
    });

    this.body = new Sprite({
      resource: resources.images.abigail,
      frameSize: new Vector2(32, 32),
      hFrames: 3,
      vFrames: 8,
      frame: 1,
      position: new Vector2(-8, -20),
      animations: new Animations({
        standDown: new FrameIndexPattern(STAND_DOWN),
      }),
    });
    this.addChild(this.body);
  }
}
