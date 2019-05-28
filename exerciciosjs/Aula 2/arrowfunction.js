const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);

//transformando em arrowfunction
//para inline

// const mostraIdade =  (usuario) => usuario.idade;

//para mais de uma linha, precisa usar chaves e return.

//  {
// //  return usuario.idade}
