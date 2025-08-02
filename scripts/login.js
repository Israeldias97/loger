
var login = document.getElementById("login");

login.addEventListener("click", function (){

    var user = document.getElementById("userLogin").value;
    var password = document.getElementById("passwordLogin").value;

    var userRegister = sessionStorage.getItem("user");
    var passwordRegister = sessionStorage.getItem("password");

    if(user === userRegister && password === passwordRegister){


        alert("Acesso permitido");

        window.location.href = "../pages/allowed.html";

        return;
    }

    alert("Acesso negado, Formatando seu computador em 3...");
    alert("2");
    alert("1");
    alert("Desligando o sistema agora")

});
