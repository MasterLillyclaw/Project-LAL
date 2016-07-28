// dropdown 1
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
   }
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {

     var dropdowns = document.getElementsByClassName("dropdown-content");
     var j;
     for (j = 0; j < dropdowns.length; j++) {
       var openDropdown = dropdowns[j];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }
// dropdown 2
function myFunction2(){
    document.getElementById("myDropdown2").classList.toggle("show2");
   }
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn2')) {

     var dropdowns2 = document.getElementsByClassName("dropdown-content2");
     var j;
     for (j = 0; j < dropdowns2.length; j++) {
       var openDropdown = dropdowns2[j];
       if (openDropdown.classList.contains('show2')) {
         openDropdown.classList.remove('show2');
       }
     }
   }
 }


// Each move function allows each letter of the title to "jump"
function Move(){
  //When the mouse is over a letter, it will go up
 $('#move li span').on("mouseenter", function() {
    console.log("The image was found!");
  $(this).animate({bottom: "+=20px"});
  })

//When the mouse leaves the letter, it will go back down
  $('#move li span').on("mouseleave", function() {
     console.log("The image was found!");
  $(this).animate({bottom: "-=20px"});
  })
 }

function Move1(){
 $('#move li span1').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span1').on("mouseleave", function() {
    console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}


function Move2(){
 $('#move li span2').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span2').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}

function Move3(){
 $('#move li span3').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span3').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}

function Move4(){
 $('#move li span4').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span4').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}

function Move5(){
 $('#move li span5').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span5').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}

function Move6(){
 $('#move li span6').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span6').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}

function Move7(){
 $('#move li span7').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span7').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}

function Move8(){
 $('#move li span8').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span8').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}

function Move9(){
 $('#move li span9').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span9').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}

function Move10(){
 $('#move li span10').on("mouseenter", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "+=20px"});
 })

 $('#move li span10').on("mouseleave", function() {
   console.log("The image was found!");
 $(this).animate({bottom: "-=20px"});
 })
}


 $(document).ready(Move);
 $(document).ready(Move1);
 $(document).ready(Move2);
 $(document).ready(Move3);
 $(document).ready(Move4);
 $(document).ready(Move5);
 $(document).ready(Move6);
 $(document).ready(Move7);
 $(document).ready(Move8);
 $(document).ready(Move9);
 $(document).ready(Move10);
