// Get UI

const getcontainer = document.querySelector(".container");
const getvideoscreen = document.getElementById("videoscreen");
const playbtn = document.getElementById("play"),
  prevbtn = document.getElementById("prev"),
  nextbtn = document.getElementById("next"),
  stopbtn = document.getElementById("stop");
const getprogress = document.getElementById("progress"),
  getprogressbar = document.getElementById("progress-bar");
const getdisplaytime = document.getElementById("displaytime");
const gettitle = document.getElementById("title");
const getopenfullscreen = document.querySelector(".openfullscreen");
const getclosefullscreen = document.querySelector(".closefullscreen");

const videos = ["samplevideo1", "samplevideo2"];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(video) {
  getvideoscreen.src = `./source/${video}.mp4`;
  gettitle.innerText = video;
}

function playvideo() {
  playbtn.querySelector("i.fas").classList.remove("fa-play");
  playbtn.querySelector("i.fas").classList.add("fa-pause");

  getvideoscreen.play();
}
function pausevideo() {
  playbtn.querySelector("i.fas").classList.remove("fa-pause");
  playbtn.querySelector("i.fas").classList.add("fa-play");

  getvideoscreen.pause();
}
function playpausevideo() {
  if (getvideoscreen.paused) {
    playvideo();
  } else {
    pausevideo();
  }
}

function nextvideo() {
  curridx++;
  if (curridx > videos.length - 1) {
    curridx = 0;
  }
  loadvideo(videos[curridx]);
  playvideo();
}
function preiousvideo() {
  curridx--;
  if (curridx < 0) {
    curridx = videos.length - 1;
  }
  loadvideo(videos[curridx]);
  playvideo();
}

function stopvideo() {
  getvideoscreen.currentTime = 0;
  pausevideo();
}

function updateprogress(e) {
  // const currentTime = e.target.currentTime;
  // const duration=e.target.duration;

  // const {currentTime} =e.target;
  // const {duration} =e.target;
  // const { currentTime, duration } = e.target;

  // const [currentTime, duration] = [e.target.currentTime, e.target.duration];
  const [currentTime, duration] = [
    e.srcElement.currentTime,
    e.srcElement.duration,
  ];

  if (getvideoscreen.currentTime === 0) {
    getprogressbar.style.width = "0%";
  } else {
    const progresspercent = (currentTime / duration) * 100;
    getprogressbar.style.width = `${progresspercent}%`;
  }
}
let getmin = Math.floor(getvideoscreen.currentTime / 60);
let getsecs = Math.floor(getvideoscreen.currentTime % 60);

// if (getmin < 10) {
//   getmin = "0" + getmin;
//   getmin = "0" + String(getmin);
// }
// if (getsecs < 10) {
//   getmin = "0" + getsecs;
//   getmin = "0" + String(getsecs);
// }

const minutevalue = getmin.toString().padStart(2, "0");
const secondvalue = getsecs.toString().padStart(2, "0");

getdisplaytime.innerHTML = `${minutevalue}:${secondvalue}`;

function setprogress(e) {
  const getclientwidth = e.target.clientWidth;
  const getclickx = e.offsetX;
  const duration = getvideoscreen.duration;

  getvideoscreen.currentTime = (getclickx / getclientwidth) * duration;
}

function openfullscreen() {
  if (getcontainer.requestFullscreen) {
    getcontainer.requestFullscreen(); //standard
  } else if (getcontainer.mozRequestFullscreen) {
    getcontainer.mozRequestFullscreen(); //firebox
  } else if (getcontainer.webkitRequestFullscreen) {
    getcontainer.webkitRequestFullscreen(); //chrome,safari,oppara
  } else if (getcontainer.msRequestFullscreen) {
    getcontainer.msRequestFullscreen(); //ie, edga
  }

  getopenfullscreen.style.display = "none";
  getclosefullscreen.style.display = "inline-block";
}
function closefullscreen() {
  if (getcontainer.existFullscreen) {
    getcontainer.existFullscreen(); //standard
  } else if (getcontainer.mozCancelFullscreen) {
    getcontainer.mozCancelFullscreen(); //firebox
  } else if (getcontainer.webkitExistFullscreen) {
    getcontainer.webkitExistFullscreen(); //chrome,safari,oppara
  } else if (getcontainer.msExistFullscreen) {
    getcontainer.msExistFullscreen(); //ie, edga
  }
  getopenfullscreen.style.display = "inline-block";
  getclosefullscreen.style.display = "none";
}

getvideoscreen.addEventListener("timeupdate", updateprogress);
getvideoscreen.addEventListener("ended", nextvideo);

playbtn.addEventListener("click", playpausevideo);
nextbtn.addEventListener("click", nextvideo);
prevbtn.addEventListener("click", preiousvideo);
stopbtn.addEventListener("click", stopvideo);

getprogress.addEventListener("click", setprogress);
getopenfullscreen.addEventListener("click", openfullscreen);
getclosefullscreen.addEventListener("click", closefullscreen);
