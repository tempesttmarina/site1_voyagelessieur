const btnPlus = document.querySelector(".js-plus");
const colTransport = document.querySelector(".conteneur-transport");

btnPlus.addEventListener("click", deroulant);

function deroulant(){
    colTransport.classList.toggle("invisible");
}