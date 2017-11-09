if ("production" !== process.env.NODE_ENV) {
  var html = require("../public/index.html");
}

document.getElementById("app").innerHTML = "Este es nuestro proyecto";
