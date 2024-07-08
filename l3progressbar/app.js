//UI

// const getprogressbar = 
const getdownloadbtn = document.querySelector('.download-btn');
const getprogressbar=document.querySelector('.progress-bar');
const seturl= "https://linkedin.com";


getdownloadbtn.addEventListener('click',function()
    {
        let setwidth=0;
        let setinv= setInterval(progressinc,100);

        function progressinc(){
            if(setwidth>=100)
            {
                clearInterval(setinv);
                window.location.href=seturl;
            }
            else{
                setwidth++;
                getprogressbar.style.width=`${setwidth}%`;
                getprogressbar.setAttribute('data-inc',`s${setwidth}%`);
                getdownloadbtn.setAttribute('disabled',true);
            }
        }
    }
);