let boton1 = document.getElementById("boton-1")
let cambio1 = document.getElementById("cambio-1")

boton1.addEventListener("click", ()=>{cambio1.style.color= "blue"})



let boton2 = document.getElementById("boton-2")

boton2.addEventListener("click", ()=>{

cambio2 = document.getElementById("cambio-2").value;

document.getElementById("texto-2").innerHTML += " " + cambio2;
cambio2 = document.getElementById("cambio-2").value = "";
})


let boton3 = document.getElementById("boton-3")
boton3.addEventListener("click",()=>{

cambio31 = document.getElementById("cambio-3.1").value;
cambio32 = document.getElementById("cambio-3.2").value;

document.getElementById("cambio-3.3").innerHTML = cambio31 + cambio32;
})


function Remover(){
    let cambio4 = document.getElementById("cambio-4");
    cambio4.remove(cambio4.selectedIndex);
}

function play(){
    location.href="https://www.youtube.com/watch?v=vRPCAAUBMms&ab_channel=Eve"

}

let boton6 = document.getElementById("boton-6")
let cambio6 = document.getElementById("cambio-6")

function Alerta(){
    alert(document.getElementById("cambio-3.3").innerHTML);
}

boton7 = document.getElementById("boton-7")
boton7.addEventListener("click", () => {
    console.log(document.getElementById("cambio-3.3").innerHTML);

})


function check(){
if (Check1.checked) {
    document.getElementById("Texto-3").innerHTML+= "Marcado";

  } else {
    document.getElementById("Texto-3").innerHTML+= "Desmarcado";
  }
}

function radio(){
    if (Radio1.checked) {
        document.getElementById("Texto-4").innerHTML+= "Marcado";
    
      } else {
        document.getElementById("Texto-4").innerHTML+= "Desmarcado";
    }
}



function Numero(){
    const notnum = document.getElementById("NotNum").value;
    if (/\d/.test(notnum)){
    alert("Solo se permiten teclas");

    }else{

    }
}

    

