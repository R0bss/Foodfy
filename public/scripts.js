const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

const cards = document.querySelectorAll('.card');

const recipes = document.querySelector('.recipes');
//const accordion = document.querySelector('.content_accordion');
const accordionContent = document.querySelector('.content_accordion')

const accordions = document.querySelectorAll('.recipes .accordions');


for(let card of cards){
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id")
        //modalOverlay.classList.add('active')
        //modalOverlay.querySelector(".image_container_modal img").src = `/assets/${postId}.png`
        //modalOverlay.querySelector(".image_container_modal img").src = card.querySelector(".card_image-container img").src
        //modalOverlay.querySelector(".title_modal p").textContent = card.querySelector(".card_content p").textContent
        //modalOverlay.querySelector(".info_modal p").textContent = card.querySelector(".card_info p").textContent
    })
}

document.querySelector(".links a").addEventListener("click", function(){
    document.querySelector(".sobre").style.fontWeight = "bold"
 })

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
document.querySelector(".recipes .title .accordion").addEventListener("click", function(){
  if(accordion.className == "content_accordion hide"){ 
    accordion.classList.remove("hide");
    recipes.querySelector(".title a").textContent = "esconder"  
  }else{
    accordion.classList.add("hide");
    recipes.querySelector(".title a").textContent = "mostrar"  
  }
 })
*/
 /*
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector(".image_container_modal img").src = ""
        modalOverlay.querySelector(".title_modal p").textContent = ""
        modalOverlay.querySelector(".info_modal p").textContent = ""

})
*/
