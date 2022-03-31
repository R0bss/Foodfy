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

exports.admin_edit = function(req, res){
  //req.params
  const { id } = req.params
  const recipes = data.recipes;
/*
  const foundMember = data.recipes.find(function(recipes) {
    //return member.id == id
    return recipes[id]
  })
  console.log(recipes[id]);
*/
console.log(recipes[id]);
  if (!recipes[id]) return res.send("Member not found!")
 

 const recipe ={
    ...recipes[id],
    //birth: date(recipes[id].birth).iso
  }

  return res.render('admin/edit', {recipe}) 
}