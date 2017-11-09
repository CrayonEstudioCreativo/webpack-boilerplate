import "./scss/styles.scss";

const audio = new Audio("./audio/happylife.mp3");
audio.loop = true;
audio.play();

if ("production" !== process.env.NODE_ENV) {
  var html = require("./index.html");
}
