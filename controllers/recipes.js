const fs = require('fs');
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
    return res.render("recipes/recipe", {item : recipes[recipeIndex]})
  }else{
    return res.send("Recipe not found!")
  }
  
}

exports.admin_index = function (req, res){
  return res.render("admin/index" , {items: data.recipes});
}

exports.admin_show = function (req, res) {
  const recipes = data.recipes; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.id;

  if (recipes[recipeIndex]) {
    return res.render("admin/recipe", {item : recipes[recipeIndex], id: recipeIndex})
  }else{
    return res.send("Recipe not found!")
  }
}

exports.admin_edit = function(req, res){
  const { id } = req.params
  const recipes = data.recipes;
/*
  const foundMember = data.recipes.find(function(recipes) {
    //return member.id == id
    return recipes[id]
  })
  console.log(recipes[id]);
*/

  if (!recipes[id]) return res.send("Member not found!")
 
  const recipe ={
    ...recipes[id],
  }

  return res.render('admin/edit', {recipe, id: id}) 
}

exports.admin_put = function(req, res){
  const { id } = req.body
  const recipes = data.recipes;

  if (!recipes[id]) return res.send("Member not found!")

  const recipe = {
    ...recipes[id],
    ...req.body,
  }
 
  data.recipes[id] = recipe
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err){
    if (err) return res.send("Write error!")

    return res.redirect(`/admin/recipes/${id}`)
  })
  
}

exports.admin_delete = function(req, res){
  const {id} = req.body

  const filteredRecipes = data.recipes.filter(function(recipe){
    return recipe.id != id
  })

  data.recipes = filteredRecipes


  fs.writeFile("data.json", JSON.stringify(data,  null, 2), function (err){
    if (err) return res.send("Write file error!")

    return res.redirect("/admin/recipes")
  })
}

exports.admin_post = function(req, res){
  const keys = Object.keys(req.body)
  const recipe = req.body;

  keys.pop('id')



  for(key of keys) {
    if (key != 'information') {
      if (req.body[key] == "") {
        return res.send('Please, fill all fields!') 
      }
    } 
  }

  //recipe.pop('id')
  data.recipes.push({
    ...req.body,
  })
  fs.writeFile("data.json", JSON.stringify(data,  null, 2), function(err){
    if (err) return res.send("Write file error!") 

    return res.redirect("/admin/recipes")
  })
}

exports.admin_create = function(req, res){
  return res.render('admin/create')
}