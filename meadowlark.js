const express = require("express");
const expressHandlebars = require("express-handlebars");

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
app.get("/", (req, res) => {
  res.render("home");
});

// About page Fortune Cookies
const fortunes = [
  "Conquer your fears or they will conquer you",
  "Rivers need springs",
  "Do not fear what you don't know",
  "You will have a pleasant surprise",
  "Whenever possible, keep it simple",
];
// About page route
app.get("/about", (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render("about", { fortune: randomFortune });
});

// Page 404
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// Page 500
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

app.listen(port, () => {
  console.log(
    `Express server started on http://localhost:${port}; Press CTRL + C to terminate`
  );
});
