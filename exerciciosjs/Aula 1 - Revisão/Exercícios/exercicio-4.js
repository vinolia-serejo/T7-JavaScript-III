let animais = ['cachorro', 'gato', 'galinha', 'bode', 'periquito', 'girafa'];
let elementUl = document.querySelector('ul');
// let texto = document.querySelector('#text').value;
let botao = document.querySelector('button')

for (let animal of animais) {
    //criar li
    let elementLi = document.createElement('li');
    // let text = document.createTextNode(animais[1]);
    let textElement = document.createTextNode(animal);
    //adicionar li dentro da ul
    elementUl.appendChild(elementLi);
    //inserir valor dentro da li
    elementLi.appendChild(textElement);
    
}

botao.addEventListener('click', function(){
    let texto = document.querySelector('#text').value;
    let listaLi = document.createElement('li');
    let textoInput = document.createTextNode(texto);
    elementUl.appendChild(listaLi)
    listaLi.appendChild(textoInput);
})