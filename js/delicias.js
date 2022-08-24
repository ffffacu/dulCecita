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


//Agregado de Imagenes

const renderHTMLimagenes = (imagen , contenedor)=>{
    contenedor.innerHTML= " ";
        for (let imagenDul of imagen){
        const imagenInnerHTML= `<div class="card">
        <img src="${imagenDul.img}" class="card-img-top" alt="${imagenDul.nombre}">
        <div class="card-body">
          <p>${imagenDul.nombre}</p>
        </div>
      </div>
      <div class="card bg-dark text-white modalDul">
  <img src="..." class="card-img  " alt="...">
</div>
        `;
        contenedor.innerHTML += imagenInnerHTML;
    } 

}

const imagenesTres = JSON.parse(dataTortas);
const imagenesDos= document.getElementById("js-tortasClasicas");

renderHTMLimagenes  (imagenesTres , imagenesDos);


const imagenesCuatro = JSON.parse(dataTortasTematicas);
const imagenesCinco= document.getElementById("js-tortasTematica");

renderHTMLimagenes  (imagenesCuatro , imagenesCinco);

const imagenesSeis = JSON.parse(dataDesayunoso);
const imagenesSiete= document.getElementById("js-desayuno");

renderHTMLimagenes  (imagenesSeis , imagenesSiete);
