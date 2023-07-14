/****************** Next Button *****************/
//-----------------------------------------------------

nextBtn.addEventListener('click',()=>{
    if(songNo >= songList.length-1) return;
    previousNo=songNo;
    songNo += 1;
    selectSong(songNo);
    songs[previousNo].classList.remove('active');
    audio.play();
// console.dir(audio);
songStyleChange(songNo,previousNo);
heartCheck();
    // console.log(songNo);
})

/********************** Previous Button *********************/
//-----------------------------------------------------------

previousBtn.addEventListener('click',()=>{
    if(songNo < 0) return;
    previousNo=songNo;
    songNo -= 1;
    selectSong(songNo);
    songs[previousNo].classList.remove('active');
    audio.play();
    songStyleChange(songNo,previousNo);
    heartCheck();

})

/*********************** Play Button *********************/
//---------------------------------------------------------

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

/**************** Infinity Button (Repeat Song) **************/
//------------------------------------------------------------

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
/****************** Mute Button (Sound Off) ******************/
//-------------------------------------------------------------

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

/**************** Heart Button (Favourite List) ***************/
//-------------------------------------------------------------

heart_btn.addEventListener('click',()=>{
    heart.classList.toggle('fa-regular');
    heart.classList.toggle('fa-solid');
   
    if(heart.classList.contains('fa-solid'))
    {
        songList[songNo].favourite = true;
        // console.log(songList[songNo].favourite);
    }
    else{
        songList[songNo].favourite = false;
        // console.log(songList[songNo].favourite);
    }

})

