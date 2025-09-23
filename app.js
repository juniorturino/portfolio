// Menu Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


// Fechar o menu ao clicar em um link
const fecharMenu = () => nav.classList.remove("active");
document.getElementById("sobre").addEventListener("click", fecharMenu);