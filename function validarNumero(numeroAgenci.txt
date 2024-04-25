function validarNumero(numeroAgencia) {
  const apenasNumeros = numeroAgencia.replace(/\D+/g, '');

    if (apenasNumeros.length == 4) {
        return apenasNumeros;
    } else {
        return null; 
    }
}

//Exemplo de teste no Node J.S
 const fraseOriginal = "a9@ 469./- +=|$!%*#@gmail,,,.com...."; 
 const numerosApenas = validarNumero(fraseOriginal);
   console.log(numerosApenas);