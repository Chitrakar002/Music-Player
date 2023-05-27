const play = document.querySelector('#icon2');
const audio = document.querySelector('#audio');
const infinity = document.querySelector('#infinity');
const heart = document.querySelector('#heart');
const mute = document.querySelector('#volume');
const mute_btn = document.querySelector('#volume_btn');
const heart_btn = document.querySelector('#heart_btn');
const play_btn = document.querySelector('#play_btn');
const nextBtn = document.querySelector('#nextBtn');
const previousBtn = document.querySelector('#previousBtn');
//Song Details Selection
const songTitle = document.querySelector('#songTitle');
const songThumbnail = document.querySelector('#songThumbnail');
const singerName = document.querySelector('#singerName');
const movieName = document.querySelector('#movieName');
const menu = document.querySelector('#menu');
const bar = document.querySelector('#bar');

// console.dir(songThumbnail);
// console.log(infinity);
// console.log(heart);
mute_btn.addEventListener('click',()=>{
    mute.classList.toggle('fa-volume-high');
    mute.classList.toggle('fa-volume-xmark');
    if(mute.classList.contains('fa-volume-high'))
    {
        audio.muted = false;
    }
    else if(mute.classList.contains('fa-volume-xmark'))
    {
        audio.muted = true;
    }
   
})
heart_btn.addEventListener('click',()=>{
    heart.classList.toggle('fa-regular');
    heart.classList.toggle('fa-solid');

})
infinity.addEventListener('click',()=>{
    infinity.classList.toggle('loop');
    if(infinity.classList.contains('loop'))
    {
        audio.loop = true;
    }
    else{
        audio.loop = false;
    }
})
play_btn.addEventListener('click',()=>{
    // audio.autoplay = true; 
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

function selectSong(index){
    songThumbnail.src = songList[index].songImage;
songTitle.textContent = songList[index].songName;
movieName.textContent = songList[index].movieName;
singerName.textContent = songList[index].singer;
audio.src = songList[index].songLink;
}
let songNo = 0;
selectSong(songNo);
bar.value = audio.currentTime;
setInterval(()=>{
    
    if(bar.value == 100){
        // if(infinity.classList.contains('loop'))
        if(audio.loop = true)
        {
            selectSong(songNo);
            audio.play(); 
            
        }
        else {
            songNo += 1;
            selectSong(songNo);
            audio.play();
        }

    }
    if(audio.paused == false){
        // console.log("kuki");
     play.classList.add('fa-pause');
     play.classList.remove('fa-play');

    }
    else{
        play.classList.add('fa-play');
     play.classList.remove('fa-pause');
    }
    let a = audio.duration/100;
    let barTime = audio.currentTime/a;
    bar.value = barTime;

    // console.log(a);
},1000);
bar.addEventListener('change',()=>{
    audio.currentTime = bar.value * audio.duration/100;
    audio.play();
})
nextBtn.addEventListener('click',()=>{
    if(songNo >= songList.length-1) return;
    songNo += 1;
    selectSong(songNo);
    audio.play();
console.dir(audio);

    // console.log(songNo);
})
previousBtn.addEventListener('click',()=>{
    if(songNo < 0) return;
    songNo -= 1;
    selectSong(songNo);
    audio.play();
})
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-xmark');
    menu.classList.toggle('playList');
    
})

// console.log(e.value);
// bar.addEventListener('change',()=>{
//     audio.currentTime = bar.value*a;
// })