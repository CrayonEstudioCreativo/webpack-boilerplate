var css = require("./scss/styles.scss");

document.getElementById("app").innerHTML = "Este es nuestro proyecto";

if ("production" !== process.env.NODE_ENV) {
  var html = require("./index.html");
}
