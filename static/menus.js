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
