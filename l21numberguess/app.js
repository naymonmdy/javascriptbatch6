//UI

const minnum = document.querySelector(".minnumber"),
  maxnum = document.querySelector(".maxnumber"),
  getinput = document.querySelector("#guessnumber"),
  getbtn = document.querySelector("#btn"),
  message1 = document.querySelector(".message1"),
  message2 = document.querySelector(".message2"),
  getgameform = document.getElementById("gameform");

const getmicbtn = document.getElementById("mic-btn");
const getvocctn = document.getElementById("voice-container");

const min = 1,
  max = 5,
  winningnum = 5;
// winningnum = randomnum(min, max);

let gameleft = 3;

minnum.textContent = min;
maxnum.innerText = max;

//For Chrome Browser support speech
window.SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec=new window.SpeechRecognition;
getmicbtn.addEventListener("click",function(){

  // console.log(getrec);
  //start () default function from recogintion api
  getrec.start();

  getrec.addEventListener("result",(e)=>taking(e));

});

function taking(ele){
  // console.log(ele);
  // console.log(ele.results[0][0].transcript);

  const micresult=ele.results[0][0].transcript;
  // console.log(micresult);


  micmessage(micresult);
}

function micmessage(msg){
  getvocctn.innerHTML=`<span>Did You Say!!! ${msg} </span>`;
}


getbtn.addEventListener("click", function (e) {
  // console.log('hay i am working');
  // console.log(getinput.value);
  // console.log(typeof getinput.value);

  // let guess = Number(getinput.value);
  // let guess = +getinput.value;
  let guess = parseInt(getinput.value);

  // console.log(guess);
  // console.log(typeof guess);

  if (guess < min || guess > max || isNaN(guess)) {
    // console.log(`Please enter a number between ${min} and ${max}`);
    // message2.textContent = `Please enter a number between ${min} and ${max}`;
    setmessage2(`Please enter a number between ${min} and ${max}`, "red");
  }

  if (guess == winningnum) {
    //Gaemover Won
    // console.log("You Won!");
    // disabled input
    // getinput.disabled = true;
    // getinput border color to green
    // getinput.style.borderColor = "green";
    //message1
    // message1.textContent = `${winningnum} is correct!! You Won!`;
    // message1.style.color = "green";
    // setmessage1(`${winningnum} is correct!! You Won!`, "green");
    //playagain?
    // getbtn.value = "Play Again";
    gameover(true, `${winningnum} is correct!! You Won!`);
  } else {
    //gameleft;
    gameleft -= 1;
    // console.log(gameleft);

    //Gameover Lose
    if (gameleft == 0) {
      //Gameover Lost
      // console.log("You Lost!");

      // disabled input
      // getinput.disabled = true;

      // getinput border color to red
      // getinput.style.borderColor = "red";

      //message1
      // message1.textContent = `Game Over! You Lost! The correct nummber is ${winningnum}.`;
      // message1.style.color = "red";

      // setmessage1(
      //   `Game Over! You Lost! The correct nummber is ${winningnum}.`,
      //   "run",
      // );

      //playagain?
      // getbtn.value = "Play Again";
      gameover(
        false,
        `Game Over! You Lost! The correct nummber is ${winningnum}.`,
      );
    } else {
      //Continue Game

      // getinput border color to red
      getinput.style.borderColor = "red";

      //message1
      // message1.textContent = `${guess} is not correct. ${gameleft} guess left.`;
      // message1.style.color = "blue";
      setmessage1(`${guess} is not correct. ${gameleft} guess left.`, "blue");

      //clear getinput old value
      getinput.value = "";

      //auto focus getinput
      getinput.focus();
    }
  }

  e.preventDefault();
});

// gameover(true, "your message");

function setmessage1(msg, color) {
  message1.textContent = msg;
  message1.style.color = color;
}

function setmessage2(msg, color) {
  message2.textContent = msg;
  message2.style.color = color;

  setTimeout(function () {
    message2.textContent = "";
  }, 2000);
}

function gameover(won, msg) {
  let color;

  won === true ? (color = "green") : (color = "red");

  //disabled input
  getinput.disabled = true;

  //getinput border color to red
  getinput.style.borderColor = color;

  //message1
  setmessage1(msg, color);

  //play again?
  getbtn.value = "Play Again?";

  //Add Class
  // getbtn.className = "btn playagain";
  getbtn.classList.add("playagain");
}

getgameform.addEventListener("mousedown", function (e) {
  // console.log(e.target);

  // e.target.classList.contains('playagain')
  if (e.target.className == "btn playagain") {
    // console.log("i am working");

    window.location.reload();
  }
});

function randomnum(min, max) {
  let getrdm = Math.floor(Math.random() * (max - min) + min);
  return getrdm;
}

// console.log(randomnum(1,10));
console.log(winningnum);
