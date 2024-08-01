var botao = document.querySelector("#botao-chora");
var div = document.querySelector("#teste-id")
var nome = document.querySelector("#nome-id")
var name = ""


nome.addEventListener("change", (e) => {
name = e.target.value
console.log(name)
})

botao.addEventListener("click", (e) => {
    div.innerHTML += "<div>" + name + "</div>"
} )

botao.addEventListener("click", (e) => {

})