function validarEmail(email) {
  const formataEmail = email.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ç/g, 'c').replace(/\s/g, '').replace(/\.\.+$/, '').replace(/[+=?:;|$!%*#><\{}''´`,]/g, '').replace(/\.\.+/g, '.').replace(/^\.+/, '');

    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(formataEmail)) {
       return formataEmail;
  } else {
       return 'false';
  }
}

//Exemplo de teste no Node J.S
  const fraseOriginal = "#...testéç ´`+=|$?!%#@gmail ''><\ {}:;,,,...com...."; 
  const numerosApenas = validarEmail(fraseOriginal);
   console.log(numerosApenas);