let box= document.querySelectorAll(".button");
let resetbtn = document.querySelector(".reset-btn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turno= true;// playerx, O

let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = ()=>{
    turno= true;
    enableboxes();
    msgcontainer.classList.add("hide");
};


box.forEach((button) =>{
    button.addEventListener("click", ()=>{
        if(turno){
            button.innerHTML = "𝙊";
            turno =false;
        }
        else{
            button.innerHTML = "✘";
            turno= true;
        }
        button.disabled= true;
        checkwinner();
    })
});


const disableboxes = ()=>{
    for(button of box){
        button.disabled=true;
    }
};
const enableboxes = ()=>{
    for(button of box){
        button.disabled=false;
        button.innerHTML="";
    }
};

const showWinner=(winner)=>{
    msg.innerHTML= `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner=()=>{
    for(let pattern of arr){
        let postval1 = box[pattern[0]].innerHTML;
        let postval2 = box[pattern[1]].innerHTML;
        let postval3 = box[pattern[2]].innerHTML;

        if(postval1!="" && postval2!="" && postval3!=""){
            if(postval1===postval2 && postval2===postval3){
                showWinner(postval1);
                return true;
            }
        }

    }
};

resetbtn.addEventListener("click", resetgame);