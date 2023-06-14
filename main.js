function Converter(){
    var valorElemento = document.getElementById("valor"); //getElementById pega as informções do id dentro do html
    var valor = valorElemento.value; //.value o ponto acessa e o value pega o valor
    var valorEmDolarNumerico = parseFloat(valor); //paseFloat transforma para float

    var valorEmReal = valorEmDolarNumerico * 4.80;

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O Resultado em real é R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido //inner.HTML insere dentro do html o valor
}