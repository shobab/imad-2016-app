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