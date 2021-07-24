const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const receitas = require('./data');

server.use(express.static('public'))
server.use(express.static('assets'))


server.set('view engine',"njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function (req, res){
  return res.render("index" , {items: receitas});
})

server.get("/sobre", function (req, res){
  return res.render("sobre");
})

server.get("/receitas", function (req, res){
  return res.render("receitas", {items: receitas});
})

server.get("/recipes/:index", function (req, res) {
  const recipes = receitas; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  if (recipes[recipeIndex]) {
    //return res.send(recipes[recipeIndex])
    return res.render("recipe", {item : recipes[recipeIndex]})
  }else{
    return res.send("Recipe not found!")
  }
  //console.log(recipes[recipeIndex]);
  
})

server.listen(5000, function () {
  console.log('Server is running');
})