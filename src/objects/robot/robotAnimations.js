const makeStandingFrames = (rootFrame = 0) => {
  return {
    duration: 4000,
    frames: [
      {
        time: 0,
        frame: rootFrame + 1,
      },
      {
        time: 1000,
        frame: rootFrame,
      },
      {
        time: 2000,
        frame: rootFrame + 1,
      },
      {
        time: 3000,
        frame: rootFrame + 2,
      },
    ],
  };
};

export const STAND_DOWN = makeStandingFrames(1);
