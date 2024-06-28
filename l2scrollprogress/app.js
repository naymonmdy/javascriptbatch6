//UI
const getprogressbar=document.getElementById('progress-bar');

window.onscroll=function(){
  // console.log('hay');

  scrollpoint();
}

function scrollpoint(){
  // console.log("hay");

  //To get window heigt
  let getscrolltop=document.documentElement.scrollTop;
  // console.log(getscrolltop);


  //To get window heigt
  let getclientheight=document.documentElement.clientHeight;
  // console.log(getclientheight);


   //To get window heigt
   let getscrollheight=document.documentElement.scrollHeight;
  // console.log(getscrollheight);
   


   let calheight =getscrollheight-getclientheight;

   let getfinal=Math.floor((getscrolltop/calheight)*100);


  getprogressbar.style.width=`${getfinal}%`;
}


function printme(){
  // console.log('hay');

  window.print();//system default function
}