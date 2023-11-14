# JavaScript and HTML Canvas RPG Game

YouTube game dev series illustrating the basic concept of sprite animation graphics and game development using JavaScript and HTML Canvas. This application allows you the chance to experiment with a game engine code base and give you the freedom to experiment without consequence. Understanding how to add sprites to the game or change the background environment will be necessary to complete the project goals we have been given.

- [Source: Drew Conley YouTube Video Series](https://youtu.be/HmxNrlPx8iY?si=P5gg2cC5Q2MKIi0N)
- [Starter Code Kit](https://drive.google.com/file/d/1BLEVGyI5AmMtgz9SG2bI0J3zYi3QjyFh/view?pli=1)
- [Ending Code Kit](https://drive.google.com/file/d/1Lqkuc92ydqC6WIYAgq4YTU4K27w-1JIv/view)

## Set Up

```bash
git clone
```

```bash
cd <directory> && npm run install
```

```bash
npm run dev
```

## Definitions

- [Animations](./src/Animations.js) : handles the current frame, play and step patterns for each direction animation

- [Assets (png sprite directory)](./public/sprites/) : all png images used in this application are served from the /public/sprite directory

- [Camera (grid movement)](./src/Camera.js) : handles the movement of the ground grid (camera view) as the character moves

- [Events](./src/Events.js) :

- [FrameIndexPattern (animations)](./src/FrameIndexPattern.js) : handles an animation configuration and steps through the frames given the configuration specifications.

- [GameLoop TimeFrame](./src/GameLoop.js) : handles the time frame for each loop iteration, currently at 60 fps. handles the render, start, or stopping the game.

- [GameObject](./src/GameObject.js) : class that contains each game level (scenes)

- [Grid Cells & Collisions](./src/helpers/grid.js) : this helper file handles the grid cells for the game and collisions in the grid system

- [HeroAnimations](./src/objects/Hero/heroAnimations.js) : this is the configuration for the hero animation showing which frames should be shown for a given time period/duration. This configuration is used by FrameIndexPattern which handles render of the specified configuration(s).

- [Input (arrow movement)](./src/Input.js) : handles keydown and keyup event listener events to move the character

- [Level1 (first map of grid collisions)](./src/levels/level1.js) : static Set() of grid areas which designate where collisions occur

- [MAIN Entry to Game](./main.js) : instaniates each class object and starts the game.

- [Move Towards (snap to position)](./src/helpers/moveTowards.js) : using the distance formula the moveTowards function handles the current hero position and the distance to the target or goal position given some speed

- [Resource image loader](./src/Resource.js) : loads the .png image resources and for each file location given, maps those images and returns a new resource object

- [Sprite build frame & draw frame](./src/Sprite.js) : this is the Sprite class which contains the methods to buildFrameMap() and drawImage()

- [Vector2 (x, y)](./src/Vector2.js) : handles the ( this.x, this.y ) location memory. serving as a location Node and contains the duplicate() method for this.x and this.y hero location
