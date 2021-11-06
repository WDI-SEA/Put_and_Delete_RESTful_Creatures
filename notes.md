1. mkdir for express project
2. npm init -y
3. touch main folder
4. npm i express
5. .gitignore for noude_modules
6. import express package const express = require('express')
7. create instance of express app - const app = express()
8. create home route:
   app.get('/', (req, res)=>{
   res.send('')
   })
9. tell app to listen for requests on port 8000 - app.listen(8000)

EJS

1. npm i ejs to install
2. app.set("view engine", "ejs")
   3.npm i express-ejs-layouts

ADD TO TOP OF FILE

1. const ejsLayouts = require('express-ejs-layouts')

MIDDLEWARE

1. app.set('view engine', 'ejs)
   2 app.use(ejsLayouts)

Add views and controllers folders as needed
