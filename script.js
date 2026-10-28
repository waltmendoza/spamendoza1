//Script para el Menu
let botonera=document.querySelector(".botonera");
const llamar=()=>{
        botonera.classList.toggle("botonera-open");
        botonera.style.transition="0.5s";
}
//Script para la Galeria
let img=document.getElementById("img");
let num=1;
function adelante(){
    num++;
    if(num>8)
    (num=1);
img.src="img/"+"spa0"+num+".jpg";
}
num--;
const atras=()=>{
    if(num<1)
    (num=8);
 img.src="img/"+"spa0"+num+".jpg";   
}
//Script del preloader
let preloader=document.getElementById("preloader");
setTimeout(function(){
    preloader.style.transition="0.5s";
    preloader.style.visibility="hidden";
},2000)
//Script del Header
function Scroll(){
    let header=document.getElementById("header");
    let subir=document.getElementById("subir");
    let posy=window.pageYOffset;
    if(posy>300){
        header.style.background="purple";
        header.style.transition="0.5s";
        subir.style.display="block";
    }
    else{
        header.style.background="none";
        header.style.transition="0.5s";
        subir.style.display="none";
    }
}
window.addEventListener("scroll", Scroll);
//Script para Clientes
    let imagenes=[];
    imagenes[0]="img/shakira.jpeg";
    imagenes[1]="img/thalia.jpeg";
    imagenes[2]="img/jennifer.jpg";
    let CambioImagenes=0;
    function Cambiar(){
        document.imagen.src=imagenes[CambioImagenes];
        if(CambioImagenes<2){
            CambioImagenes++;
        }else{
            CambioImagenes=0;
        }
    }
    setInterval(Cambiar, 3000);
window.addEventListener("load",Cambiar);