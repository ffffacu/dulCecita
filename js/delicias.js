window.onload= function(){
    var contenedor = document.getElementById ("contenedorCargaUno");

    contenedor.style.visibility= 'hidden' ;
    contenedor.style.opacity ='0';
}

document.getElementById("btomArriba").addEventListener("click", botonUp);

function botonUp(){
    let botonArriba = document.documentElement.scrollTop;
    if (botonArriba > 0){
        window.scrollTo (0, 0);
    }
}

btomArriba =   document.getElementById("btomArriba");

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if (scroll > 500){
        btomArriba.style.transform = "scale(1)";
    }else if (scroll <500){
    btomArriba.style.transform = "scale(0)";
    }
}


