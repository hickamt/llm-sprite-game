import { GameObject } from "../../GameObject.js";
import { Vector2 } from "../../Vector2.js";
import { Sprite } from "../../Sprite.js";
import { resources } from "../../Resource.js";
import { STAND_DOWN } from "./robotAnimations.js";
import { Animations } from "../../Animations.js";
import { FrameIndexPattern } from "../../FrameIndexPattern.js";

export class Robot extends GameObject {
  constructor(x, y) {
    super({
      position: new Vector2(x, y),
    });

    this.body = new Sprite({
      resource: resources.images.botIdle1,
      frameSize: new Vector2(64, 64),
      hFrames: 2,
      vFrames: 7,
      frame: 1,
      position: new Vector2(-1, -2),
      animations: new Animations({
        standDown: new FrameIndexPattern(STAND_DOWN),
      }),
    });
    this.addChild(this.body);
  }
}
