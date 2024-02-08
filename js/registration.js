var Form1=document.getElementById("form1");
var Form2=document.getElementById("form2");
var Form3=document.getElementById("form3");

var Next1=document.getElementById("next1");
var Next2=document.getElementById("next2");
var Back1=document.getElementById("back1");
var Back2=document.getElementById("back2");

var progress=document.getElementById("progress");

Next1.onclick=function(){
    Form1.style.left="-850px";
    Form2.style.left= "23%";
    progress.style.width="400px"
}
Back1.onclick=function(){
    Form1.style.left="23%";
    Form2.style.left= "850px";
    progress.style.width="200px"
}
Next2.onclick=function(){
    Form2.style.left="-850px";
    Form3.style.left= "23%";
    progress.style.width="600px"
}
Back2.onclick=function(){
    Form2.style.left="23%";
    Form3.style.left= "850px";
    progress.style.width="400px"
}