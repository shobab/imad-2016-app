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

var counter1 = 0;
var btn = document.getElementById('b1');
btn.onclick = function(){
    var request = new XMLHttpRequest();
    //request.onreadychangestate = function(){
        //if(request.readyState === XMLHttpRequest.DONE){
            //if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('num');
                span.innerHTML = counter.toString();
            //}
        //}
    //};
    request.open('GET','http://shobab.imad.hasura-app.io/counter',true);
    request.send(null);
};