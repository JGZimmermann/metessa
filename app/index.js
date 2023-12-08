let logged = localStorage.getItem("logged")

$(document).ready(function () {
    $("#footer").load("/app/footer.html");
    if(logged == "true"){
        $("#menu").load("/app/menu.html");
    }
    else{
        $("#menu").load("/app/util/menu-before.html");
    }
  
    window.setTimeout(function () {
      var elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
  
      elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
  
      elems = document.querySelectorAll(".modal");
      M.Modal.init(elems, {});
    }, 1000);
  });