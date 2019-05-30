let fotografias = [
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic01.jpg',
        titulo: 'taxi',
        descricao: 'Ir de taxi é melhor que ir de skate?.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic02.jpg',
        titulo: 'Skate',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic03.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic04.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic05.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://youtu.be/s6zR2T9vn2c',
        imagem: 'images/pic06.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },

]

const createBoxes = (fotografias) => {
    return fotografias.map((fotografia) => {
        return(
        `<div class="box">
            <img src=${fotografia.imagem} alt="" class="image fit" />
            <div class="inner">
                <h3>${fotografia.titulo}</h3>
                <p>${fotografia.descricao}</p>
                <a href=${fotografia.url} class="button fit" data-poptrox="youtube,800x400">Watch</a>
            </div>
            </div>
        </div>
        `
        )
        }).join("")  
}


const divMother = document.querySelector(".thumbnails")
divMother.innerHTML += createBoxes(fotografias)



const btn = document.getElementById("btn")

btn.addEventListener('click', function(){

    let inputValue = document.querySelector("input").value.toLowerCase() 
    let filtro = fotografias.filter((fotografia) => {
        return fotografia.titulo.includes (inputValue)|| fotografia.descricao.includes (inputValue)
    })

    divMother.innerHTML = createBoxes(filtro)
})

function limpar(value){
    if (value==""){
        divMother.innerHTML = createBoxes(fotografias)
    }
}
function ordenar(e)
    