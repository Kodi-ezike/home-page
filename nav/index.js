function openNav() {
    var x = document.getElementById("links");
    var y = document.getElementById("open");
    var z =document.getElementById("close");
    if(x.style.display == 'block'){
        x.style.display = 'none';
    }
    else{
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'block';
    }
}
function closeNav() {
    var x = document.getElementById("links");
    var y = document.getElementById("open");
    var z =document.getElementById("close");
    if(x.style.display == 'block'){
        x.style.display = 'none';
        z.style.display = 'none';
        y.style.display = 'block';
    }
}