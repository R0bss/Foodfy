const receitas = require('../data');

exports.index = function (req, res){
  return res.render("recipes/index" , {items: receitas});
}

exports.about = function (req, res){
  return res.render("recipes/sobre");
}

exports.recipe = function (req, res){
  return res.render("recipes/receitas", {items: receitas});
}

exports.show = function (req, res) {
  const recipes = receitas; // Array de receitas carregadas do data.js
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
  return res.render("admin/index" , {items: receitas});
}


exports.admin_show = function (req, res) {
  const recipes = receitas; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.id;

  if (recipes[recipeIndex]) {
    //return res.send(recipes[recipeIndex])
    return res.render("admin/recipe", {item : recipes[recipeIndex]})
  }else{
    return res.send("Recipe not found!")
  }
  //console.log(recipes[recipeIndex]);
  
}