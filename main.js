let body = document.body;
let mid = body.querySelector('.mid');

let image = mid.querySelector('.image'); //img
let inputFile = document.getElementById("uploadBtn");//input file

inputFile.onchange = function(){ 
    image.src = URL.createObjectURL(inputFile.files[0]);
}
