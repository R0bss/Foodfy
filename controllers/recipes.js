const receitas = require('../data');
const data = require('../data.json')

exports.index = function (req, res){
  return res.render("recipes/index" , {items: data.recipes});
}

exports.about = function (req, res){
  return res.render("recipes/sobre");
}

exports.recipe = function (req, res){
  return res.render("recipes/receitas", {items: data.recipes});
}

exports.show = function (req, res) {
  const recipes = data.recipes; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  if (recipes[recipeIndex]) {
    //return res.send(recipes[recipeIndex])
    return res.render("recipes/recipe", {item : recipes[recipeIndex]})
  }else{
    return res.send("Recipe not found!")
  }
  //console.log(recipes[recipeIndex]);
  
}

exports.admin_index = function (req, res){
  return res.render("admin/index" , {items: data.recipes});
}


exports.admin_show = function (req, res) {
  const recipes = data.recipes; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.id;

  if (recipes[recipeIndex]) {
    //return res.send(recipes[recipeIndex])
    return res.render("admin/recipe", {item : recipes[recipeIndex]})
  }else{
    return res.send("Recipe not found!")
  }
  //console.log(recipes[recipeIndex]);
  
}