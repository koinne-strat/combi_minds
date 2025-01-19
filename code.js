const popup = document.getElementById('PopUp_1');
const popup2 = document.getElementById('PopUp_2');
const popup3 = document.getElementById('PopUp_3');
const popup4 = document.getElementById('PopUp_4');
const popup5 = document.getElementById('PopUp_5');
const popup6 = document.getElementById('PopUp_6');
const popup7 = document.getElementById('PopUp_7');
const popup8 = document.getElementById('PopUp_8');
const popup9 = document.getElementById('PopUp_9');

const Cl_PopUp_1 = document.getElementById('button_1');
const Cl_PopUp_2 = document.getElementById('button_2');
const Cl_PopUp_3 = document.getElementById('button_3');
const Cl_PopUp_4 = document.getElementById('button_4');
const Cl_PopUp_5 = document.getElementById('button_5');
const Cl_PopUp_6 = document.getElementById('button_6');
const Cl_PopUp_7 = document.getElementById('button_7');
const Cl_PopUp_8 = document.getElementById('button_8');
const Cl_PopUp_9 = document.getElementById('button_9');


const Op_PopUp_1 = document.getElementById('arch_1');
const Op_PopUp_2 = document.getElementById('arch_2');
const Op_PopUp_3 = document.getElementById('arch_3');
const Op_PopUp_4 = document.getElementById('arch_4');
const Op_PopUp_5 = document.getElementById('arch_5');
const Op_PopUp_6 = document.getElementById('arch_6');
const Op_PopUp_7 = document.getElementById('arch_7');
const Op_PopUp_8 = document.getElementById('arch_8');
const Op_PopUp_9 = document.getElementById('arch_9');

Op_PopUp_1.onclick = function(){
    popup.style.display = "block";
}
Cl_PopUp_1.onclick = function(){
    popup.style.display = "none";
}

Op_PopUp_2.onclick = function(){
    popup2.style.display = "block";
}
Cl_PopUp_2.onclick = function(){
    popup2.style.display = "none";
}

Op_PopUp_3.onclick = function(){
    popup3.style.display = "block";
}
Cl_PopUp_3.onclick = function(){
    popup3.style.display = "none";
}

Op_PopUp_4.onclick = function(){
    popup4.style.display = "block";
}
Cl_PopUp_4.onclick = function(){
    popup4.style.display = "none";
}

Op_PopUp_5.onclick = function(){
    popup5.style.display = "block";
}
Cl_PopUp_5.onclick = function(){
    popup5.style.display = "none";
}

Op_PopUp_6.onclick = function(){
    popup6.style.display = "block";
}
Cl_PopUp_6.onclick = function(){
    popup6.style.display = "none";
}

Op_PopUp_7.onclick = function(){
    popup7.style.display = "block";
}
Cl_PopUp_7.onclick = function(){
    popup7.style.display = "none";
}

Op_PopUp_8.onclick = function(){
    popup8.style.display = "block";
}
Cl_PopUp_8.onclick = function(){
    popup8.style.display = "none";
}

Op_PopUp_9.onclick = function(){
    popup9.style.display = "block";
}
Cl_PopUp_9.onclick = function(){
    popup9.style.display = "none";
}



const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', function() {
        // Verificamos si el div clicado es el correcto
        if (this.id === 'correcta') {
            this.style.backgroundColor = 'green'; // Color verde para la opción correcta
        } else {
            this.style.backgroundColor = 'red'; // Color rojo para las opciones incorrectas
        }
    });
});


const tars1 = document.getElementById('Tars_1');
const tars2 = document.getElementById('Tars_2');
const tars4 = document.getElementById('Tars_4');

const Op_tare1 = document.getElementById('tarea1');
const Op_tare2 = document.getElementById('tarea2');
const Op_tare3 = document.getElementById('tarea3');
const Op_tare4 = document.getElementById('tarea4');
const Op_tare5 = document.getElementById('tarea5');

const Cl_tare1 = document.getElementById('TarsBtt1');
const Cl_tare2 = document.getElementById('TarsBtt2');
const Cl_tare3 = document.getElementById('TarsBtt3');
const Cl_tare4 = document.getElementById('TarsBtt4');
const Cl_tare5 = document.getElementById('TarsBtt5');


Op_tare1.onclick = function(){
    tars1.style.display = "block";
}
Cl_tare1.onclick = function(){
    tars1.style.display = "none";
}

Op_tare2.onclick = function(){
    tars2.style.display = "block";
}
Cl_tare2.onclick = function(){
    tars2.style.display = "none";
}

Op_tare3.onclick = function(){
    tars2.style.display = "block";
}
Cl_tare3.onclick = function(){
    tars2.style.display = "none";
}

Op_tare4.onclick = function(){
    tars4.style.display = "block";
}
Cl_tare4.onclick = function(){
    tars4.style.display = "none";
}

Op_tare5.onclick = function(){
    tars2.style.display = "block";
}
Cl_tare5.onclick = function(){
    tars2.style.display = "none";
}





function ValidarClave() {
    // Definir la clave correcta
    const claveCorrecta = "33413";

    const claveIngresada = document.getElementById("clave").value;
    const space = document.getElementById("clave");

    if (claveIngresada.length === 5 && /^\d+$/.test(claveIngresada)) {
        if (claveIngresada === claveCorrecta) {
            window.open("https://youtu.be/7lsIHYXOey4?si=YvUkz3TmP3xD65Fa", "_blank");
        } else {
            space.style.backgroundColor = "red";
            alert("Clave incorrecta. Inténtalo de nuevo.");
        }
        
    } else {
        alert("Por favor, ingresa una clave de 5 dígitos.");
        space.style.backgroundColor = "red";
    }
}
