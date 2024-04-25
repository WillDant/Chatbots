function extrairPrimeiroNome(nome) {
  const partesNome = nome.trim().split(/\s+/); // Divide o nome em partes com base nos espaços em branco.
  const primeiroNome = partesNome[0].replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, ''); // Remove caracteres especiais.

  // Verifica se a string está vazia ou é nula
  if (!primeiroNome || primeiroNome.trim() === '') {
      return false;
  }

  return primeiroNome;
}


// Exemplo de teste no Node.js
const entradaUsuario = "J..o,,,.33ã@+=|$!%*#@o  da Silva";
const nomeFormatado = extrairPrimeiroNome(entradaUsuario);
  console.log(nomeFormatado); // Saída: João