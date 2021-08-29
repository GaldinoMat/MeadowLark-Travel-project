const express = require("express");
const expressHandlebars = require("express-handlebars");
const handlers = require("./libs/handlers");

const app = express();

const port = process.env.port || 3000;

// Configures handlebars enviroment
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

// Set middleware
app.use(express.static(__dirname + "/public"));

// Home page route
app.get("/", handlers.home);

// About page route
app.get("/about", handlers.about);

// Page 404
app.use(handlers.notFound);

// Page 500
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `Express server started on http://localhost:${port}; Press CTRL + C to terminate`
    );
  });
} else {
  module.exports = app;
}
