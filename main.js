import './style.css'
import {resources} from "./src/Resource.js";
import {Sprite} from "./src/Sprite.js";
import {Vector2} from "./src/Vector2.js";
import {GameLoop} from "./src/GameLoop.js";
import {Input} from "./src/Input.js";
import {gridCells} from "./src/helpers/grid.js";
import {GameObject} from "./src/GameObject.js";
import {Hero} from "./src/objects/Hero/Hero.js";
import { Robot } from './src/objects/robot/Robot.js';
import {Camera} from "./src/Camera.js";
import {Rod} from "./src/objects/Rod/Rod.js";
import {Inventory} from "./src/objects/Inventory/Inventory.js";
import { Talking } from './src/objects/Talking/Talking.js';

// Grabbing the canvas to draw to
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

// Establish the root scene
const mainScene = new GameObject({
  position: new Vector2(0,0)
})

// Build up the scene by adding a sky, ground, and hero
const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180)
})

const groundSprite = new Sprite({
  resource: resources.images.ground,
  // frameSize: new Vector2(320, 180) // original
  // frameSize: new Vector2(320, 340), // the GreenieVille Map
  frameSize: new Vector2(1280,660)
})
mainScene.addChild(groundSprite);

// Hero initial starting position
const hero = new Hero(gridCells(30), gridCells(20))
mainScene.addChild(hero);

const robot = new Robot(gridCells(62), gridCells(18))
mainScene.addChild(robot);

const camera = new Camera()
mainScene.addChild(camera);

const rod = new Rod(gridCells(61), gridCells(17))
mainScene.addChild(rod);

// Meant to be a new message bubble
const talking = new Talking(gridCells(65), gridCells(17))
mainScene.addChild(talking);

const inventory = new Inventory();


// Add an Input class to the main scene
mainScene.input = new Input();


// Establish update and draw loops
const update = (delta) => {
  mainScene.stepEntry(delta, mainScene)
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
  inventory.draw(ctx, 0, 0)

}

// Start the game!
const gameLoop = new GameLoop(update, draw);
gameLoop.start();
