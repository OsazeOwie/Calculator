const result = document.getElementById("result")



function clr (){
    result.value = "";
}


function display (value){
    result.value += value;
}

function calc (){
    let r = eval(result.value)
    result.value = r
}

