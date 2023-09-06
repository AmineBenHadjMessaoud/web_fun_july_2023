var likes = [4,12,9];
var neil = document.querySelector('#neil');
var nichole = document.querySelector('#nichole')
var jim = document.querySelector('#jim')

function like1(){
    likes[0]++;
    neil.innerText = likes[0] + " like(s)"
}

function like2(){
    likes[1]++;
    nichole.innerText = likes[1] + " like(s)"
}

function like3(){
    likes[2]++;
    jim.innerText = likes[2] + " like(s)"
}