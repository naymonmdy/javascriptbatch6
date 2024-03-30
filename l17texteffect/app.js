//Get UI
const languages=["NodeJs","ReactJs","VueJs","Laravel"];
const color=["red","skyblue","violet","yellow"];
const gettextani=document.querySelector(".textani");
const gettextlights=document.querySelectorAll(".text-light");//NodeList



// console.log(languages);
// console.log(languages[0]);

// console.log(languages.indexOf("Reactjs"));// give value take index =>1
// console.log(languages.indexOf("Laravel"));// give value take index =>3  

// console.log(color[languages.indexOf("NodeJs")]);; //red
// console.log(color[languages.indexOf("ReactJS")]);; //skyblue


//return 0 to 3
//generator function ==>next, value ,yeild

function * generator(){
    var idx=0;
    while(true) {
        yield idx++;

        if(idx>3){
            idx=0;
        }
        
    }
}

const genfun =generator();
// console.log(genfun);
// to get object next
// console.log(genfun.next())//{value: 0, done: false}
// console.log(genfun.next().value)// to get value
// console.log(languages[genfun.next().value]);//NodeJs
// console.log(languages[genfun.next().value]);//ReactJs
// console.log(languages[genfun.next().value]);//VueJs
// console.log(languages[genfun.next().value]);//Laravel
// console.log(languages[genfun.next().value]);//NodeJs

function showwords(word){
    // console.log(word);//Nodejs

    let x=0;
    gettextani.innerHTML="";
    // to get color with text
    gettextani.classList.add(color[languages.indexOf(word)]);
    // gettextani.innerHTML=word;

    // gettextani.innerHTML +=word[0];//N
    // gettextani.innerHTML +=word[1];//No
    // gettextani.innerHTML +=word[2];//Nod

    let showinterval=setInterval(function(){
        if(x>=word.length)
        {
            clearInterval(showinterval);
            deletwords();

        }
        else{
           
            gettextani.innerHTML +=word[x]
             x++;
        }
        
        
    },300);

}
function deletwords(){
    let getword=gettextani.innerHTML;

//    console.log(getword);
   

   let getlastid=getword.length-1;
//    console.log(getlastid);

    let deleteinterval=setInterval(function(){
        if(getlastid >=0)
        {
            gettextani.innerHTML =gettextani.innerHTML.substring(0,gettextani.innerHTML.length-1);
            getlastid--;
            
        }
        else{
            gettextani.classList.remove(color[languages.indexOf(getword)]);
            showwords(languages[genfun.next().value]);
            clearInterval(deleteinterval);
        }
        
        
    },50);

}

showwords(languages[genfun.next().value]);//NodeJs and red
// showwords(languages[genfun.next().value]);//ReactJS and skyblue
// showwords(languages[genfun.next().value]);//VueJS and violet


gettextlights.forEach(function(gettextlight,idx)
{
    let arrtexts=gettextlight.textContent.split("");
    // console.log(typeof(arrtext));
    // console.log(arrtext);


    gettextlight.textContent="";

    arrtexts.forEach(function(arrtext,idx){
        
        let newem=document.createElement("em");
        // console.log(newem);
        newem.textContent=arrtext;
        // console.log(newem);
        newem.style.animationDelay=`${idx * 0.5}s`;
        gettextlight.append(newem);
    })

});