//
const getacctitles =document.getElementsByClassName("acctitle");//HTML coll and not for each
const getaccontents =document.querySelectorAll(".accontent");//NODE List for each 

// console.log(getaccontents.length);//4
for(let x=0 ;x<getacctitles.length;x++)
{
   getacctitles[x].addEventListener("click",function(e)
   {
      console.log(x); // click element idx
      // console.log(e.target); 
      // console.log(this); 

      this.classList.toggle("active");

      const getcontent=this.nextElementSibling;

      //getcont.scrollHeight to get height

      if(getcontent.style.height){
        getcontent.style.height=null; //be aware can't set 0
      } 
      else{
        getcontent.style.height=getcontent.scrollHeight+"px";
      }

   });

   if(getacctitles[x].classList.contains("active"))
    {
      getaccontents[x].style.height=getaccontents[x].scrollHeight+"px";
    }
}