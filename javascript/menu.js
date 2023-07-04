/******************** Menu List (Main Menu) *****************/
//-----------------------------------------------------------

menu.addEventListener('click',()=>{
   
    songMenu.classList.remove('hidden');
    
})
close.addEventListener('click',()=>{
   
    songMenu.classList.add('hidden');
    
})

/************************ Home Menu ***********************/
//---------------------------------------------------------

home.addEventListener('click',()=>{
    
    songListRander(songList);
    
    })
    
    // console.log(favouriteSongs);
     
    favouriteSongs.addEventListener('click',()=>{
        // const favouriteList = songList.map((data)=>{
        //     if(data.favourite)
        //     {
        //         return data;
        //     }
        // })
        const favouriteList = [];
        for(let i = 0; i< songList.length; i++){
            if(songList[i].favourite)
            {
                favouriteList.push(songList[i])
            }
        }
        // console.log(favouriteList);
    songListRander(favouriteList);
    })