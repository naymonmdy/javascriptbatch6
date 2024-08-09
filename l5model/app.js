let getmodalbtn = document.getElementById("modal-btn");
let getmodalbox = document.getElementById("login-modal");
let getbtnclose = document.querySelector(".btn-close");


// getmodalbtn.addEventListener('click',function(){
//     getmodalbox.style.display="block";
// });

// getbtnclose.addEventListener('click',function(){
//     getmodalbox.style.display="none";
// });

// window.onclick= function(e){
//     if(e.target==getmodalbox){
//         getmodalbox.style.display="none";
//     }
// }

getmodalbtn.addEventListener('click',openmodal);
getbtnclose.addEventListener('click',closemodal);

function openmodal(){
    getmodalbox.style.display="block";
}


function closemodal(){
    getmodalbox.style.display="none";
}
getbtnclose.addEventListener('click',function(){
    getmodalbox.style.display="none";
});

window.onclick= function(e){
    if(e.target==getmodalbox){
        closemodal();
    }
}