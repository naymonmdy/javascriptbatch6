//UI
const slides = document.getElementsByClassName("carousel-item");
const dots = document.querySelectorAll(".dots");

let currslide = 1;

carousel(currslide);

function carousel(slidenum) {
  let x, y;

  //hide all slide

  for (x; x < slides.length; x++) {
    slides[x].display = "none";
  }
  //hide all dots
  for (y; y < slides.length; y++) {
    dots[y].classNme = "dot";
  }

  if(slidenum>slides.length)
  {
    currslide=1;
  }
  else if(slidenum<1){
    currslide =1;

  };
  //currslide 123 or 321
  console.log(slidenum);
}



for(let q ;q<dots.length;q++)
{
    dots[q].addEventListener("click",function(){
        currslide=this.getAttribute("data-bs-slide-top");
        console.log(currslide);
        carousel(currslide);
    });
}