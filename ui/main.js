console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='JAVA | Python | Ruby on Rails';


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
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //make a req to server and send the name
    //capture  list of names and render it as a list
    var names = ['JAVA', 'Python', 'Ruby on Rails'];
    var list = '';
    for (var i=0; i<names.length; i++) {
        list+= '<li>' + names[i]+ '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};