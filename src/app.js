if ("production" !== process.env.NODE_ENV) {
  var html = require("./index.html");
}

document.getElementById("app").innerHTML = "Este es nuestro proyecto";
