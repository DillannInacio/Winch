function validar() {

    var mensagem = "Informe: \n";
    var login = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var placa = document.getElementById("plate").value;
    var licensa = document.getElementById("license").value;
    var veiculo = document.getElementById("veiculo").value;
    var ano = document.getElementById("year").value;
    var chassi = document.getElementById("chassi").value;
    var senha = document.getElementById("senha").value;
    var confSenha = document.getElementById("senhacon").value;
    var sexo = document.getElementById("sexo").value;

    if (login === "") {
        mensagem += "Login \n";
    }
    if (email === "") {
        mensagem += "Email  \n";
    }
    if (cpf === "") {
        mensagem += "CPF \n";
    }
    if (senha === "" || confSenha === "") {
        mensagem += "a senha e confirme-a. \n";
    }
    if (senha === confSenha) {
        return true;
    } else {
        mensagem += "as senhas iguais. \n";
    }
    if (sexo === "") {
        mensagem += "Seu sexo \n";
    }
    if (telefone === "") {
        mensagem += "Telefone \n";
    }
    if (placa === "") {
        mensagem += "Placa do veiculo \n";
    }
    if (licensa === "") {
        mensagem += "N° da Carteira de Habilitação. \n";
    }
    if (veiculo === "") {
        mensagem += "Veículo \n";
    }
    if (ano === "") {
        mensagem += "Ano do veículo \n";
    }
    if (chassi === "") {
        mensagem += "Número de chassi \n";
    }
    if (mensagem !== "Informe: \n") {
        alert(mensagem);
        return false;
    } else {
        return true;
    }
}