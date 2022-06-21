var listaDePecas = ["Amortecedor","Motor","Correia dentada","Filtro de ar","Peneu 14","Farol"]; //Array
if (listaDePecas.length > 6){
    console.log("Não é possivel cadastrar por execesso de peças");
}else{
    console.log("Limite ok")
}

let peso = 60;
if(peso >= 100){
    console.log("Peso permetido")
}else{
    console.log("O peso está abaixo do normal")
}

let peca = "Farol";
if (peca.length < 3){
    console.log("O nome da peça é muito pequeno")
}else{
    console.log("O nome da peça é válido")
}