import { Vector2 } from "./Vector2.js";
import { GameObject } from "./GameObject.js";

export class Sprite extends GameObject {
  constructor({
    resource, // image we want to draw
    frameSize, // size of the crop of the image
    hFrames, // how the sprite arranged horizontally
    vFrames, // how the sprite arranged vertically
    frame, // which frame we want to show
    scale, // how large to draw this image
    position, // where to draw it (top left corner)
    animations,
    text,
    font,
    color,
  }) {
    super({
      name,
    });
    this.resource = resource;
    this.frameSize = frameSize ?? new Vector2(16, 16); // using 16 as the sprite sheet is 16 x 16. change value according to the sprite sheet frame size used
    this.hFrames = hFrames ?? 1;
    this.vFrames = vFrames ?? 1;
    this.frame = frame ?? 0;
    this.frameMap = new Map();
    this.scale = scale ?? 1;
    this.position = position ?? new Vector2(0, 0);
    this.animations = animations ?? null; // animations object can house many animation frames, such as Hero animation config
    this.text = text ?? null;
    this.font = font ?? null;
    this.color = color ?? null;
    this.buildFrameMap(); // call to kick off the build Map()
  }

  /**
   * Generate frame map, Iterate through the sprite
   * sheet as a Grid(x, y)
   * AND, the jumps we make through the image need
   * to match the 'this.frameSize'
   */
  buildFrameMap() {
    let frameCount = 0;
    // iterate staring with y-axis and for each we read across the horizontal sprite sheet row
    for (let v = 0; v < this.vFrames; ++v) {
      for (let h = 0; h < this.hFrames; ++h) {
        this.frameMap.set(
          frameCount,
          new Vector2(this.frameSize.x * h, this.frameSize.y * v) // x & y must be multiplied by the size of the Frame which could be 8, 16, etc ...
        );
        ++frameCount;
      }
    }
  }

  step(delta) {
    if (!this.animations) {
      return;
    }
    this.animations.step(delta);
    this.frame = this.animations.frame;
  }

  drawImage(ctx, x, y) {
    if (!this.resource.isLoaded) {
      return;
    }

    // Find the correct sprite sheet frame to use
    let frameCoordX = 0;
    let frameCoordY = 0;
    const frame = this.frameMap.get(this.frame);
    if (frame) {
      frameCoordX = frame.x;
      frameCoordY = frame.y;
    }

    const frameSizeX = this.frameSize.x;
    const frameSizeY = this.frameSize.y;

    ctx.drawImage(
      this.resource.image,
      frameCoordX,
      frameCoordY, // Top Y corner of frame
      frameSizeX, //How much to crop from the sprite sheet (X)
      frameSizeY, //How much to crop from the sprite sheet (Y)
      x, //Where to place this on canvas tag X (0)
      y, //Where to place this on canvas tag Y (0)
      frameSizeX * this.scale, //How large to scale it (X)
      frameSizeY * this.scale //How large to scale it (Y)
    );
  }
}
