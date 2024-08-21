var botao = document.querySelector(".maisum")
var tabela = document.querySelector(".bodytabela")
var modal = document.querySelector(".modal")
console.log(modal.attributes["data-open"])

var notas = [
 {
    numero: 1,
    cliente: "Péricles",
    item: "chave de fenda",
    data: new Date()
},
{
    numero: 2,
    cliente: "Péricles",
    item: "chave de fenda",
    data: new Date()
},
{
    numero: 3,
    cliente: "Péricles",
    item: "chave de fenda",
    data: new Date()
},
{
    numero: 4,
    cliente: "Péricles",
    item: "chave de fenda",
    data: new Date()
}
]

function refresh(){
    tabela.innerHTML = ""
    notas.forEach(element => {
        tabela.innerHTML += `
        <tr>
                    <td>${element.numero}</td>
                    <td>${element.cliente}</td>
                    <td>${element.item}</td>             
                    <td>${element.data.toLocaleDateString("pt-BR") }</td>             
                </tr>`
    });
}  
refresh()

function adicionar(valores){
        notas.push({
            numero: Math.floor(Math.random()*1000),
            cliente: valores.cliente,
            item: valores.item,
            data: valores.data
        })
        refresh()
}

function subimetido (evento) {
    evento.preventDefault()
    
    //var numero = document.querySelector("#numero").value;
    var cliente = document.querySelector("#cliente").value;
    var item = document.querySelector("#item").value;
    var data = document.querySelector("#data").value;

    if(cliente===""||item===""|| data===""){
        window.alert("reveja os parametros e veja novamente")
        }
    else{
        adicionar({
            cliente,
            item,
            data: new Date(data)
        })
        abreefecha()
    }
}


function abreefecha(){
    document.querySelector("form").addEventListener('submit', subimetido)
    var aberto = modal.attributes["data-open"].value
    if(aberto==="true"){
        modal.style.display="none"
        modal.attributes["data-open"].value="false"   
     }
     else{
        modal.style.display="flex"
        modal.attributes["data-open"].value="true";
     }
}


botao.addEventListener(
    "click", abreefecha
)