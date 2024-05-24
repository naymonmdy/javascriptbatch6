// UI

const getbox=document.querySelector(".box");
const getbtns=document.querySelector(".btns");


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

dragbox(getbox);

function dragbox (box){

    console.log ("I am dragme function");

    function mousedown(){
    console.log ("I am mousedown function");
        
    };

    function dragnow(){
    console.log ("I am dragnow function");

        
    };

    function stopdrag(){
    console.log ("I am stopdrag function");

        
    };

}