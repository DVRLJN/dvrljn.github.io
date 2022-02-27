

var audio = document.getElementById('audio');
const playPauseBTN = document.getElementById('play');
const reinicio = document.getElementById('reiniciar');
var estado = document.getElementById('estado');
// audio.play();

// var playList = [
//     {
//         name = 'Young Girls',
//         path = '../audio/Bruno_Mars_Young_Girls.mp3',
       
//     },
//     {
//         name = 'Locked Out Heaven',
//         path = 'audio/Bruno_Mars_Locked_Out_Of_Heaven.mp3',
        
//     }
// ];



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
});
//empezar audio desde el principio
reinicio.addEventListener('click', function(e){
    if(audio.paused||audio.ended||audio.play){
        audio.currentTime = 0;
        estado.className='fas fa-stop';  
    }
});






