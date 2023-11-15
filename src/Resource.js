import { fetchText } from "./fetchAPI/fetchText";

class Resources {
  constructor() {
    // Everything we plan to download
    this.toLoad = {
      text: "",
      bubble: "/sprites/speech-bubble.png",
      sky: "/sprites/sky.png",
      // ground: "/sprites/the_ville collision.png",
      // ground: "/sprites/GreenieVille.png",
      // ground: "/sprites/GreyStoneCity.png",
      ground: "/sprites/GreyStoneCityCropped.png",
      hero: "/sprites/hero-sheet.png",
      shadow: "/sprites/shadow.png",
      rod: "/sprites/rod.png",
      botIdle1:
        "https://forums.rpgmakerweb.com/data/attachments/173/173645-e7d95c9ce307d059d9ea546909f95f92.jpg",
    };

    // A bucket to keep all of our images
    this.images = {};

    // Load each image
    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };
      img.onload = () => {
        this.images[key].isLoaded = true;
      };
    });
  }
}

// Create one instance for the whole app to use
export const resources = new Resources();
