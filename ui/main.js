console.log('Loaded!');
var mleft = 0;
function mright(){
    var img = document.getElementById('madi');
    mleft+=5;
    img.style.marginLeft = mleft + 'px';
}

img.onclick() = function(){
    var interval = setInterval(mright,50);
};