//formulario de contacto
function validar (){
    let bandera = false;

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let aporte = document.getElementById("aporte").value;

    if(nombre ==""|| nombre.length >50){
        document.getElementById("errorNombre").style.display = "block";
        bandera = true;
    }

    let patEmail =/^\w+@\w+\.(com|edu|ar)/;
    if(email ==""|| !patEmail.test(email)){
        document.getElementById("errorEmail").style.display = "block";
        bandera = true;
    }

    let patTel =/[0-9]{10}/;
    if(telefono ==""|| !patTel.test(telefono)|| isNaN(telefono)){
        document.getElementById("errorTel").style.display = "block";
        bandera = true;
    }

    if(aporte ==""|| aporte.length > 300){
        document.getElementById("errorAporte").style.display = "block";
        bandera = true;
    }

    if(!bandera){
        let resultado = document.getElementById("enviado");
        let txtIngresado = document.createElement ('p')
        txtIngresado.innerHTML = `Tu nombre: ${nombre}<br>Tu email: ${email} <br>Tu teléfono: ${telefono} <br>Tu aporte: ${aporte}`;
        resultado.appendChild(txtIngresado);
        resultado.style.display ="block";

        document.getElementById("nombre").value="";
        document.getElementById("email").value="";
        document.getElementById("telefono").value="";
        document.getElementById("aporte").value="";

    }
    
    return false
}

function limpiar(e){
    let errorSpan = e.target.nextSibling;
    errorSpan.style.display="none";
}

//agregar clase active al nav
const links = document.querySelectorAll('nav a');

for (link of links){
    if (link.href === window.location.href){
        link.classList.add('activa');
        break;
    }
}

// script de carrousel

    const imagenes = ['Imagenes/argonath.jpg','Imagenes/Hobbiton.jpg','Imagenes/Imagen1.jpg','Imagenes/casa.jpeg','Imagenes/elUnico.jpeg','Imagenes/mapa.jpeg','Imagenes/marchaComunidad.jpeg','Imagenes/smaug.jpeg', 'Imagenes/valle.jpeg'];

    let index=0;
    const imagen = document.getElementById("imagen");

    imagen.src=imagenes[index];

    function aLaDerecha(){
        index ++;
        if(index>imagenes.length-1){
            index = 0;
        }
        imagen.src=imagenes[index];
    }

    function aLaIzquierda(){
        index--;
        if(index<0){
            index = imagenes.length-1;
        }
        imagen.src=imagenes[index];
    }
    