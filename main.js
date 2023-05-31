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
const initialTime = document.querySelector('#initialTime');
const totalTime = document.querySelector('#totalTime');
const songMenu = document.querySelector('#songList');
const close = document.querySelector('#close');
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
function timeConvert(time){
    let min  = Math.floor(time/60);
    let sec = Math.floor(time%60);
    let minString;
    let secString;
    if(min<10){
         minString = `0${min}`;
    }
    else{
         minString = `${min}`;

    }
    if(sec<10){
        secString = `0${sec}`;
   }
   else{
        secString = `${sec}`;

   }
    return `${minString}:${secString}`;
}
setInterval(()=>{
    totalTime.textContent=(timeConvert(audio.duration));
    initialTime.textContent=(timeConvert(audio.currentTime));
        if(bar.value == 100){
        if(infinity.classList.contains('loop'))
        // if(audio.loop = true)
        {
            selectSong(songNo);
            audio.play(); 
            
        }
        else if(songNo===songList.length-1){
            play.classList.add('fa-play');
            play.classList.remove('fa-pause');
            songNo = 0;
            selectSong(songNo);
            // return;
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
   
    songMenu.classList.remove('hidden');
    
})
close.addEventListener('click',()=>{
   
    songMenu.classList.add('hidden');
    
})

// /** how to create an element with the help of js and push it to html */
// const div = document.createElement('div'); // use to create an element
// div.classList.add('song'); //add a class name
// // div.id = 'downDiv'; // add an id name
// // console.log(div);
// div.innerText = "all is normal";
// // console.log(songHolder);
// // songHolder.appendChild(div);
// songHolder.prepend(div);

/**
 * 1. Append Child--> add element from the last
 * 2. Prepend Child-->add element to first
 */
function songCreation(imgLink, titleName, movieName, singerName){
const songHolder = document.getElementById('downdiv');
const songDiv = document.createElement('div');
songDiv.classList.add('song');
const listImg = document.createElement('img');
listImg.src = imgLink;
listImg.classList.add('listImage');
songDiv.append(listImg);
const songDet = document.createElement('div');
songDet.classList.add('songDetails');
const titleEle = document.createElement('h3');
titleEle.classList.add('title');
titleEle.innerText= titleName;
const songInfoEle = document.createElement('h3');
songInfoEle.classList.add('songInfo');
songInfoEle.innerText=movieName;
const singerInfoEle = document.createElement('h3');
singerInfoEle.classList.add('singerInfo');
singerInfoEle.innerText= singerName;
songDet.append(titleEle, songInfoEle, singerInfoEle);
songDiv.append(songDet);
songHolder.append(songDiv);
}
songList.forEach((ele)=>{
    songCreation(ele.songImage, ele.songName, ele.movieName, ele.singer);  
})
