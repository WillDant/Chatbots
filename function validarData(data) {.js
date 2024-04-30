function validarData(data) {
  const apenasData = data.replace(/[^\d\/]/g, '').replace(/(^|\/)(\d)(?=\/|$)/g, '$10$2'); // Procura números que estão entre barras adicionando um zero à esquerda se necessário.

  if (apenasData.length === 10) {
      return apenasData; 
  } else {
      return false; 
  }
}


 // Exemplo de teste no Node.js
 const entradaUsuario = "aaaaa@+=|$!%*#@,,,. 1/9 /aa2004..."; 
 const dataFormatada = validarData(entradaUsuario);
   console.log(dataFormatada);