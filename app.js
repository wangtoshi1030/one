console.log(123);

let text = document.getElementsByClassName("move")[0];
text.addEventListener("mousemove",function(){
    text.textContent="MOVE";

});

text.addEventListener("mouseleave",function(){
    text.textContent="HOME";
});



