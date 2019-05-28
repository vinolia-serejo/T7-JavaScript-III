
function entrar(){
    let senha = ""

      do {
        senha = prompt("digite a sua senha");
        if (senha == "2112js") {
            alert("entrando no sistema...");
        } else{
            alert("senha incorreta, tente novamente!");
        }       
    }while(senha !== "2112js");
}


