//getUI
const getdivarea = document.getElementById("divarea");

getdivarea.contentEditable = true;
getdivarea.spellCheck = false;

const getbtns = document.querySelectorAll(".btn");

getbtns.forEach(function (getbtn) {
    getbtn.addEventListener("click", function () 
    {
        // const getcommand = getbtn.dataset.commmand;

        const getcommand=getbtn.getAttribute("data-command");

        if (getcommand === "clearText") 
        {
            getdivarea.innerHTML = "";
        } 
        
        else if (getcommand === "createlink" || getcommand === "insertImage") {
            const geturl = prompt("Enter your website or image URL", "https://");
            document.execCommand(getcommand, false, geturl);
        } 
        
        else if (getcommand === "paste") {
            navigator.clipboard.readText().then(function (text) {
                getdivarea.innerHTML += text;
            });


        } 
        else if (getcommand === "foreColor" || getcommand === "backColor" || getcommand === "fontName") {
            document.execCommand(getcommand, false, getbtn.value);
        } 
        
        else if (getcommand === "backColor") {
            document.execCommand(getcommand, false,getbtn.value);
          }
        
        else if (getcommand === "fontName") {
            document.execCommand(getcommand, false,getbtn.value);
          }
        
        else {
          //document.execCommand(getcommand,show UI ,value);
          document.execCommand(getcommand, false, null);
        }
    });
});


function upCaseFun() {
    getdivarea.style.textTransform = "uppercase";
}

function lwCaseFun() {
  getdivarea.style.textTransform = "lowercase";
  console.log("lw");
}

function capCaseFun() {
  getdivarea.style.textTransform = "capitalize";
  console.log("cap");
}
