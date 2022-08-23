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

// Function de creado de Imagenes //

const renderHTMLimagenes = (imagen , contenedor)=>{
    contenedor.innerHTML= " ";
        for (let imagenDul of imagen){
        const imagenInnerHTML= `<div class="imagenClienteFelices">
                 <div>
                     <img src="${imagenDul.img}" alt="" height= "350px">
                </div>
          </div>
        `;
        contenedor.innerHTML += imagenInnerHTML;
    } 

}

const imagenesTres = JSON.parse(dataImagenes);
const imagenesDos= document.getElementById("js-imagenes");

renderHTMLimagenes  (imagenesTres , imagenesDos);