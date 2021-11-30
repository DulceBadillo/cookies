//document.cookie = "username=dulce";
let cookie = document.getElementById('cookie');

//document.cookie = "nombre=Dulce; expires=Thu, 28 Nov 2021 12:00:00 UTC";

//cookie.innerHTML = document.cookie;
function guardaCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  //guardaCookie("nombre","dulce", "5");

  function leetCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    let user = leetCookie("apellido");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("apellido", user, 30);
       }
    }
  }
  //checkCookie();
  //guardaCookie("nombre","dulce", "5");
  //cookie.innerHTML=leetCookie("nombre");
  cookie.innerHTML = leeCookie("nombre") + " " + leeCookie("apellido");

