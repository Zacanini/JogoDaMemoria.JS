
let letras = [
    'A','B','C','D','E',
    'A','B','C','D','E'
];

let cartas = [...document.querySelectorAll('div .card')];
let posicao = 0;
let cartaClicada = []

viraCartas();

function viraCartas(){
    cartas.forEach(el=> {
    el.addEventListener('click',event=>{
        let cartaSelecionada = event.target
        posicao = cartaSelecionada.getAttribute('posicao')
        cartaSelecionada.innerText = (letras[posicao])
        cartaClicada.push(cartaSelecionada);
        console.log(cartaSelecionada);
        if( cartaClicada.length== 2){
            setTimeout(confereCartas,800);
        }
        
    });
  });
}


function confereCartas() {
    const [carta1, carta2] = cartaClicada;

    if (carta1.innerText === carta2.innerText) {
        if(carta1.innerText === 'A'){
            carta1.classList.add('A');
            carta2.classList.add('A');
            cartaClicada.length = 0;
        }
        if(carta1.innerText === 'B'){
            carta1.classList.add('B');
            carta2.classList.add('B');
            cartaClicada.length = 0;
        }
        if(carta1.innerText === 'C'){
            carta1.classList.add('C');
            carta2.classList.add('C');
            cartaClicada.length = 0;
        }
        if(carta1.innerText === 'D'){
            carta1.classList.add('D');
            carta2.classList.add('D');
            cartaClicada.length = 0;
        }
        if(carta1.innerText === 'E'){
            carta1.classList.add('E');
            carta2.classList.add('E');
            cartaClicada.length = 0;
        }
    }
    else{
        carta1.innerText = 'X';
        carta2.innerText = 'X';
        cartaClicada.length = 0;
    }
    
}




