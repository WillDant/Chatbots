function validarCep(cep) {
  const apenasDigitos = cep.replace(/(\D+)|(0{5,}|1{5,}|2{5,}|3{5,}|4{5,}|5{5,}|6{5,}|7{5,}|8{5,}|9{5,})|(\d)\3{4,}/g, ''); 
  const cepFormatado = apenasDigitos.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1-$2-$3');

    if (apenasDigitos.length === 8) {
       return cepFormatado;
  } else {
       return 'false';
  }
}

//Exemplo de teste no Node J.S
  const fraseOriginal = "aaaaa-/@+=|$?!%*#,,,.. 3131.101-9..."; 
  const numerosApenas = validarCep(fraseOriginal);
   console.log(numerosApenas);