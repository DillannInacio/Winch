function validar() {

    var mensagem = "Informe: \n";
    var login = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
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

    if (mensagem !== "Informe: \n") {
        alert(mensagem);
        return false;
    } else {
        return true;
    }
}
function saveTextAsFile() {
    var login = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var confSenha = document.getElementById("senhacon").value;
    var sexo = document.getElementById("sexo").value;
    var textToWrite = login + email + cpf + telefone+ senha + confSenha + sexo;
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}
