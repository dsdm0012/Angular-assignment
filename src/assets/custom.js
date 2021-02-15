var slider = document.getElementById("myrange");
var output = document.getElementById("income");

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}
// slider.addEventListener("mouseover", function(){
//     var x = slider.value;
//     var color = 'linear-gradient(90deg, rgb(102,51,153)' + x + '%, rgb(255,250,250)' + x + '%)';
//     slider.style.background = color;
// });
var newslider = document.getElementById("expensive");
var output1 = document.getElementById("rangeValue");

output1.innerHTML = newslider.value;

newslider.oninput = function(){
    output1.innerHTML = this.value;
}
// newslider.addEventListener("mouseover", function(){
//     var x = newslider.value;
//     var color = 'linear-gradient(90deg, rgb(102,51,153)' + x + '%, rgb(255,250,250)' + x + '%)';
//     newslider.style.background = color;
// });