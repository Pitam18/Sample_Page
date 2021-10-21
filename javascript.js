function myFunction() 
{
   var element = document.body;
   element.classList.toggle("dark-mode");
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("right").style.width = "1000px";
   document.getElementById("right1").style.width = "250px";
   



}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("right").style.width = "1200px";
   document.getElementById("right1").style.width = "300px";
 
}