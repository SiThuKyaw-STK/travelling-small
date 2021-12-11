

























//for navbar custom

const navSlide = () => {
  const burger=document.querySelector(".burger");
  const nav   =document.querySelector(".nav-links");
  const navLinks=document.querySelectorAll(".nav-links li")

  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      //Animate Links
      navLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation = '';
          }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      burger.classList.toggle('toggle');
  });
  
  
  
}

navSlide();



//for swiper
var menu=["The Weekend Break","The Package Holiday","The Group Tour","Long Term Slow Travel"]
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function(index,className){
      return '<span class="'+ className + '"> ' + (menu[index]) + '</span>'
    }
  },
}); 