let nome = document.getElementById('nome');
let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

function imc () {
    
    if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
        
        let valorImc = (peso.value / (altura.value * altura.value)).toFixed(1);
        let classificacao = '';

        if (valorImc < 18.5){
            classificacao = 'abaixo do peso';
        } else if (valorImc < 25){
            classificacao = 'com peso ideal. Parabéns';
        } else if (valorImc < 30){
            classificacao = 'levemente acima do peso';
        } else if (valorImc < 35){
            classificacao = 'com obesidade grau I';
        } else if (valorImc < 40){
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado';
        }    

        resultado.textContent = `${nome.value} seu imc é ${valorImc} e você está ${classificacao}!`;

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);