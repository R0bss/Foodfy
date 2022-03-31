const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

routes.get("/", recipes.index)

routes.get("/sobre", recipes.about)
routes.get("/receitas", recipes.recipe)
routes.get("/recipes/:index", recipes.show)


routes.get("/admin/recipes", recipes.admin_index); // Mostrar a lista de receitas
//routes.get("/admin/recipes/create", recipes.admin_create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.admin_show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.admin_edit); // Mostrar formulário de edição de receita

//routes.post("/admin/recipes", recipes.admin_post); // Cadastrar nova receita
//routes.put("/admin/recipes", recipes.admin_put); // Editar uma receita
//routes.delete("/admin/recipes", recipes.admin_delete); // Deletar uma receita


module.exports = routes