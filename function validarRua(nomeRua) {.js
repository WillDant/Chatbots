function validarRua(nomeRua) {
  const apenasLetras = nomeRua.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '');

  if (apenasLetras.length >= 3 && apenasLetras.length <= 50) { 
      return apenasLetras;
  } else {
      return false; 
  }
   
}

// Exemplo de teste no Node.js
 const nomeDigitado = "/+=|$!%*#@,,,..João Vicente";
  console.log(validarRua(nomeDigitado));