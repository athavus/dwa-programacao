function abrirIFPB() {
    window.open("https://www.ifpb.edu.br/campinagrande");
}

function abrirEditais() {
    window.open("https://docs.google.com/document/d/1qe5uaKJ-hChtLu7NMXQoQupkloWYx4kUMzHp6jGPQ2c/edit")
}

function detectar_mobile() { 
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    } else {
        return false;
    }
}

var input = detectar_mobile()

var fonte = document.getElementById("mainSlider");
var home = document.getElementById("home");
var home2 = document.getElementById("home2");
var alerta = document.getElementById("alerta");
var valida = document.getElementById("valida");
var alerta2 = document.getElementById("alerta2");

if (input === true) {
    fonte.style.fontSize = "10px";
} else {
    home.style.fontSize = "24px";
    home2.style.fontSize = "24px";
    valida.style.marginLeft = "45%";
}

var email = document.getElementById('email');
var nume = document.getElementById('numero');
var regex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
var regex2 = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/

var c1 = document.getElementById('name');
var c2 = document.getElementById('numero');
var c3 = document.getElementById('email');
var c4 = document.getElementById('message');


function tryIt() {
    alerta.style.display = "none";
    alerta2.style.display = "none";
  
    var em = false;
    var num = false;

    if (c1.value === "" || c2.value === "" || c3.value === "" || c4.value === "") {
        alerta.style.display = "block";
    } else {
        if (regex.test(email.value)) {
            em = true
            alerta2.style.display = "block";
            alerta.style.display = "none";
        } else {
            alerta.style.display = "block";
            alerta2.style.display = "none";
        }
    
        if (regex2.test(nume.value)) {
            num = true;
            alerta2.style.display = "block";
            alerta.style.display = "none";
        } else {
            alerta.style.display = "block";
            alerta2.style.display = "none";
        }
    }
    
}