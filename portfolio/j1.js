


let modebtn=document.querySelector("#mode");



let curmode="lightmode"//dark mode



modebtn.addEventListener("click", () => {
    if(curmode==="lightmode"){
        curmode="darkmode";
        modebtn.innerText="darkmode"

        document.querySelector("body").style.backgroundColor="black";
         document.querySelector("#text").style.color="white";
        
        
    }
    else{
        curmode="lightmode";
         document.querySelector("body").style.backgroundColor="white";
         document.querySelector("#text").style.color="black";
           modebtn.innerText="lightmode"
    }
    console.log(curmode);

});
