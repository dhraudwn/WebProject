let result = '';
var n = 0;
var e = 0;
var s = 0;

function nClick(){
    var col = document.getElementById('north');
    if(n === 0){
        n = 1;
        col.style.color = "magenta";
    }
    else{
        n = 0;
        col.style.color = "blue";
    }
    message();
}
function eClick(){
    var col = document.getElementById('east');

    if(e === 0){
        col.style.color = "magenta";
        e = 1;
    }
    else{
        col.style.color = "blue";
        e = 0;
    }
    message();
}
function sClick(){
    var col = document.getElementById('south');
    if(s === 0){
        col.style.color = "magenta";
        s = 1;
    }
    else{
        col.style.color = "blue";
        s = 0;
    }
    message();
}
function message(){
    result = '';
    if(n === 1) result = result + "북문, ";
    if(e === 1) result = result + "동문, ";
    if(s === 1) result = result + "쪽문, ";
    result = result.slice(0, -2);

    if(result != ''){
        document.getElementById('result').innerText = result + ' 에서 드시겠어요?';
    }

    else{
        document.getElementById('result').innerText = result;
    }
}
function complete(){
    result = result.replace(/, /g, "+");
    result = encodeURI(result);
    location.href = "menu.html?door="+result;
}