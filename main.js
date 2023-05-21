const play = document.querySelector('#icon2');
const audio = document.querySelector('#audio');
const infinity = document.querySelector('#infinity');
const heart = document.querySelector('#heart');
const mute = document.querySelector('#volume');
// console.log(audio);
// console.log(infinity);
// console.log(heart);
mute.addEventListener('click',()=>{
    mute.classList.toggle('fa-volume-high');
    mute.classList.toggle('fa-volume-xmark');
})
heart.addEventListener('click',()=>{
    heart.classList.toggle('fa-regular');
    heart.classList.toggle('fa-solid');

})
infinity.addEventListener('click',()=>{
    infinity.classList.toggle('loop');
})

play.addEventListener('click',()=>{
   
    if(play.classList.contains('fa-play'))
    {
        audio.play();

    }
    else if(play.classList.contains('fa-pause')){
        audio.pause();

    }
     play.classList.toggle('fa-play');
    play.classList.toggle('fa-pause');
})

