// dropdown 1
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
   }
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {

     var dropdowns = document.getElementsByClassName("dropdown-content");
     var j;
     for (j = 0; j < dropdowns.length; j++) {
       var openDropdowns = dropdowns[j];
       if (openDropdowns.classList.contains('show')) {
         openDropdowns.classList.remove('show');
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
       var openDropdowns = dropdowns2[j];
       if (openDropdowns.classList.contains('show2')) {
         openDropdowns.classList.remove('show2');
       }
     }
   }
 }
