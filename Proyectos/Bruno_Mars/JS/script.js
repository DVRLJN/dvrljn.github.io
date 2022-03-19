

// let audio = document.getElementById('audio');

let playPauseBTN = document.getElementById('play');
let reinicio = document.getElementById('reiniciar');
var estado = document.getElementById('estado');
let next = document.getElementById('next');
let back = document.getElementById('back')
let titleSong = document.getElementById('title__song');
let inicio = document.getElementById('inicio');
let barras = document.getElementById('barras');
let player = document.getElementById('player');
let lista = document.getElementById('lista');
let count = 0;
let playList = [
    {
    name : 'Young Girls',
    path : '/audio/Bruno_Mars_Young_Girls.mp3'
    },
    {
    name : 'Locked Out Heaven',
    path : '/audio/Bruno_Mars_Locked_Out_Of_Heaven.mp3'
    },
    {
    name : 'Gorilla',
    path : '/audio/Gorilla.mp3'
    },
    {
    name : 'Treasure',
    path : '/audio/Treasure.mp3'
    },
    {
    name : 'When I Was Your Man',
    path : '/audio/When_I_Was_Your_Man.mp3'
    },
    {
    name : 'Natalie',
    path : '/audio/Natalie.mp3'
    },
    {
    name : 'Show Me',
    path : '/audio/Show_Me.mp3'
    },
    {
    name : 'Money Make Her Smile',
    path : '/audio/Money_Make_Her_Smile.mp3'
    },
    {
    name : 'If I Knew',
    path : '/audio/If_I_Knew.mp3'
    }
 ];

//reproducir, pausar audio & cambiar iconos
playPauseBTN.addEventListener ('click', function (e) { 
    
     if(audio.paused) {
        estado.className='fas fa-pause';      
        audio.play();
     }else if(audio.ended){
        estado.className='fas fa-play';
     }else{
        estado.className='fas fa-play';
         audio.pause();
     } 
;
});

//Siguiente cancion
next.addEventListener('click', function(e){
    if(playList.length-1==count){
        count=-1;
    }
    count++;
    audio.pause();
    currentTime=0; 
    audio.src=playList[count].path;
    titleSong.innerHTML=playList[count].name;
    audio.play()  
});

//Anterior cancion
back.addEventListener('click', function(e){
    if(count==0){
        audio.ended;
        currentTime=0; 
    }else{
        count--;
        audio.pause();
        currentTime=0; 
        audio.src=playList[count].path;
        titleSong.innerHTML=playList[count].name;
        audio.play()
    }  
});

//empezar audio desde el principio
reinicio.addEventListener('click', function(e){
    if(audio.paused||audio.ended||audio.play){
        audio.currentTime = 0;
        estado.className='fas fa-stop';

    }
});



//efecto transicion barra

barras.addEventListener('click', function(e){
$("#card").flip();

});

