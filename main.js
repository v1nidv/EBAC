const valorX = document.getElementById('numberX');
const valorY = documebt.getElementById('numberY');
const form = document.getElementById('form-calcular');

function calcular(numero){
    numero = valorX.value > valorY.value;
    return numero;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O número &nbsp;${valorX.value} &nbsp; é maior que o número &nbsp; ${valorY.value}`;
    const mensagemErro = `O número &nbsp;${valorX.value}&nbsp; é menor que o número &nbsp; ${valorY.value};`
    if (calcular()){
        
    }
})

console.log(form);