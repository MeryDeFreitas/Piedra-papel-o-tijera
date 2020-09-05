let userChosen
let computerChosen

var result = results()

const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const BotonRefrescar = document.getElementById('Refrescar')

BotonRefrescar.addEventListener('click',Refrescar)

//Esto definira el resultado que obtendra la computadora, se multiplica por 3 para asegurarnos cubrir las 3 opciones (Ver excel)
const randomNumber = Math.round(Math.random() * (3))

//Lo que escoge el usuario
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChosen = e.target.id
    generatedComputerChoice()
    results()
    Imagen()
    displayResult.innerHTML = result
    foto1.innerHTML = ImagenComputadora
    foto2.innerHTML = ImagenUsuario
}))

//Obtener la elección de la computadora, añadi el valor 0 y 4 para cubrir todos los numeros que salen al multiplicar por 3
//Asi evito el undefined

function generatedComputerChoice(){
    if (randomNumber===0){
        var ImagenComputadora = document.getElementById('foto1');
        foto1.src="Piedra.JPG";
        return computerChosen = 'Piedra'
    } else if (randomNumber===1){
        var ImagenComputadora = document.getElementById('foto1');
        foto1.src="Piedra.JPG";
        return computerChosen = 'Piedra'
    } else if (randomNumber===2){
        var ImagenComputadora = document.getElementById('foto1');
        foto1.src="Papel.JPG";
        return computerChosen = 'Papel'
    } else if (randomNumber===3){
        var ImagenComputadora = document.getElementById('foto1');
        foto1.src="Tijera.JPG";
        return computerChosen = 'Tijera'
    }  else if (randomNumber===4){
        var ImagenComputadora = document.getElementById('foto1');
        foto1.src="Tijera.JPG";
        return computerChosen = 'Tijera'
    }
}

//Para cambiar la imagen dependiendo del valor que escogió el usuario
function Imagen(){
    if (userChosen == "Piedra"){
        var ImagenUsuario = document.getElementById('foto2');
        foto2.src="Piedra.JPG";   
    } else if (userChosen == "Papel"){
        var ImagenUsuario = document.getElementById('foto2');
        foto2.src="Papel.JPG";   
    }else if (userChosen == "Tijera"){
        var ImagenUsuario = document.getElementById('foto2');
        foto2.src="Tijera.JPG";   
    }
}

//Obtener los resultados

function results(){
    if(computerChosen == userChosen) {
        return result = '¡Es un empate!'
    } else if (computerChosen === 'Piedra' && userChosen === 'Papel'){
        return result = '¡Ganaste!'
    }else if (computerChosen === 'Piedra' && userChosen === 'Tijera'){
        return result = '¡Perdiste!'
    }else if (computerChosen === 'Papel' && userChosen === 'Piedra'){
    return result = '¡Perdiste!'
    }else if (computerChosen === 'Papel' && userChosen === 'Tijera'){
        return result = '¡Ganaste!'
    }else if (computerChosen === 'Tijera' && userChosen === 'Piedra'){
    return result = '¡Ganaste!'
    }else if (computerChosen === 'Tijera' && userChosen === 'Papel'){
        return result = '¡Perdiste!'
    }
}

//Para refrescar la página
function Refrescar(){
    document.location.reload(); 
}






