function validarRg(rg) {
  const apenasDigitos = rg.replace(/(\D+)|(0{5,}|1{5,}|2{5,}|3{5,}|4{5,}|5{5,}|6{5,}|7{5,}|8{5,}|9{5,})|(\d)\3{4,}/g, '');
  const rgFormatado = apenasDigitos.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');

     if (apenasDigitos.length === 9) {
         return rgFormatado;
   }  else {
         return "false";
  }
}

// Exemplo de teste
const rgFormatado = 'aaaaa@+=|$!%*#@,,,.531110-119...';
 console.log(validarRg(rgFormatado));