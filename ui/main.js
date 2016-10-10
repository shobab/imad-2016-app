console.log('Loaded!');
var mleft = 0;
var img = document.getElementById('madi');
function mright(){
    mleft = mleft+5;
    img.style.marginLeft = mleft + 'px';
}

img.onclick = function(){
    var interval = setInterval(mright,50);
};

var counter = 0;
var btn = document.getElementById('b1');
btn.onclick = function(){
    counter = counter+1;
    var span = document.getElementById('num');
    span.innerHTML = counter.toString();
};