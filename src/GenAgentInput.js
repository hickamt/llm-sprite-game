/**
 * Kye binding for user input
 */
export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"

export class GenAgentInput {
  constructor() {

    this.heldDirections = [];

    document.addEventListener("keydown", (e) => {
      // Also check for dedicated direction list
      if (e.code === "KeyK") {
        this.onArrowPressed(UP);
      }
      if (e.code === "KeyJ") {
        this.onArrowPressed(DOWN);
      }
      if (e.code === "KeyH") {
        this.onArrowPressed(LEFT);
      }
      if (e.code === "KeyL") {
        this.onArrowPressed(RIGHT);
      }
    })

    document.addEventListener("keyup", (e) => {
      // Also check for dedicated direction list
      if (e.code === "KeyK") {
        this.onArrowReleased(UP);
      }
      if (e.code === "KeyJ") {
        this.onArrowReleased(DOWN);
      }
      if (e.code === "KeyH") {
        this.onArrowReleased(LEFT);
      }
      if (e.code === "KeyL") {
        this.onArrowReleased(RIGHT);
      }
    })
  }

  get direction() {
    return this.heldDirections[0];
  }

  onArrowPressed(direction) {
    // Add this arrow to the queue if it's new
    if (this.heldDirections.indexOf(direction) === -1) {
      this.heldDirections.unshift(direction);
    }
  }

  onArrowReleased(direction) {
    const index = this.heldDirections.indexOf(direction);
    if (index === -1) {
      return;
    }
    // Remove this key from the list
    this.heldDirections.splice(index, 1);
  }
}