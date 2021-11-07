# Templates

## Template Engines

The downside to this method is that we are only sending HTML files, but what if we want to customize what's on the page? On the front-end, we could manipulate the DOM with Javascript, that's certainly an option! But what if we want to display data that we pull from a database? **Template engines** allow us to inject values into the HTML, and even script logic into the HTML. This will be extremely useful for building in CRUD functionality and full stack apps in general. docs

### EJS: Embedded Javascript

There are several javascript template engines for express, one of the most popular of which, is EJS, available via npm. Let's update our express personal website views with EJS.

**Install EJS**

Add EJS to your personal website project using npm:

npm i ejs

**Set the view engine to EJS**

Above your routes, add app.set(name, value) (docs) where the name is view engine and the value is ejs.

app.set('view engine', 'ejs');

This tells express that we'll be using ejs as our view engine.

**Adapt your routes to ejs**

1. Rename the .html files to .ejs files.

2. Replace your res.sendFile(<absolute path>) statements with res.render(<file name>) statements.

3. Ejs assumes a lot about the path to the template files, so as long as they are nested in a views folder and have .ejs extensions, you can simply pass the filename (no extension, though it wont break it if you include it) into res.render().

Your home route should look like this:

app.get('/', (req, res)=>{
  res.render('index.ejs');
});

Note: you can even leave off the .ejs because express knows to look for ejs files.

app.get('/', (req, res)=>{
  res.render('index');
});

## The Cool Part: Templating with Variables

Templating with variables means we can pass in an object to res.render() and access the values stored in it as variables inside the ejs template.

This is best demonstrated with an example. Create an object with at least one key-value pair and pass that object in as the second argument to the render function in one of your routes:

**index.js**

app.get('/', function(req, res) {
  res.render('index', {name: "Sterling Archer", age: 35});
});

We now have access to a name variable inside our index.ejs file! We can access this variable by embedding it into the html using this notation: <%= embedded js goes here %>.

For example: **index.ejs**

<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
  </head>
  <body>
    <h1>Hello, <%= name %>!</h1>
  </body>
</html>

Javascript can be embedded using the <% %> tags. The addition of the = sign on the opening tag means that a value will be printed to the screen.

<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
  </head>
  <body>
    <h1>Hello, <%= name %>!</h1>
    <% let dogAge = age*7 %>
    <h2>You are <%= dogAge %> in dog years.</h2>
  </body>
</html>

<% %> without the = will not print out the expression, but it will execute it. This comes in handy for if statements and loops.

This doesn't only apply to primitive variables. We can even include variable declarations and iterators using ejs.

<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
  </head>
  <body>
    <h1>Hello, <%= name %>!</h1>
    <% let dogAge = age*7 %>
    <h2>You are <%= dogAge %> in dog years.</h2>
    <% let status %>
    <%if (dogAge<100) {%>
      <% status = 'young' %>
    <%} else {%>
      <% status = 'old' %>
    <% } %>
    <h3>This means you are <%=status%>!</h3>
  </body>
</html>

Notice that ejs requires ejs tags (<% %>, also called alligators) around each line of the javascript.

## Partials

Partials can be used to modularize views and reduce repetition. A common pattern is to move the header and footer of a page into separate views, or partials, then render them on each page.

**Create the partials**

In the main directory of your project, create a partials folder that includes a header.ejs file.

**partials/header.ejs**

  <header>
    <img src="http://placekitten.com/500/500">
  </header>

**Include your partial**

**index.ejs**

<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
  </head>
  <body>

    <%- include('../partials/header.ejs') %>

    <h1>Hello, <%= name %>!</h1>

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

# Get and Post

1. Set up a new express app called RESTful_creatures.

Incorporate express-ejs-layouts

2. Index / Read (GET) route

Index is a route (URL) that lists all items of a specific type. It is a GET request to (in this example) /dinosaurs.

Format the ejs to display the data. Assume that we will pass the data in as myDinos.

**Index view -- in /views/dinosaurs/index.ejs**

<ul>
  <% myDinos.forEach(dino => { %>
  <li><%= dino.name %> is a <%= dino.type %></li>
  <% }); %>
</ul>

To access our data, we'll use the fs (filesystem) core module. Import this module in index.js

const fs = require('fs');

Now let's pull in our data and take a took at it.

// lists all dinosaurs
app.get('/dinosaurs', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  console.log(dinosaurs);
});

That doesn't look very helpful, does it? That's because we're pulling in a JSON object, which isn't quite the same as a normal JS object. JSON (JavaScript Object Notation), is a standard format for data that is being transmitted (sent back and forth), and it needs to be parsed, or converted to a true JS data type - in this case, an array.

Try parsing the data before printing it:

// lists all dinosaurs
app.get('/dinosaurs', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);
  console.log(dinoData);
});

Now lets send it to our EJS file:

// lists all dinosaurs
app.get('/dinosaurs', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);
  res.render('dinosaurs/index', {myDinos: dinoData});
});

In the above example we load the dinosaurs/index.ejs view and pass it dinoData as mydinosaurs. Now we can access myDinos directly in the index.ejs file.

3. Show / Read (GET) route

Show is a route that displays a single item of a specific type. Since we're still just reading data, it is a GET request to (in this example) /dinosaurs/1

Create a dinosaurs/show.ejs file:

<%= myDino.name %> is a <%= myDino.type %>

Now let's write our show route. We can access the index from the url through the req.params object, but it will be a string. In order to use in to access an array value, we need to cast it to an integer.

**Show route -- in index.js**

//express show route for dinosaurs (lists one dinosaur)
app.get('/dinosaurs/:idx', (req, res) => {
  // get dinosaurs
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);

  //get array index from url parameter
  let dinoIndex = parseInt(req.params.idx);

  //render page with data of the specified animal
  res.render('dinosaurs/show', {myDino: dinoData[dinoIndex]});
});

In the above example we load the dinosaurs/show.ejs view and pass it a specific item from the dinoData array as myDino. We use the :idx url parameter to specify which animal to display. This means in the show.ejs file we can access myDino directly.

4. New / Read (GET) route

To create an item (dinosaur in this example) we need to get the data about that item, so we'll use a form.

Form tags have two attributes that are very import for their CRUD functionality:

**method**: HTTP verb - GET or POST. You will use POST most often because it is significantly more secure. Read about the difference between these two methods by scrolling down to the "When to Use GET" AND "When to Use Post" sections of this page.

**action**: This value should be a path. Specifically, it is the url pattern associated with the route that will handle the data - in this case, that will be the /dinosaurs POST route we will write.

Create a dinosaurs/new.ejs view that contains an html form:

<form method="POST" action="/dinosaurs">
  <label for="dinosaurType">Type</label>
  <input id="dinosaurType" type="text" name="type">

  <label for="dinosaurName">Name</label>
  <input id="dinosaurName" type="text" name="name">

  <input type="submit">
</form>

Now write a GET route so we can view this form at localhost:3000/dinosaurs/new:

app.get('/dinosaurs/new', (req, res) => {
  res.render('dinosaurs/new');
});

Not working? Make sure this route is above the show (/dinosaurs/:idx) route, otherwise the show route will catch the request and pass in "new" as req.params.idx.

5. Create (POST) route

When the above form is submitted it will make a POST to the url /dinosaurs with the data contained in the form fields. To receive this data, we need to create the POST route and use some middleware to make the data readable.

This middleware will store the data submitted from the form in a user-friendly req.body object.

**index.js**

const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(ejsLayouts);
//body-parser middleware
app.use(express.urlencoded({extended: false}));

The express.urlencoded() middleware tells body-parser to capture urlencoded data (form data) and store it in req.body. The {extended: false} option ensures that the values in this body will either be strings or arrays.

Now, if we can access the form data in a POST route!

**index.js**

app.post('/dinosaurs', (req, res) => {
  console.log(req.body);
});

Try adding a new dinosaur and make sure you see the appropriate data come through in the terminal when you submit the form.

**body-parser Summary**: Form data is passed as the payload of the request. Every field that has a name will be included in that payload and it is sent as form encoded text. When body-parser is used, it automatically **parses** the form body into a javascript object that we can use and it stores it in req.body so we can use it (similar to how we convert API responses to JSON. All of this is done as middleware, which we just configured.

**The name attribute matters!** In the above example we could access the dinosaur type form field by using req.body.type and the name field by using req.body.name. This correlates directly to the names given to the form fields in the form html above.

Generally, the code in the **express route** would contain code that would CREATE an item in a database and redirect the user to a route with a confirmation message of some sort or just back to the index route. For this example we're going to use the JSON file created above to store our data. This will involve three steps:

* Reading the JSON file
* Pushing the new animal to the object
* Writing the new JSON file using fs.writeFileSync (this will replace the old dinosaurs.json)

app.post('/dinosaurs', (req, res) => {
  // read dinosaurs file
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);

  // add item to dinosaurs array
  dinoData.push(req.body);

  // save dinosaurs to the data.json file
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));

  //redirect to the GET /dinosaurs route (index)
  res.redirect('/dinosaurs');
});

JSON.stringify does the opposite of JSON.parse - it converts javascript data into json data.

## Show / Read (GET) with a Form

There may be instances where you need to GET dinosaurs, but you don't want them all. A good example is filtering dinosaurs with a specific name via a search bar.

In these cases, you don't want to use a POST action, because POST is reserved for creating new resources. Instead, we can create another form with a GET method, and read the data via a querystring. This is an appropriate use of the GET form method because the user input is not sensitive.

Add a form to dinosaurs/index.ejs

<form method="GET" action="/dinosaurs">
  <label for="nameFilter">Filter by Name</label>
  <input id="nameFilter" type="text" name="nameFilter">
  <input type="submit">
</form>

The idea here is that the search bar allows the user to filter what's on the page, so it will be a GET request to /dinosaurs... but we already have a route for that! When you submit a form using the GET method, the key/value pairs are appended to the URL in a query string. Try searching for a dinosaur now and notice what happens to the URL. This query string, like parameters (req.params) is available via the request object. We'll use a conditional to check if there's a querystring, then filter the dinosaurs if one is present.

app.get('/dinosaurs', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);

  let nameFilter = req.query.nameFilter;

  if (nameFilter) {
      dinoData = dinoData.filter(dino => dino.name.toLowerCase() === nameFilter.toLowerCase());
  }

  res.render('dinosaurs/index', {myDinos: dinoData});
});

# Put and Delete

## Method-Override

### Middleware

**method-override** is a node package that allows us to catch incoming requests to the back-end and change the method from POST to DELETE or PUT. We'll use the method-override middleware that looks for a _method=DELETE or _method=PUT query string in the request URL and swap out the method accordingly.

By default, method-override will only override POST methods, because having a DELETE or PUT route accessible via a GET request "may introduce security issues and cause weird behavior when requests travel through caches"(see the options.methods section of the method-override docs for more on this)

**Setup**:

1. Install method-override via npm.
2. Import the module

const methodOverride = require('method-override');

3. Configure middleware (make sure it lives above any other middleware code that uses the request method):

app.use(methodOverride('_method'));

## DELETE

Delete should be used to delete an existing item. A delete request contains no payload (req.body) and no query string (req.query). The only data is expressed via a URL parameter which matches the item's name (req.params.name).

Since we can only use POST methods to activate the method-override functionality, we will use a form to submit the request. Let's start by adding a delete button (form submission) to our index page list items. Note that we must add a second forEach parameter in order to get access to the dinoId/index.

**dinosaurs/index.ejs**

<form method="GET" action="/dinosaurs">
  <label for="nameFilter">Filter by Name</label>
  <input id="nameFilter" type="text" name="nameFilter">
  <input type="submit">
</form>


<ul>
  <% myDinos.forEach((dino, index) => { %>
  <li><%= dino.name %> is a <%= dino.type %>
      <form method="POST" action="/dinosaurs/<%= index %>/?_method=DELETE">
          <input type="submit" value="Delete">
      </form>
  </li>
  <% }); %>
</ul>

**index.js**

app.delete('/dinosaurs/:idx', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);

  // remove the deleted dinosaur from the dinosaurs array
  dinoData.splice(req.params.idx, 1)

  // save the new dinosaurs to the data.json file
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));

  //redirect to the GET /dinosaurs route (index)
  res.redirect('/dinosaurs');
});

## PUT

First we need a way for the user to edit an item. Add an edit link to the dinosaurs index.

**/dinosaurs/index.ejs**

<form method="GET" action="/dinosaurs">
  <label for="nameFilter">Filter by Name</label>
  <input id="nameFilter" type="text" name="nameFilter">
  <input type="submit">
</form>


<ul>
  <% myDinos.forEach((dino, index) => { %>
  <li><%= dino.name %> is a <%= dino.type %>
      <a href="/dinosaurs/edit/<%= index %>">Edit</a>
      <form method="POST" action="/dinosaurs/<%= index %>/?_method=DELETE">
          <input type="submit" value="Delete">
      </form>
  </li>
  <% }); %>
</ul>

Now we have to create a form for editting the information and submitting the PUT request.

**/dinosaurs/edit.ejs**

<form method="POST" action="/dinosaurs/<%=dinoId%>/?_method=PUT">
    <label>Name</label>
    <input type="text" name="name" value="<%= dino.name %>">
    <label>Type</label>
    <input type="text" name="type" value="<%= dino.type %>">
    <input type="submit">
</form>

We need a GET route to view this form!

**index.js**

app.get('/dinosaurs/edit/:idx', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);
  res.render('dinosaurs/edit', {dino: dinoData[req.params.idx], dinoId: req.params.idx});
});

Finally we can write our PUT route! The form submission will return the editted values through req.body, just like we saw with the new.ejs view and POST route. Now all we need to do is edit the JSON accordingly.

**index.js**

app.put('/dinosaurs/:idx', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);

  //re-assign the name and type fields of the dinosaur to be editted
  dinoData[req.params.idx].name = req.body.name;
  dinoData[req.params.idx].type = req.body.type;

   // save the editted dinosaurs to the data.json file
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
  res.redirect('/dinosaurs');
});