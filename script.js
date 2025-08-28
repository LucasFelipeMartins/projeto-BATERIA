document.querySelector('button').addEventListener('click', combinação);

document.addEventListener('keyup', (event) => {

    tocarMusica(event.code.toLowerCase());

});

function tocarMusica(key){

    let audioTocado = document.querySelector(`#s_${key}`);
    let botaoClick = document.querySelector(`div[data-key="${key}"]`)

    if(audioTocado){
        
        audioTocado.currentTime = 0;
        audioTocado.play();

    } 

    if(botaoClick){

        let tempo = 0;
        botaoClick.classList.add('active');

        setTimeout(() =>{

            botaoClick.classList.remove('active');

        }, 300)

    }

}

function combinação(){

    let tempo = 0;
    let letras = document.querySelector('input').value;    
    let letrasArray = letras.split('');

    for(let i of letrasArray){

        setTimeout(() => 
            tocarMusica(`key${i}`), tempo);

        tempo += 250;
    }

}