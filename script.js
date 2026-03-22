const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener('click', (e) => {
  e.preventDefault(); //para prevenir o refresh da p]agina
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  //aqui teria logica extra para validar ou enviar para uma API
  //mas neste ponto eu ainda n\ao sei trabalhar com APIs
})