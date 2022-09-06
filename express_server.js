// Express is our web framework for our server
const express = require("express"); 
const app = express();
const PORT = 8080;

// Requirements
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Data
function generateRandomString() {}

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com",
}

// Routes
app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n"); // < World is bold
});

app.get("/urls.json", (req, res) => { // ?why is 'json' there?
  res.json(urlDatabase); // < Shows urlDatabase obj on new site/page.
});

app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase} // < templateVars is now urls which = the urlDatabase obj
  res.render("urls_index", templateVars);
})

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.get("/urls/:id", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id]}; // < longUrl = objName[ID but with the req.params before it]
  res.render("urls_show", templateVars);
});

// Post
app.post("/urls", (req, res) => {
  console.log(req.body); // Log the POST request body to the console
  res.send("Ok"); // Respond with 'Ok' (we will replace this)
});


// Listening
app.listen(PORT, () => {
  console.log(`Server is listeing on port ${PORT}`);
});