/****************** Html Elements *******************/
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
const favouriteSongs = document.querySelector('#favouriteList');
const songHolder = document.getElementById('downdiv');
const songs = document.getElementsByClassName('song');
const home = document.getElementById('home');
/********* Variables are given below ***************/
/*-------------------------------------------------------- */
let songNo = 0;
let n=0;
let previousNo = songNo;
/*************** Begining Call *******************/
//------------------------------------------
selectSong(songNo);
songListRander(songList);
songStyleChange(songNo, null);

//------------------------------------------
//--------------------------------------------
// console.dir(songThumbnail);
// console.log(infinity);
// console.log(heart);
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
// console.log(songs);



