import "./style.css";
import { resources } from "./src/Resource.js";
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";
import { GameLoop } from "./src/GameLoop.js";
import { gridCells } from "./src/helpers/grid.js";
import { GameObject } from "./src/GameObject.js";
import { Camera } from "./src/Camera.js";
import { Rod } from "./src/objects/Rod/Rod.js";
import { Inventory } from "./src/objects/Inventory/Inventory.js";
import { Abigail } from "./src/objects/abagail/Abagail.js";
import { GenAgentInput } from "./src/GenAgentInput.js";
import { Hero } from "./src/objects/Hero/Hero.js";
import { Input } from "./src/Input.js";

// Grabbing the canvas to draw to
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

// Establish the root scene
const mainScene = new GameObject({
  position: new Vector2(0, 0),
});

// Build up the scene by adding a sky, ground, and hero
const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
});

const groundSprite = new Sprite({
  resource: resources.images.ground,
  // frameSize: new Vector2(320, 180) // original
  // frameSize: new Vector2(320, 340), // the GreenieVille Map
  frameSize: new Vector2(1280, 660),
});
mainScene.addChild(groundSprite);

// Hero initial starting position
const hero = new Hero(gridCells(30), gridCells(20));
mainScene.addChild(hero);

const abigail = new Abigail(gridCells(29), gridCells(20));
mainScene.addChild(abigail);

const camera = new Camera();
mainScene.addChild(camera);

const rod = new Rod(gridCells(61), gridCells(17));
mainScene.addChild(rod);

const inventory = new Inventory();

// Add an Input class to the main scene
mainScene.input = new Input();
mainScene.genAgentInput = new GenAgentInput();

// Establish update and draw loops
// delta is the time since the last frame
const update = (delta) => {
  hero.input = mainScene.heroInput;
  abigail.genAgentInput = mainScene.GenAgentInput;
  mainScene.stepEntry(delta, mainScene);
};
const draw = () => {
  // Clear anything stale
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the sky
  // skySprite.drawImage(ctx, 0, 0)

  // Save the current state (for camera offset)
  ctx.save();

  //Offset by camera position
  ctx.translate(camera.position.x, camera.position.y);

  // Draw objects in the mounted scene
  mainScene.draw(ctx, 0, 0);

  // Restore to original state
  ctx.restore();

  // Draw anything above the game world
  inventory.draw(ctx, 0, 0);
};

// Start the game!
const gameLoop = new GameLoop(update, draw);
gameLoop.start();
