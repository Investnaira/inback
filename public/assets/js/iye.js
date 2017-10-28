var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




// this is to make it animate by itself
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

i=fantastic;
document.write(fantastic);


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
// this is the code for the responsivity header
//well it's pretty basic for the perfect understanding
// i'm still working on it so..... enjoy
// one guy was arguying with me that you need jquery for this
// well guess what i'm jquery !!!!! Ha Ha.......
 function help(){
      document.getElementById("beside_me1").style.display="none";
      document.getElementById("beside_me2").style.display="block";
      document.getElementById("hepp2").style.height="30%";
      document.getElementById("hepp2").style.zIndex="1000";
      document.getElementById("hepp2").style.opacity="1";
      document.getElementById("hepp2").style.top="10%";
      document.getElementById("nicki").style.display="block";
       document.getElementById("nicki1").style.display="block";
        document.getElementById("nicki2").style.display="block";
         document.getElementById("nicki3").style.display="block";
          document.getElementById("nick4").style.display="block";


    }
    function help2(){
     document.getElementById("beside_me1").style.display="block";
      document.getElementById("beside_me2").style.display="none";
      document.getElementById("hepp2").style.height="0";
      document.getElementById("hepp2").style.zIndex="0";
      document.getElementById("hepp2").style.opacity="0";
      document.getElementById("hepp2").style.top="10%";
      document.getElementById("nicki").style.display="none";
      document.getElementById("nicki1").style.display="none";
        document.getElementById("nicki2").style.display="none";
         document.getElementById("nicki3").style.display="none";
          document.getElementById("nick4").style.display="none";

    }
    function opacitypro(){
      document.getElementById("share_article").style.left="0%";
      document.getElementById("share_article").style.opacity="1";
    }


    function openDeposit()
{
window.open('https://paystack.com/pay/indeposit','jav','width=400,height=500,resizable=yes'); 
}

function openSubscribe()
{
window.open('https://paystack.com/pay/insubscribe','jav','width=400,height=500,resizable=yes');
}
