/************ Checking the running status ******************/
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
          previousNo = songNo;
          songNo += 1;
          selectSong(songNo);
          songs[previousNo].classList.remove('active');
          audio.play();
          songStyleChange(songNo, previousNo);
         heartCheck();

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
  //-------------------------------------------------
////////*convert bar to 100.*----------------------////////
  let a = audio.duration/100;
  let barTime = audio.currentTime/a;
  bar.value = barTime;
  /////*******************************************//////
  //-----------------------------------------------------
  if(!audio.duration)
  {
      totalTime.textContent = "00.00";
  }
      // console.log(a);
},1000);
//*********** for change audio time as bar value **********//
bar.value = audio.currentTime;
bar.addEventListener('change',()=>{
    audio.currentTime = bar.value * audio.duration/100;
    audio.play();
})