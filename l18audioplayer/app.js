// Get UI

const getaudioscreen = document.getElementById('audioscreen');
const playbtn = document.getElementById('play'),
    prevbtn = document.getElementById('prev'),
    nextbtn = document.getElementById('next'),
    stopbtn = document.getElementById('stop');
const getprogress = document.getElementById('progress'),
    getprogressbar = document.getElementById('progress-bar');
const getvolprogress = document.getElementById('volumeprogress');
const getdisplaytime = document.getElementById('displaytime');

const audios = ["sample1",'sample2',"sample3"];

let curridx = 0;
console.log(audios[curridx]); // sample1



// loadaudio(audios[curridx]);

function loadaudio(audio){
    getaudioscreen.src = `./source/${audio}.mp3`;
}


function playaudio(){
    playbtn.querySelector("i.fas").classList.remove("fa-play");
    playbtn.querySelector("i.fas").classList.add("fa-pause");

    getaudioscreen.play();//default function

}


function pauseaudio(){
    playbtn.querySelector("i.fas").classList.add("fa-play");
    playbtn.querySelector("i.fas").classList.remove("fa-pause");

    getaudioscreen.pause();//default function
    
}


function playandpauseaudio(){

    //paused default keywork for audio/video
    if(getaudioscreen.paused){
        getaudioscreen.play();
    }
    else{
        getaudioscreen.pause();
    }
}


function nextaudio(){
    curridx++;
    if(curridx>audios.length-1)
    {
        curridx=0;
    }
    loadaudio(audios[curridx]);
    playaudio();
}


function previousaudio(){
    curridx--;
    if(curridx<0)
    {
        curridx=audios.length-1;
    }
    loadaudio(audios[curridx]);
    playaudio();
}


function updateprogress(e){

    //for audio and video
    // console.log(e.target);
    // console.log(e.target.duration);
    // console.log(e.target.currenttime);

    // const getduration =e.target.duration;
    // const getcurrenttime =e.target.currentTime;
    // console.log(getcurrenttime,getcurrenttime);


    // const {duration,currentTime}=e.target;
    // console.log(duration,currentTime);

    const {duration}=e.target;
    const {currentTime}=e.target;
    // console.log(duration,currentTime);

    if(currentTime===0){
        getprogressbar.style.width="0%";

    }else{
        const progresspercent=(currentTime/duration)*100;
        // console.log(progresspercent);
        getprogressbar.style.width=`${progresspercent}%`

    }


    //backward
    const min =Math.floor((duration-currentTime)/60);
    const secs =Math.floor((duration-currentTime)%60);

    const minutevalue=min.toString().padStart(2,"0");//padStart(count,formatconcate) need to be string // to fixed to be number
    const secsvalue=secs.toString().padStart(2,"0");

    getdisplaytime.innerText=`${minutevalue}:${secsvalue}`;

   //forward
//    const min =Math.floor(currentTime/60);
//    const secs =Math.floor(currentTime%60);

//    const minutevalue=min.toString().padStart(2,"0");
//    const secsvalue=secs.toString().padStart(2,"0");

//    getdisplaytime.innerText=`${minutevalue}:${secsvalue}`;

}

function stopaudio(){
    getaudioscreen.currentTime=0;
    getprogressbar.style.width=`${0}%`;
    pauseaudio();
}


function volumncontrol(){
    console.log(getvolprogress.value);

        //volume default key from audio/Video
        //0 to 1 (default
        //1 is 100%
        //0.5 is 50%
        
        
        getaudioscreen.volume=getvolprogress.value/100;
}

function progressaudioclick(e){
    // console.log("hi");
    // console.log(e.target);
    // console.log(this);

    const width =this.clientWidth;
    // console.log(width);

    
    const clickx=e.offsetX;
    console.log(clickx);

    const getduration=getaudioscreen.duration;

    getaudioscreen.currentTime=(clickx/width) * getduration;

}





getaudioscreen.addEventListener("timeupdate",updateprogress);
getaudioscreen.addEventListener("play",playaudio);
getaudioscreen.addEventListener("pause",pauseaudio);



playbtn.addEventListener("click",playandpauseaudio);
nextbtn.addEventListener("click",nextaudio);
prevbtn.addEventListener("click",previousaudio);
stopbtn.addEventListener("click",stopaudio);
getvolprogress.addEventListener("change",volumncontrol);
getprogress.addEventListener("click",progressaudioclick);