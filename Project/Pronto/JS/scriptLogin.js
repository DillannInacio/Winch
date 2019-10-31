
function validar() {

    var mensagem = "Informe: \n";
    var nome = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (nome === "") {
        mensagem += "Login \n";
    }

    if (senha === "") {
        mensagem += "Senha \n";
    }
    if (mensagem !== "Informe: \n") {
        alert(mensagem);
        return false;
    } else {
        return true;
    }
}