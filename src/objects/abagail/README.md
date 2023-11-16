# Generative Agents

These are notes to guide the creation of new Generative Agents for the game.

## Camera (exclude the emit event)

The only camera position should be connected to the Hero. In /Hero/Hero.js you will find `this.tryEmitPosition()` in the constructor. Below this you will find the method `tryEmitPosition()`. For a new agent you will NOT include this part of the code as the method calls the /Camera class to ***emit*** the position of the Hero within a specified frame of the game.

