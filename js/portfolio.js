let menu=document.querySelector("#menu");
let check="menuhide";
function showMenu(){;
    if(check==="menuhide"){;
       menu.classList.add("show");
        check="menushow";
    }else{;
        menu.classList.remove("show");
        check="menuhide";
    };
};
////------------------DARK MODE START------------------/////
let curruntMode="light"
let body=document.getElementById("body");
let change=document.getElementById("sun-moon");
function mode(){
    if(curruntMode==="light"){
        body.classList.add("dark");
        body.classList.remove("light");
        curruntMode="dark"
        change.src="./pictures/sun.png"
    }
    else{
       body.classList.add("light");
       body.classList.remove("dark");
       curruntMode="light"
    change.src="./pictures/moon.png"
    }
}

////-----------------------DARK MODE END-------------------------//
