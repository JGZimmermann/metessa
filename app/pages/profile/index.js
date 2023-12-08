let users = JSON.parse(localStorage.getItem('usuarios') || '[]')
let user = localStorage.getItem("sessionUser")

function searchUser(usuario){
    users.forEach(usuarios => 
        {
            if(user == usuarios.nome){
                email = usuarios.email
                senha = usuarios.senha
            }
        }
    )

    return senha, email
}

function buildProfile(){
    searchUser(user)
    let profile = document.getElementById("profile")
    profile.innerHTML = 
    `
    <div class="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" width="20%" style="margin-right: 10vw;">
        <div class="right">
          <h4>Nome</h4>
          <p>${user}</p>
          <h4>Senha</h4>
          <p>${user}</p>
          <h4>E-mail</h4>
          <p>${email}</p>
        </div>
        <br>
        <a class="waves-effect waves-light btn red" onclick="logOut()"><i class="material-icons right">logout</i>Sair</a>
      </div> 
    `

}

function logOut() {
    localStorage.removeItem("sessionUser")
    localStorage.removeItem("logged")
    window.location.href="../../index.html"
}

