const makeStandingFrames = (rootFrame = 0) => {
  return {
    duration: 400,
    frames: [
      {
        time: 0,
        frame: rootFrame,
      }
    ]
  }
}
const makeWalkingFrames = (rootFrame=0) => {
  return {
    duration: 400,
    frames: [
      {
        time: 0,
        frame: rootFrame+1
      },
      {
        time: 100,
        frame: rootFrame
      },
      {
        time: 200,
        frame: rootFrame+1
      },
      {
        time: 300,
        frame: rootFrame+2
      }
    ]
  }
}

// Frames work for sprite sheets that are 3 columns wide
// Count beginning at top left the zero position
// NOTE: from left to right (top to bottom) you will need to
// deduct 1 from the frame number start position
export const STAND_DOWN = makeStandingFrames(1);
export const STAND_RIGHT = makeStandingFrames(7);
export const STAND_UP = makeStandingFrames(11);
export const STAND_LEFT = makeStandingFrames(4);

export const WALK_DOWN = makeWalkingFrames(0);
export const WALK_RIGHT = makeWalkingFrames(6);
export const WALK_UP = makeWalkingFrames(9);
export const WALK_LEFT = makeWalkingFrames(3);

export const PICK_UP_DOWN = {
  duration: 400,
  frames: [
    {
      time: 0,
      frame: 12
    }
  ]
}

