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



// console.dir(songThumbnail);
// console.log(infinity);
// console.log(heart);
// console.dir(audio);
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
nextBtn.addEventListener('click',()=>{
    if(songNo >= songList.length-1) return;
    songNo += 1;
    selectSong(songNo);
    audio.play();
    console.log(songNo);
})
previousBtn.addEventListener('click',()=>{
    if(songNo < 0) return;
    songNo -= 1;
    selectSong(songNo);
    audio.play();
})