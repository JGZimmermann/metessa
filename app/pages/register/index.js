let users = JSON.parse(localStorage.getItem('usuarios') || '[]')
localStorage.setItem('usuarios',JSON.stringify(users))


document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    const passwordInput = document.getElementById('password')
    passwordInput.addEventListener('input', function() {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      const isValid = regex.test(passwordInput.value)
      passwordInput.classList[isValid ? 'remove' : 'add']('invalid')
      passwordInput.classList[isValid ? 'add' : 'remove']('valid')
    });
  });

function register(){
    let verifyUsers = []
    let nome = document.getElementById("name").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("password").value

    let user = {
        nome : nome,
        email : email,
        senha : senha
    }

    users.forEach(time => 
        verifyUsers.push(time.email)
    )
    if(verifyUsers.includes(user.email) == false){
        users.push(user)
        localStorage.setItem("usuarios", JSON.stringify(users))
        alert("Usuário cadastrado!")
        localStorage.setItem("logged", true)
        localStorage.setItem("sessionUser", user.nome)
        window.location.href="../../index.html"

    } else {
        alert("Usuário já cadastrado ou inválido")
    }
}