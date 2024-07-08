// console.log("Hay")

let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;



val = document.URL;

val = document.links;
console.log(val); //HTML Collection
val = document.links[0];

val = document.links[3]; // 
val = document.links[3].id; // delete-item4
val = document.links[5].id; // clearall

val = document.links[3].className; // delete item String out
val = document.links[3].classList; // DOMToken list
val = document.links[3].classList[1];

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action;
val = document.forms[0].method;


val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList[0];
val = document.images[0].src;
val = document.images[0].alt;


val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
// console.log(val);

// = Change Styling 
document.getElementById('tasktitle').style.backgroundColor = "green";
// document.getElementById('tasktitle').style.color = "blue";

// document.getElementById('tasktitle').textContent = "My Job";
// document.getElementById('tasktitle').innetText = "My Tasks";
document.getElementById('tasktitle').innerHTML = "<span style = 'color:yellow;'>My Todo<span> ";

// 5DO 


// => Call by className
  const lis = document.getElementsByClassName('list-group-item');
  console.log(lis); //HTML Collection
  console.log(lis[2]); 

  lis[2].style.color = "blue";
  // lis[2].textContent = "Have to visit"; 
  // lis[2].innetText = 'Have to cook';
  // lis[2].innerHTML = 'Have to read <a href="#" id="delete-item3" class="delete-item"> <i class="fas fa-trash-alt"></i><a/>';

  // =>Call By tag Name(Element)
  const litags = document.getElementsByTagName('li');
  console.log(litags); //HTML Collection
  // console.log(litags[1]);
  // litags[1].style.color = "red";
  // litags[1].innerHTML = 'Have to cook <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a>';


  // =>Query Selector call id tag \

  console.log(document.querySelector('#tasktitle'));
  console.log(document.querySelector('.card-title'));
  console.log(document.querySelector('h3'));


  console.log(document.querySelector("li")); // only first li
  console.log(document.querySelector(".list-group-item")); //only first li 


  // document.querySelector('li').style.color = "blue";
  // document.querySelector('ul li').style.color = "violet";
  // document.querySelector('ul li:nth-child(odd)').style.backgroundColor = "gray";
     // document.querySelector('ul li:nth-child(even').style.backgroundColor = "silver";
     // document.querySelector('ul li:last-child').style.backgroundColor = "green";
     // document.querySelector('ul li:last-of-type').style.backgroundColor = "orange";
     // document.querySelector('ul li:nth-of-type(4)').style.backgroundColor = "steelblue";


     // =>Query Selector All 

     console.log(document.querySelectorAll('tasktitle')); //Note List
     console.log(document.querySelectorAll('tasktitle')[0]);


     console.log(document.querySelectorAll('.card-title')); //Node List
     console.log(document.querySelectorAll('.card-title')[0]);



     console.log(document.querySelectorAll('li')); //NoteList
     console.log(document.querySelectorAll('li')[2]);


     console.log(document.querySelectorAll(".list-group-item")); //NodeList
     console.log(document.querySelectorAll(".list-group-item")[3]);

//For Each can't work in HTHL Collection with qurey selector .So change pure array with Array.from
     const listitems = document.querySelector('ul').getElementsByTagName('li');
     console.log(listitems); //HTML Collection
     console.log(typeof listitems);
     console.log(listitems[1]);


     const arritems = Array.from(listitems);
     console.log(arritems);

     arritems.forEach(function(arritem,idx){
     	console.log(arritem);

     });
//ForEach work in Node list by querySelectorAll .
     const listitms = document.querySelectorAll('ul.list-group li.list-group-item');
     console.log(listitms); //Node List(5)
     console.log(typeof listitms);
     console.log(listitms[1]);

     listitms.forEach(function(listitm,idx){
     	// console.log(listitm);

     	// listitm.innerText = `Hello WOrld`;

     	 // listitm.innerText = `${++idx} = Hello World`;

     });

     const lisodds = document.querySelectorAll('li:nth-child(odd)');
     // console.log(lisodds);
     const lisevens = document.querySelectorAll('li:nth-child(even)');
     // console.log(lisevens);


     // lisodds.forEach(function(lisodd){
     // 	lisodd.style.backgroundColor = "gray";

     // });

//      lisevens.forEach(function(liseven){
//      	liseven.style.backgroundColor = "orange";
// ;
//      })


// for(let i = 0 ; i < lisevens.length;i++){
// 	// console.log(i); // 0 1
// 	lisevens[i].style.backgroundColor = "silver";
// }
 // == > Parent to Children 

 var getli = document.querySelector('ul li');
     getli = document.querySelector("li.list-group-item");
     getli = document.querySelector("li.list-group-item:first-child");

     console.log(getli);

     const getul = document.querySelector('ul');
     console.log(getul);


     chl = getul.children; // HTML Collection(5)
     console.log(chl);
     console.log(chl[2]);

     // chl[1].textContent = "Have to go";
     // getul.children[3].innerText = "Have to cook";
     // getul.children[4].innerHTML = `Have to read <a href="#" id="delete-item3" class="delete-item"> <i class="fas fa-trash-alt"></i></a>`


     // = Parent to children to Children 

     chl = getul; // ul element တိုက်ရိုက်ရ
     chl = getul.children; //HTML Collection
     chl = getul.children[0];
     chl = getul.children[0].children; //HTML Collection
          

            // ul      li           a 
     chl = getul.children[0].children[0];
     chl = getul.children[0].children[0].id;
     chl = getul.children[0].children[0].className;
     chl = getul.children[0].children[0].classList; //DINToken List
     chl = getul.children[0].children[0].classList[0];
     chl = getul.children[0].children[0].href; 
          // ul             li           a 
     chl = getul.children[0].children[0].children; //HTML Coll4ection
              // ul      li       a           i 
     chl = getul.children[0].children[0].children[0];

     console.log(chl); 

// = >Child Element count 
     chl = getul.children.length; // 5
     chl = getul.childElementCount; //5


     chl = getul.children[0].childElementCount; //1
     chl = getul.children[0].children[0].childElementCount; // 1

     console.log(chl);

//=>Childern to Parent Element

const getfirstli=document.querySelector("li.list-group-item:first-child");

console.log(getfirstli);
               // li      ul
let getparent=getfirstli.parentElement;
          //      li             ul         div
     getparent=getfirstli.parentElement.parentElement;
     //        li             ul          div          card-footer
     getparent=getfirstli.parentElement.parentElement.parentElement;
     console.log(getparent);

//Next Element Sibling 

let getsibling=getfirstli;

     getsibling=getfirstli.nextElementSibling;
     getsibling=getfirstli.nextElementSibling.nextElementSibling;
     getsibling=getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
     getsibling=getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    //          li1           li2                 li3                     li4                  li5            null
     getsibling=getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(getsibling);



//Previous Element Sibling 
getsibling=getfirstli;
//             li1            li2            li3                 li2
getsibling=getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(getsibling);

//Create Element

let newli=document.createElement("li");
//add id
newli.id="new-item";
//add class with ClassName , can overide class name and get String
newli.className="list-group-item";
newli.className="delete-me";
newli.className="list-group-item delete-me";

//add class with ClassList , smart with function
newli.classList.add("delete-i");
newli.classList.add("delete-u");
newli.classList.add("delete-we","delete-you","delet-us");

//Overide all Class Name
newli.className="list-group-item";


//ADD ATTRIBUTE
//setAttribute(attname,value)
newli.setAttribute("title","new-item");        
// console.log(newli);

// newli.textContent="hay";
// newli.innerText="hi";
// newli.innerHTML='List Item 6 <a href="#" id="delete-item6" class="delete-item"><i class="fas fa-trash-alt"></i></a>'; 


// const newtext=document.createTextNode("Hello World");
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode("Hello Thailand"));

newlink=document.createElement('a');
newlink.href="#";
newlink.id="delete-item6";
newlink.className="delete-item";

const newitalic=document.createElement("i");
newitalic.classList.add("fas", "fa-trash-alt");

newlink.appendChild(newitalic);
newli.appendChild(newlink);

console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);




//=> REPLACE  ELEMENT
//replaceChild(new,old)

const newtitle2=document.createElement('h2');
newtitle2.id='tasktitle';
console.log(newtitle2);

//adding text 
const newcaption=document.createTextNode("All My List");
newtitle2.appendChild(newcaption);

//get old parent
const oldtitle4=document.getElementById("tasktitle");
const getcardfooter=document.querySelector('.card-footer');

//replaceFunction
getcardfooter.replaceChild(newtitle2,oldtitle4);




///=> REMOVE ELEMENT (SELF)

const getlis=document.querySelectorAll('li');//Node list
// console.log(getli);
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[1].remove();
// console.log(getlis);



///=> REMOVE ELEMENT (CHILD)

// const getfirstul=document.querySelector('ul');
// console.log(getfirstul);

// console.log(getfirstul.children[0]);
// getfirstul.removeChild(getfirstul.childern[1]);



//=>Attribute

const firstli=document.querySelector("li");
console.log(firstli);
const firstlichild=firstli.children[0];

// console.log(firstlichild);
// console.log(firstlichild.id);
// console.log(firstlichild.href);

console.log(firstlichild.getAttribute('href'));
console.log(firstlichild.getAttribute('alt'));
console.log(firstlichild.title);//
console.log(firstlichild.alt);//undefined


console.log(firstlichild.href);//https://www.google.com/
console.log(firstlichild.getAttribute('href'));


let hasatt=firstlichild.hasAttribute("href");
console.log(hasatt);

hasatt=firstlichild.hasAttribute("hay");
console.log(hasatt);


//Class Name and ClassList

// console.log(firstlichild.className);//delete-item
// firstlichild.className="delete-myself";
// firstlichild.className="delete-item delete-myself";
// // firstlichild.className="delete-item delete-myself delete-ourserve";
// firstlichild.className="delete-item delete-ourserve";
// console.log(firstlichild.className);



//Class List ==>DOM Token list 
// console.log(firstlichild.classList);//DOM Token list
// console.log(firstlichild.classList[0]);//delete-item
// console.log(firstlichild.classList[1]);//undefined

firstlichild.classList.add("delete-myself");
firstlichild.classList.add("delete-ourself");
// firstlichild.classList.add("delete-us","delete-yourself");

// firstlichild.classList.remove("delete-us");
// firstlichild.classList.remove("delete-us","delete-ourself");

//  console.log(firstlichild.classList);//delete-item delete-myself delete-ourself


if(firstlichild.className==="delete-item"){
     //Case Sensitive with ClassName
     console.log("Yes");
}
else{
     console.log("No");
}


if(firstlichild.classList.contains("delete-myself"))
{
     console.log("Yes");
}
else
{
     console.log("No");
}



//AddEventListener (eventype,callbackfunction)
//METHOD 1
          const clearbtn=document.querySelector(".clear-tasks");

          clearbtn.addEventListener("click",function(e)
          {
               console.log("I am clicking");

//to prevent hyper reference link
// console.log(e);
               console.log(e);
               console.log(e.target);
               console.log(e.target.id);
               console.log(e.target.classList);
               console.log(e.target.className);

               console.log("...................");


//WORK In Regular Function and no need e paramenter
               console.log(this);
               console.log(this.id);
               console.log(this.classList);
               console.log(this.className);
               e.preventDefault();
               console.log("_______");
          })


//METHOD 2

          // clearbtn.addEventListener("click",myclick);

          function myclick(e){
               e.preventDefault();

               // console.log(e.target);
               // console.log(this);
               // console.log(this.id);
               // // e.target.innerText="Finished";
               // this.innerText="Done";
               // this.style.backgroundColor="green";

 //  COORDINATE get value when clicking => related to the window
               // console.log(e);  
               // const clientx=e.clientX;
               // const clienty=e.clientY;
               
               // console.log(clientx,clienty);

 //  COORDINATE get value when clicking => related to the element
               // const offsetx=e.offsetX;
               // const offsety=e.offsetY;

               // console.log(offsetx,offsety);
          }


//====> MOUSE EVENT and POINTER EVENT

const clbtn = document.querySelector(".clear-tasks");

//Single click
// clbtn.addEventListener('click',mouseeventtype);

//Double Click
// clbtn.addEventListener('dblclick',mouseeventtype);

//Mouse Down
// clbtn.addEventListener('mousedown',mouseeventtype)


//Mouse Up or click
// clbtn.addEventListener('mouseup',mouseeventtype);


//Mouseenter
// const card=document.querySelector('.card');
// card.addEventListener('mouseenter',mouseeventtype);

//Mouseover
// const card=document.querySelector('.card');
// card.addEventListener('mouseover',mouseeventtype);

//Mouseleave
// const card=document.querySelector('.card');
// card.addEventListener('mouseleave',mouseeventtype);

//Mouseout
// const card=document.querySelector('.card');
// card.addEventListener('mouseout',mouseeventtype);


const heading2=document.querySelector("h2");

const card=document.querySelector('.card');
card.addEventListener('mousemove',mouseeventtype);


function mouseeventtype(e)
{
     // console.log("I am clicking");
     // console.log(`Event type = ${e.type}`);
     // e.preventDefault();
     heading2.textContent=`MouseX :${e.offsetX} MouseY:${e.offsetY}`;

     document.body.style.backgroundColor=`rgba(${e.offsetX},${e.offsetY},${e.offsetX},0.5)`
}



const getform=document.querySelector(".form");

getform.addEventListener('submit',function(e)
{
     console.log(`Event Type=${e.type}`);
     e.preventDefault();
});