function my_clock(el) {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);
    el.innerHTML = h + ":" + m + ":" + s;
    setTimeout(function () { my_clock(el) }, 1000);
}
var toTop = document.getElementById('toTop');
// my_clock(toTop);
(function () {
    
    let btn = document.getElementById("btn");
   

   
    btn.onclick = function (params) {
        rendeInput();
    }
    rendeInput();
    let boxInput = document.querySelectorAll(".box-input");
    for (var i = 0; i < boxInput.length; i++) {
        boxInput[i].oninput = function (event) {
            var elem = event.target;
            var value = elem.value;
            var answer = elem.getAttribute("data-answer");
            if(value != answer ){
                elem.style.borderBottom = "1px solid red";
            }else{
                elem.style.borderBottom = "1px solid lemonchiffon";
            }
        }
    }




})()

function sortArr(arr) {
    arr.sort(function () { return Math.random() > 0.5 ? -1 : 1; }); 
    return arr;
}
function rendeInput() {
    var allData = practiseData,
        contentElem = document.getElementById("content"),
        jsData = allData.jsData,
        str = '',
        randomArr = sortArr(jsData);
    randomArr.length = 5;
    for (var i = 0; i < randomArr.length; i++) {
        str += '<div class="box">' +
            '<div>' + randomArr[i].topic + '</div>' +
            '<input class="box-input" type="text" data-answer="' + randomArr[i].answer+'" >' +
            '</div>'
    }
    contentElem.innerHTML = str;
}
function changeInput(params) {
    console.log("ooooo")
}