function validarTelefone(telefone) {
   const telefoneLimpo = telefone.replace(/(\D+)|(0{5,}|1{5,}|2{5,}|3{5,}|4{5,}|5{5,}|6{5,}|7{5,}|8{5,}|9{5,})|(\d)\3{4,}/g, ''); 
   const telefoneFormatado = telefoneLimpo.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  
       if (telefoneLimpo.length === 10 || telefoneLimpo.length === 11) {
   
           return telefoneFormatado;
     }  else {
           return false;
    }
}

//Exemplo de teste no Node J.S
  const fraseOriginal = "testéç +=|$!%*#@,,.com.1222.3322456..."; 
  const numerosApenas = validarTelefone(fraseOriginal);
   console.log(numerosApenas);