function validarNumero(numeroConta) {
  const apenasNumeros = numeroConta.replace(/\D+/g, '').replace(/^(\d{5})(\d+)$/, '$1-$2');

    if (apenasNumeros.length >= 5 && apenasNumeros.length <= 12) {
        return apenasNumeros;
    } else {
        return null; 
    }  
}

//Exemplo de teste no Node J.S
  const fraseOriginal = "a9@ 45676966.9/- +=|$!%*#@gmail,,,.com...."; 
  const numerosApenas = validarNumero(fraseOriginal);
    console.log(numerosApenas);