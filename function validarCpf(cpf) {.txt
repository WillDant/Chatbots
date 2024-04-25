function validarCpf(cpf) {
  const apenasDigitos = cpf.replace(/(\D+)|(0{5,}|1{5,}|2{5,}|3{5,}|4{5,}|5{5,}|6{5,}|7{5,}|8{5,}|9{5,})|(\d)\3{4,}/g, '');
  const cpfFormatado = apenasDigitos.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');

    if (apenasDigitos.length != 11) {
      return 'false';
  } else {
      return cpfFormatado;
  }
}

//Exemplo de teste no Node J.S
  const cpfFormatado = 'aaaaa@+=|$!%*#@,,,. 123131.1011-9...';
   console.log(validarCpf(cpfFormatado))