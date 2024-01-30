
//Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//Validasi Form
function validationForm(){
 let nama = document.getElementById("name").value;
 let email = document.getElementById("email").value;


 //validasi nama
 if(nama == '')
 {
   document.getElementById("nameErr").innerHTML="Please fill your name";
 }
 else
 {
    document.getElementById("emailErr").innerHTML= "";
    nameErr = false;
 }
 


  //validasi email
  if(email == '')
  {
    document.getElementById("emailErr").innerHTML="Please fill your email";
  }
  else 
  {
      
    document.getElementById("emailErr").innerHTML= "";
    emailErr = false;
  }
  


  if((nameErr || emailErr ) == true) {
    return false;
 }


}

