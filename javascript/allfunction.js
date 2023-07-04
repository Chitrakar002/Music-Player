/**************** All functions are given below**********************/

/***************** 1. For Selecting Song**********************/
//-------------------------------------------------------------

function selectSong(index){
    songThumbnail.src = songList[index].songImage;
songTitle.textContent = songList[index].songName;
movieName.textContent = songList[index].movieName;
singerName.textContent = songList[index].singer;
audio.src = songList[index].songLink;
}

/********************** 2. For Checking Heart ***************/
//------------------------------------------------------------

function heartCheck(){
    if(songList[songNo].favourite)
    {
        heart.classList.add('fa-solid');
        heart.classList.remove('fa-regular');
    }
    else
    {
        heart.classList.remove('fa-solid');
        heart.classList.add('fa-regular');
    }
}

/****************** 3. Song List Creation *********************/
//--------------------------------------------------------------

function songCreation(imgLink, titleName, movieName, singerName){
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
    return songDiv;
    }

/*********** 4. For display songlist (exception main list)***************/
//----------------------------------------------------------

function songListRander(list){
        songHolder.innerHTML=" ";
        n=0;
    list.forEach((ele)=>{
        let element=songCreation(ele.songImage, ele.songName, ele.movieName, ele.singer);  
    element.dataset.idNo = n;
        element.addEventListener("click",(e)=>{
            previousNo = songNo;
            songNo =(Number(e.currentTarget.dataset.idNo));
            // console.log(typeof(songNo));
             selectSong(songNo);
            songs[previousNo].classList.remove('active');
            songStyleChange(songNo, previousNo);
            audio.play();
            heartCheck();
            })
        n++;
    })
    }

    /********************** 5. Time Converter ********************/
    //-------------------------------------------------------------

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

    /***************** 6. Song Style Change for heart and home *******************/
    //---------------------------------------------------------------
    
    function songStyleChange(currentNo, PrevNo){
        songs[currentNo].classList.add('active');
            if(PrevNo){
                songs[PrevNo].classList.remove('active');
            }
    }