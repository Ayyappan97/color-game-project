var numsquare=6;
var colors=generaterandomcolors(numsquare);
var pickedcolor=randomcolors();
var colordisplay=document.getElementById("display");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easybtn");
var hard=document.querySelector("#hardbtn");


easy.addEventListener("click",function()
{
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numsquare = 3;
    colors=generaterandomcolors(numsquare);
    pickedcolor=randomcolors();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i < squares.length;i++)
    {
        if (colors[i]) 
        {
            squares[i].style.background=colors[i];
        } 
        else 
        {
            squares[i].style.display="none";
        }
    }    
});

hard.addEventListener("click",function(){
     hard.classList.add("selected");
     easy.classList.remove("selected");
     numsquare = 6;
     colors=generaterandomcolors(numsquare);
    pickedcolor=randomcolors();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i < squares.length;i++)
    {
        if (colors[i]) 
        {
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
        } 
        
        
            
    
    }
    
});
var resetbutton=document.getElementById("reset");
resetbutton.addEventListener("click",function(){
     colors=generaterandomcolors(numsquare);
     pickedcolor=randomcolors();
     colordisplay.textContent=pickedcolor;
     displaymesssage.textContent="";
     resetbutton.textContent="New Color";


     for(var i=0;i<squares.length;i++)
     {
        squares[i].style.background=colors[i];
     }
     h1.style.background="green";
});


colordisplay.textContent=pickedcolor;


var squares=document.querySelectorAll(".square");
var displaymesssage=document.querySelector("#message");
for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.background;
        if (clickedcolor==pickedcolor) {
            displaymesssage.textContent="wow! correct!!"
            resetbutton.textContent="play again"
            changecolors(clickedcolor);
            h1.style.background=clickedcolor;
        } else {
           this.style.background="#232323";
           displaymesssage.textContent="Try again";
        }
});
}
function changecolors(colors) {
    for(var i=0; i<squares.length;i++){
         squares[i].style.background=colors;
    }
}
function randomcolors() {
   var random= Math.floor(Math.random() * colors.length);
   return colors[random];
    
}
function generaterandomcolors(num) {
    var arr=[];
    for(var i=0;i < num; i++)
    {
    arr.push(randomcolorss());
    }
    return arr;

    function randomcolorss() {
       var r= Math.floor(Math.random() * 256);
       var g= Math.floor(Math.random()* 256);
       var b= Math.floor(Math.random() * 256);
       return "rgb(" + r +  ", " + g +  ", " + b + ")";
    
        
    }
    
}