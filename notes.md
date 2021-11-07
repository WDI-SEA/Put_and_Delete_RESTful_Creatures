# How to make an Express/EJS Application

## Getting Started
- Initalize a npm project `npm init -y`
- Install express, a web application framework that makes it easier to make webapps without coding everything in node.js by typing: `npm i express`
- Install ejs, a templating language in order to make it easier to write inline code in your HTML/EJS templates by typing: `npm i express`
- Install ejs layouts, to further extend our templating capability `npm i express-ejs-layouts`
- Create a `.gitignore` file and make sure to add `node_modules` to it so that you don't end up pushing all of those dependency packages to github!
- Determine how you will be retrieving your data: csv, json, SQL database? This will determine what module you will need to import. In our case, we will need to use the built in module `fs`

## Plan Out Your App
Figure out what kind of information you want to store. When you are finished, begin working on your data model for it.

*I want to track Youtube cooking recipe videos and track whether or not I have made the meals in the video.*
-- what will we need?

- contentCreator: string
- contentCountry: string
- contentUrl: string

## Plan Out Your Routes

What are routes? *Routes* are the way Express associates an "HTTP verb", i.e. (GET, POST, PUT, DELETE) with a URL path/pattern and a functiont hat is called to handle that pattern.

CRUD apps are essentially generic. There are seven main CRUD RESTful routes:

| VERB | URL pattern | Action \(CRUD\) | Description |
| :--- | :--- | :--- | :--- |
| GET | /item | Index \(Read\) | lists all items (index) |
| GET | /item/new | New \(Read\) | shows a form to make a new item |
| POST | /item | Create \(Create\) | creates an item with the POST payload\(form\) data, redirects to the index page|
| GET | /item/:id | Show \(Read\) | list information about a specific item based on its id \(i.e. /item/1\) |
| GET | /item/edit/:id | Edit \(Read\) | shows a form for editting a specific item \(i.e. /item/edit/1\) |
| PUT | /item/:id | Update \(Update\) | updates the data for a specific item \(i.e. /item/1\), redirects to the item's show page|
| DELETE | /item/:id | Destroy \(Delete\) | deletes the item with the specified id \(i.e. /item/1\), redirects to the index page|

These will determine the routes to interact with your data object.

## Starting your "index.js" file

Modules that you use in your project will need to be imported into your project if you want to use them. First, import the most important elements.

- Import Express, EJS Layouts:
```javascript
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs')
```
Given that HTTP forbids direct application P/D verbs, we will need to also need to install and import the module "method-override":

```javascript
npm i method-override
```

```javascript
const methodOverride = require('method-override')
```

## Constructors of Express Applications
It will also be useful for us to make it easier to call express when we need to:
```javascript
const app = express()
```

## Middleware
Middleware intercepts the request/response objects before they come in or go out. They are functions that are called between processing the request and sending the response in your application methods. In our app, we will be using them for our "templating" engine, our handling of URLS and casting them to strings/arrays (i.e. req.body), as well as the method overrides, which will allow us to use the PUT and Delete verbs.

```javascript
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

```

## Starting Our Server and Setting up Base Path

Let's have our server startup as soon as we start the program and log a message so that we know it is working:
```javascript
app.listen(8000, ()=>{
    console.log("Let's get this 🍞")
})
```
If it works, let's proceed to setting up the base path.

Create two folders at the same directory level as your index.js file. Name them `controllers` and `views`. **EJS handles these directly, so they must be named exactly.** Inside of ```views``` create a `home.ejs` file and a `layout.ejs` file.
In your layout.ejs file, add:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title Here</title>
</head>
<body>
<h1>Page Title</h1>
  <%- body %>
</body>
</html>

```
Make sure to add ```<%- body %>``` inside of there. This "inserts" the template into any .ejs file.


In your index.js file, add:
```javascript
app.get('/', (req,res)=>{
    res.render('home.ejs')
})
```

Read the syntax carefully:
- Express is routing HTTP GET requests to the specified path with the specified callback functions.
- `app.get()` is the method
- `app.get('/')` indicates the path where the middleware functions are to be invoked.
- `app.get('/', (req,res))` are the parameters for the anonymous callback function that we are invoking.
```javascript
{ 
res.render('home.ejs')
}
```
- This "compiles" the template specified in layout.ejs, and sends the HTML to the client.

When you have all of these complete, we will have to set our first "route".

We will be creating a route middleware module in order to set our routes and assign it a file that contains the routes we will stub out next.

At the bottom of your `index.js` file, add:
```
app.use('/<route-name>', require('./routes/<route-file-location>'))
```



### Stubbing Routes and Controllers
For the examples, we used in class, we elided the differences between routes and controllers. However, routes and controllers are different. Routes are more akin to "paths" and Controllers are more akin to the types of functions that are run in those paths. If we are seeking modularity, we should refactor these into two separate places.
So let's stub out some routes. First, create a `routes` folder, and add a routes file. **NOTE**: The name of this file, **will** become the name of our route page where we will store all of the routes we will be using for this application. At the top of our routes file, 


Let's go one by one:

HTML GET:
Route: ('/item')

This will be our main index page.

```router.get('/', controllers.video_index);```

HTML GET:


HTML POST:


HTML GET:


HTML GET:


HTML PUT:


HTML DELETE:







Models: Data.
View: Presentation of Data
Controller: Direct Traffic of Data
Routes: The Destination

Route: /post/show/:id
Controller: /controller/post.js;
    PostsController

    Action: show()
        // Model: Post
        // Posts.get(<id of post>)
        return Posts.get(1)

View: /views/posts/show.ejs

Give me some route and Ill tell you what actions to preform.









## Deploying Your Projects to Github Pages
Create a new repository named `<your-username>.github.io`