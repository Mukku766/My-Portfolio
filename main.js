

var element = document.getElementById("mobile-menu");
var num = 0;
  function myToggle(){
     if(num===0){
        element.classList.add("md-block");
        element.classList.remove("md-none");
        num = 1
     }else{
     element.classList.add("md-none");
     element.classList.remove("md-block");
     num =0;
  }

    
  }
