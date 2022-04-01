//const modalOverlay = document.querySelector('.modal-overlay');
//const modal = document.querySelector('.modal');

const cards = document.querySelectorAll('.card');

const accordions = document.querySelectorAll('.recipes .accordions');

const current = location.pathname;
const links = document.querySelectorAll('.links a');

for(let card of cards){
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id")
        //const postId = card.IndexOf(card.getAttribute("id"))
        //console.log(card.IndexOf(card.getAttribute("id")))
        //modalOverlay.classList.add('active')
        //modalOverlay.querySelector(".image_container_modal img").src = `/assets/${postId}.png`
        //modalOverlay.querySelector(".image_container_modal img").src = card.querySelector(".card_image-container img").src
        //modalOverlay.querySelector(".title_modal p").textContent = card.querySelector(".card_content p").textContent
        //modalOverlay.querySelector(".info_modal p").textContent = card.querySelector(".card_info p").textContent
        window.location.href = `recipes/${postId}`
    })
}
for(let link of links){
    if (current.includes(link.getAttribute("href"))) {
      //link.classList.add("active");
      link.style.fontWeight = "bold";
    }
    if (current.includes("/recipes/") && link.textContent == "Receitas") {
      link.style.fontWeight = "bold";
    }
}

for(let accordion of accordions){
  accordion.addEventListener("click", function(){

    if(accordion.querySelector(".content_accordion").className == "content_accordion hide"){ 
      accordion.querySelector(".content_accordion").classList.remove("hide");
      accordion.querySelector(".accordion").textContent = "esconder"  
    }else{
      accordion.querySelector(".content_accordion").classList.add("hide");
      accordion.querySelector(".accordion").textContent = "mostrar"  
    }
  })
}

 /*
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector(".image_container_modal img").src = ""
        modalOverlay.querySelector(".title_modal p").textContent = ""
        modalOverlay.querySelector(".info_modal p").textContent = ""

})
*/


/* =================== ADMIN ==================== */
const cardsAdmin = document.querySelectorAll('.card');

//const accordions = document.querySelectorAll('.recipes .accordions');

//const current = location.pathname;
//const links = document.querySelectorAll('.links a');

for(let cardAdmin of cardsAdmin){
  cardAdmin.addEventListener("click", function(){
      const postIdAdmin = cardAdmin.getAttribute("id")
      //const postId = card.IndexOf(card.getAttribute("id"))
      //console.log(card.IndexOf(card.getAttribute("id")))
      //modalOverlay.classList.add('active')
      //modalOverlay.querySelector(".image_container_modal img").src = `/assets/${postId}.png`
      //modalOverlay.querySelector(".image_container_modal img").src = card.querySelector(".card_image-container img").src
      //modalOverlay.querySelector(".title_modal p").textContent = card.querySelector(".card_content p").textContent
      //modalOverlay.querySelector(".info_modal p").textContent = card.querySelector(".card_info p").textContent
      //window.location.href = `/admin/recipes/${postIdAdmin}`
  })
}

/* =================== ADMIN EDIT RECIPE - ADD INGREDIENT ==================== */
function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".item_ingredient");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);

  /* =================== ADMIN EDIT RECIPE - ADD PREPARATION ==================== */

  function addPreparation() {
    const preparations = document.querySelector("#preparations");
    const fieldContainer = document.querySelectorAll(".item_preparation");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparations.appendChild(newField);
  }
  
  document
    .querySelector(".add-preparation")
    .addEventListener("click", addPreparation);