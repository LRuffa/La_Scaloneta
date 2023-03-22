const credenciales = {
    email: "estudiante@guayerd.com",
    password: "123456",
    };
    
function login(){
    
    let userMail, userPassword;

    userMail= document.getElementById("email").value;
    userPassword = document.getElementById("password").value;
    
    // impide que se recargue la pagina
    const form = document.querySelector("#login_form");
    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        alert();
    })
    
    // inicio de sesion 
    if(userMail === credenciales.email && userPassword === credenciales.password){
        localStorage.setItem("logged", "true");
        window.location.href =  "/map.html";
    }else {
        alert("credenciales incorrectas")
    }


}
if(localStorage.getItem("logged") === "true") {
    window.location.href = "/map.html"
}
