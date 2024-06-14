// UI

const getbox=document.querySelector(".box");
const getbtns=document.querySelector(".btns");
const getboxtitle=document.querySelector(".boxtitle");


getbox.addEventListener(`click`,function(e){

    // getbtns.classList.toggle("show");
    getbtns.classList.add("show");

    smallmenu(e.target);

});

getbox.addEventListener(`dbclick`,function(){

    getbtns.classList.remove("show");

});

function smallmenu(ele){

    if(ele.classList.contains("btn-icon"))
    {
        // console.log("yes");
        const geturl=ele.getAttribute("data-link");
        window.location.href=geturl;
    }
    else if (ele.classList.contains("icn")) {
        const geturl=ele.parentElement.getAttribute("data-link");
        window.location.href=geturl;
    }
    else{
        console.log("no");
    }

}

// drage me function
drageme(getbox);
function drageme(box){
    
    // console.log(box);
    // console.log(I am main dragme function);

    let getcx,getcy,setcx,setcy;


        if (getboxtitle){
            getboxtitle.onmousedown=mousedown;
        }

        function mousedown(e){
            console.log("I am mousedown function");

            getcx=e.clientX;
            getcy=e.clientY;

            console.log ("Step 1 =",getcx,getcy);
            console.log ("Step 1 =",getcx,getcy);
            document.onmousemove=dragnow;
            document.onmouseup=stopdrag;

            getbtns.classList.remove("show");

        }

        function dragnow(e){

            console.log("I am dragnow function");

            setcx=getcx - e.clientX;
            setcy=getcy - e.clientY;


            console.log ("Step 2 =",setcx,setcy);

            getcx=e.clientX;//reset and overwrite clientX again new position moved element's location
            getcy=e.clientY;//reset and overwrite clientY again new position moved element's location

            const btnleft=box.offsetLeft;
            const btntop=box.offsetTop;

            box.style.left=(btnleft-setcx)+"px";
            box.style.top=(btntop-setcy)+"px";


        }
        function stopdrag()
        {
            console.log("I am stopdrag function");
            document.onmousemove=null;
            document.onmouseup=null;
        }
};