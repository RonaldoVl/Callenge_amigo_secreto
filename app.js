//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById("listaAmigos");
const ulresultado = document.getElementById("resultado");

function adicionarAmigo(){
  // console.log("Olá");
    listaAmigos.push(inputAmigo.value);
    //console.log(listaAmigos)
    ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};
function sortearAmigo(){
    //console.log("amigo sorteado")
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulresultado.innerHTML = `<li> O amigo secreto é: ${amigoSecreto}</li>`;
}