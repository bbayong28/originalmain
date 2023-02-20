/* header */
var menulist = document.getElementById('menulist');
menulist.style.maxHeight = "0px";

function menutoggle() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "100vh";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

var menuBar = document.querySelector('.xi-bars')
menuBar.addEventListener('click', menutoggle())

/* main */
$(function () { 
  
  $('.mainSlider').slick({
    arrows:false,
    //autoplay: true,
    dots: true,
    //pauseOnHover: false,
    //pauseOnFocus:false,  
  })
  $('.roomSlider').slick({
    arrows:false,
    //autoplay: true,
    slidesToShow : 3,
    dots: false,
    //pauseOnHover: false,
    //pauseOnFocus:false,  
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow:3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('.roomArrow i:first-child').on('click', function () { 
    $('.roomSlider').slick('slickPrev')
  })
  $('.roomArrow i:last-child').on('click', function () { 
    $('.roomSlider').slick('slickNext')
  })

  $('.photoSlider').slick({
    arrows:false,
    autoplay: true,
    slidesToShow : 6,
    dots: false,
    //pauseOnHover: false,
    //pauseOnFocus:false, 
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow:6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:4
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        }
      }
    ]        
  })



})