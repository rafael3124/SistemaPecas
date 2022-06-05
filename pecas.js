let pesoPeca = 50
let numeroPecas = 12
let nomePeca = 'Disco'

if(pesoPeca > 100) {
    console.log("Peso da peça maior do que 100g, logo, podemos cadastrar a peça!")
}else{
    console.log("Peso insuficiente, não é possivel cadastrar.")
}
  
  
  
if(numeroPecas < 10){
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
    }
else{
    console.log("Não há espaço disponível na caixa")
    }

if(nomePeca.length < 3){
    console.log("Nome da peça muito curto, não foi possivel cadastrar")
}else {
    console.log("Nome da peça adequado, podemos cadastrar")
}

console.log("O comprimento do nome da peça é:", nomePeca.length)