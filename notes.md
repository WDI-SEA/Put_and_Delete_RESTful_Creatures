# Layouts and Controllers

## Set Up a new Express App
Before we do anything else, let's set up a new basic Express app called love-it-or-leave-it.
1. Create a new project
2. Initialize NPM
3. Install Dependencies
* express
* ejs
4. Set up Express
* index.js file
* require express
* create an instance of express
* tell the app which port to listen to
5. Set up EJS
* set view engine to ejs
* create a views folder

# EJS Layouts

EJS layouts is a node package that allows us to create a boilerplate (aka a layout) that we can inject content into based on which route is reached. Layouts normally include header and footer content that you want to display on every page (navbar, sitemap, logo, etc.).

## Install EJS Layouts
**Step 1: Install EJS layouts**

Install express-ejs-layouts via npm
npm i express-ejs-layouts

**Step 2: Set up EJS layouts**
Require the module and add it to the app.

**index.js**
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.listen(3000)
What is app.use()? This is an express function that indicates middleware. Middleware functions intercepts the request object when it comes in from the client, but before it hits any route. We'll see more examples of middleware later.

**Step 3: Create a Layout**
In the root of the *views* folder, add a layout called *layout.ejs*. It must be called *layout.ejs*, as mandated by *express-ejs-layouts*.

**layout.ejs**

<!DOCTYPE html>
<html>
<head>
  <title>Love It or Leave It</title>
</head>
<body>
  <%- body %>
</body>
</html>

This layout will be used by all pages, and the content will be filled in where the <%- body %> tag is placed. <%- body %> is a special tag used by express-ejs-layouts that cannot be renamed.

**Step 4: Use the Layout**
In the views folder, create a *home.ejs* file:

**home.ejs**
<h1>This is the home page!</h1>

Now create a home route in index.js below the middleware:

app.get('/', (req, res) => {
  res.render('home');
});

Ejs will assume that home means home.ejs. Now start nodemon and check that your home page renders as desired.

**Step 5: Set up a few more views/routes**

**index.js**

app.get('/animals', (req, res) => {
  res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});

**layout.ejs**

<!DOCTYPE html>
<html>
<head>
  <title>Love It or Leave It</title>
</head>
<body>
  <ul>
    <li><a href='/foods'>Favorite Foods</a></li>
    <li><a href='/animals'>Favorite Animals</a></li>
    <li><a href='/movies'>Worst Movies</a></li>
    <li><a href='/products'>Worst Products</a></li>
  </ul>
  <%- body %>
</body>
</html>

# Controllers & Express Router

**We have been placing all routes into index.js when creating a Node/Express app, but this can get cumbersome when dealing with many routes. The solution is to group related routes and separate these groups into separate files. These files will go into a controllers folder.**

const express = require('express');
const router = express.Router();

router.get('/foods', (req, res) => {
  res.render('loveit/foods', {foods: ['coconut', 'avocado']});
});

router.get('/animals', (req, res) => {
  res.render('loveit/animals', {animals: ['sand crab', 'corny joke dog']})
});

module.exports = router;

# CRUD & REST

Most sites you interact with on the internet are CRUD sites. Almost everything you do on the web is a CRUD action. For example:
Create a youtube user, a video, a comment, etc.Read comments, view videos, etc.Update your profile, edit a video title, etc.Delete a video, comment, or an entire channel!

# RESTful Routing

RESTful stands for REpresentational State Transfer. It is a set of principles that provide a way of mapping HTTP Verbs (GET, POST, PUT, DELETE) and CRUD actions together. When you click through a website by clicking on links, you're making a state transition which brings you to the next page (the next state of the application). A RESTful route incorporates:
the item or data you're interacting withthe CRUD action you're performing on that item or data
