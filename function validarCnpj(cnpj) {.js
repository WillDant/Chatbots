function validarCnpj(cnpj) {

 const apenasDigitos = cnpj.replace(/(\D+)|(0{5,}|1{5,}|2{5,}|3{5,}|4{5,}|5{5,}|6{5,}|7{5,}|8{5,}|9{5,})|(\d)\3{4,}/g, ''); 
 const cnpjFormatado = apenasDigitos.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5'); 

   if (apenasDigitos.length === 14) {
      return cnpjFormatado;
  } else {
      return 'false';
  }
      
}

 //Exemplo de teste no Node J.S
  const cnpj1 = 'aaaaa-/@+=|$!%*#@,,,.. 215123131.1011-9...';
   console.log(validarCnpj(cnpj1));