const getcurmonth=document.getElementById("curmonth");
const getcuryear=document.getElementById("curyear");

const getuimonths=document.getElementById("months");
const getuiyears=document.getElementById("years");
const getcaldays=document.getElementById("caldays");

const getmonthbtn=document.querySelector(".month-btn");
const getyearbtn=document.querySelector(".year-btn");

const months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Oct","Sep","Oct","Nov","Dec"];
let startyear=2020;
let endyear=2030;

// console.log(new Date());
//                 // year month day
// console.log(new Date(2023,1,10));// Fri feb 10
// console.log(new Date(2023,0,0));// Sat Dec 31
// console.log(new Date(2023,5,0));// Web May 31
// console.log(new Date(2023,1,10));// Thu Mar 02

let month,year;

window.addEventListener("load",function(){

    let getday=new Date();

    month =getday.getMonth();
    year=getday.getFullYear();

    // console.log(month);//3
    // console.log(year);//2024

    getcurmonth.textContent=months[month];
    getcuryear.textContent=year;

    initmonths();
    inityears();
    initdays();

});

function initmonths(){
    // console.log("I am initmonths");
    getuimonths.innerHTML="";

    for(let i=0;i<months.length;i++){
        const newdiv=document.createElement("div");
        newdiv.textContent=months[i];
        newdiv.classList.add("dropdown-item");
        getuimonths.appendChild(newdiv);

    }



}
function inityears(){
    // console.log("I am inityears");
    getuiyears.innerHTML="";
    for(startyear;startyear<=endyear;startyear++){
        const newdiv=document.createElement("div");
        newdiv.textContent=startyear;
        newdiv.classList.add("dropdown-item");
        getuiyears.appendChild(newdiv);
    }
}
function initdays(){
    // console.log("I am initmonths");
  getcaldays.innerHTML="";
    //                   2024 4
  let tmpdays=new Date(year,month,0);
//   console.log(tmpdays);//Tue Apr 30 2024 00:00:00 GMT+0630 (Myanmar Time)

  let getalldays= alldays(year,month);

  let getprevendday=tmpdays.getDay();
  console.log(getprevendday);//2


  for(let x=0;x<=getprevendday;x++){
    let newlabel=document.createElement("label");
    newlabel.className="day blank";
    console.log(newlabel);
    getcaldays.appendChild(newlabel);
  }

  for(let y=0;y<getalldays;y++){

    let eachday=y+1;
    let newlabel=document.createElement("label");
    newlabel.textContent=eachday;
    newlabel.classList.add("day");

    // console.log(newlabel);
    getcaldays.appendChild(newlabel);

  }

}

function alldays(year,month){

    let curalldays=new Date(year,month+1,0);

    // console.log(curalldays);//Fri May 31 2024 00:00:00 GMT+0630 (Myanmar Time)

    curalldays=curalldays.getDate();
    // console.log(curalldays);//31


    return curalldays;


}



// getyearbtn.addEventListener('click',function(){
//     if(this.lastElementChild.classList.contains('show')){
//         this.lastElementChild.classList.remove('show');
//     }
//     else{
//         this.lastElementChild.classList.add('show');

//     }

// });

// getmonthbtn.addEventListener('click',function(){
//     if(this.lastElementChild.classList.contains("show")){
//         this.lastElementChild.classList.remove("show");
//     }
//     else{
//         this.lastElementChild.classList.add("show");
//     }
// });