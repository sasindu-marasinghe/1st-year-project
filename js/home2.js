//popup1

document.querySelector("#show-popup").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active1")
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active1")
});



//popup2

document.getElementById("#show-popup2").addEventListener("click",function(){
    document.querySelector(".popup2").classList.add("active2")
});
document.querySelector(".popup2 .close-btn2").addEventListener("click",function(){
    document.querySelector(".popup2").classList.remove("active2")
});




//popup3

document.querySelector("#show-popup3").addEventListener("click",function(){
    document.querySelector(".popup3").classList.add("active3")
});
document.querySelector(".popup3 .close-btn3").addEventListener("click",function(){
    document.querySelector(".popup3").classList.remove("active3")
});
