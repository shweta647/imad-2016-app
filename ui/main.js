console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='Enter your trade and see what is available';


//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft=marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
    img.style.marginLeft = '100px';
};

//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //Capture response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var names = request.responseText;
                names= JSON.parse(names);
                var list='';
                for (var i=0; i<names.length; i++) {
                    list += '<li>' + names[i]+ '</li>';
                }
                var submit = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    // Make the request
var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET', 'http://shweta647.imad.hasura-app.io/submit-name?name=' +name,true);
request.send(null);
