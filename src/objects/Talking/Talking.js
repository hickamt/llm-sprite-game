import { GameObject } from "../../GameObject.js";
import { Text } from "../../Text.js";
import { Vector2 } from "../../Vector2.js";
import { Sprite } from "../../Sprite.js";
import { resources } from "../../Resource.js";
import { events } from "../../Events.js";
import { fetchText } from "../../fetchAPI/fetchText.js";

// Creates a new message bubble used for
// talking to the robot
export class Talking extends GameObject {
  constructor(x, y) {
    super({
      name: "Message_Bubble",
      position: new Vector2(x, y),
    });

    // const message = new Text({
    //   font: '16px Arial',
    //   color: 'black', 
    //   resource: "",
    //   frameSize: new Vector2(32, 32),
    //   position: new Vector2(-5, -9),
    // })
    // const fetchResourceText = async () => {
    //   message.resource = await fetchText();
    //   console.log("message.resource: ", message.resource)
    //   this.addChild(message);
    // }
    // fetchResourceText();

    const sprite = new Sprite({
      resource: resources.images.bubble,
      frameSize: new Vector2(32, 32),
      hFrames: 0,
      vFrames: 0,
    });
    this.addChild(sprite);
  }

  // Would need to create an event that when the Hero
  // is in proximity of the robot, the text bubble
  // will appear
  ready() {
    events.on("HERO_POSITION", this, (pos) => {
      // detect overlap...
      const roundedHeroX = Math.round(pos.x);
      const roundedHeroY = Math.round(pos.y);
      if (
        roundedHeroX === this.position.x &&
        roundedHeroY === this.position.y
      ) {
        this.onCollideWithHero();
      }
    });
  }

  onCollideWithHero() {
    // Remove this instance from the scene
    this.destroy();

    // Alert other things that we picked up a rod
    events.emit("HERO_TALKS_TO_ROBOT", {
      type: "Message_Bubble",
      image: resources.images.bubble,
      position: this.position,
    });
  }
}
