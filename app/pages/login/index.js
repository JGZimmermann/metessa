let users = JSON.parse(localStorage.getItem('usuarios') || '[]')
localStorage.setItem('usuarios',JSON.stringify(users))



document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', function() {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const isValid = regex.test(passwordInput.value);
      passwordInput.classList[isValid ? 'remove' : 'add']('invalid');
      passwordInput.classList[isValid ? 'add' : 'remove']('valid');
    });
  });

function login(){
    let emailInput = document.getElementById("email").value
    let passwordInput = document.getElementById("password").value

    users.forEach(usuario => 
            {
                if (usuario.email == emailInput && usuario.senha == passwordInput) {
                    localStorage.setItem("logged", "true")
                    localStorage.setItem("sessionUser", usuario.nome)
                    window.location.href="../../index.html"
                }
            }
        )
        if(localStorage.getItem("logged") != "true") {
            alert("Login ou senha incorreta")
        }
}