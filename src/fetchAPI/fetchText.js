import { resources } from "../Resource.js";

export const fetchText = async function fetchTextMessage() {
  await fetch("../../public/text.txt")
    .then((response) => response.text())
    .then((text) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(text, 10, 50);

      const dataUrl = canvas.toDataURL("image/png");
      console.log("dataUrl: ", dataUrl);
      return dataUrl;

      // const img = new Image();
      // img.src = dataUrl;
      // resources.toLoad.text is the key to the image
      // console.log("ResourcesToLoadText: ", resources.toLoad.text);
      // return (resources.toLoad.text = img);
    });
};
