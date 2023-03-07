// 로딩하는 방법! 
// 윈도우가 로드가 되면.loading을 display:none을 하여라!!!!!!!
//$(function () {
//    $(window).load(function () {
//        $(".loading").css("display","none")
//    })
//
//}) 

window.onload = function () {
    
    AOS.init({
        duration: 800,
        /* disable: window.innerWidth < 768, */
    });

    

    const close = document.querySelector(".modalClose");
    const open = document.querySelector(".modalOpen");
    const modal = document.querySelector(".modal");

    function MD() { 
        open.addEventListener("click", function () {            
            modal.classList.add("on");
        })
        close.addEventListener("click", function () {
            modal.classList.remove("on");
        })
    }
    MD();  

}

//내가 하고 싶은 것 
//1. 모달창이 떴을 때(modal.on일때)
//2. 바탕의 스크롤이 안되게 막자!
//https://hsj306.tistory.com/62
//https://velog.io/@naynara/%EB%AA%A8%EB%8B%AC-%ED%8C%9D%EC%97%85%EB%9C%B0%EB%95%8C-%EB%B0%94%EB%8B%A5-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%89%EA%B8%B0
$(function () { 
    var posY;

    $(".modalOpen").on("click", function (e) {
        
        // posY = $(window).scrollTop();

        //$("html, body").css({"overflow":"hidden"});
        $("html, body").addClass("not_scroll");
        $(".modal").css("display","block")
       // $("section").css("top", -posY)
        e.preventDefault();
    })

    $(".modalClose").on("click", function(e){
        //$("html, body").css({"overflow":"visible"});
        $("html, body").removeClass("not_scroll");
        $(".modal").css("display","none");
        //posY = $(window).scrollTop(posY);
    });
})

$()

$(".loading").css("display","none");


$(function () {
    
    $('.m__open').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');  
    });
    
    $('.mainSlider').slick({
        arrows:false,
        //autoplay: true,
        pauseOnHover: false,
        pauseOnFocus:false,   
        dots: true,
            customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            if (i=='0'){
                i = "01 - ACRE ";
            } else if (i=='1'){
                i = "02 - Newen ";
            }else if (i=='2'){
                i = "03 - BOHEA";
            }else if (i=='3'){
                i = "04 - Po.oak";
            }else if (i=='4'){
                i = "05 - LEBEIGE";
            }
            return '<a class="dot">'+i+'</a>';
        },
    });


    $('.productSlider').slick({
        arrows:false,
        //autoplay: true,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false, 
    });

    /* $('a').on('click', function (e) {
        e.preventDefault();
        console.log($(this.hash).offset().top);
        var hash = $(this.hash).offset().top;
        $('html,body').animate({ scrollTop: hash }, 300)
    });  밑에 탭이 안먹음
    */


    $('.tabMenu>li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.shopContent>li').removeClass('on');
        $('.shopContent>li').eq(idx).addClass('on');
        $('.tabMenu>li').removeClass('on');
        $(this).parent().addClass('on');
    })

    $('.project_slider').slick({
        arrows: false,
        dots: false,
        centerMode: true,  
        centerPadding: '250px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
    });

    $('.businessArrow i:nth-child(1)').on('click', function () {
        $('.project_slider').slick('slickPrev')
    });

    $('.businessArrow i:nth-child(2)').on('click', function () {
        $('.project_slider').slick('slickNext')
    });
    


    const tab_menu = $('.interiorSlide figure .tab_menu li');
    const tab_content = $('.right .tab_content > li');
    //tab_menu
    $(tab_menu).on('click', function () { 
        var idx = $(this).index();
        console.log(idx);
        $(this).addClass('active').siblings().removeClass('active').closest('figure').find(tab_content).eq(idx).addClass('on').siblings('li').removeClass('on');
        return false;
    });
    var swiper = new Swiper(".interiorSlide", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },    
        touchRatio: 0,
        noSwiping: true,
        autoplay:false,        
        loop: true,
        breakpoints : {
            768: {
                touchRatio:1,
                noSwiping: false,
            }
        }
        
    });
/*     swiper.on('transitionEnd', function () {
        if (swiper.realIndex == 0) { 
            $('.move_first').show();
        } else {
            $('.move_second').show();
        }
            console.log('now index :::', swiper.realIndex);
    });
 */
    
    $('.tab_menu li').on('click', function () { 
        const w_w = $(window).width();
        if (w_w <= 1200) { 
            //console.log(w_w);
        }
        // if ($(window).width() < 769) {
        //     var idx = $(this).index();
        //     console.log(idx);
        //     $(this).addClass('active').siblings().removeClass('active').closest('figure').find('.tab_menu li span').eq(idx).addClass('active').siblings('li').removeClass('active');
        //     return false;
        // }
    });
    

    $('.product_slide2').slick({  
        arrows:false,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 1,
        pauseOnHover: false,
        pauseOnFocus: false,  
        
    })


    /* $('.reviewArrow i:nth-child(1)').on('click', function () {
        $('.product_slide2').slick('slickPrev')
    });

    $('.reviewArrow i:nth-child(2)').on('click', function () {
        $('.product_slide2').slick('slickNext')
    }); */

    //$('h2').each(function () { 
    //    console.log(this);
    //    const span_w = $(this).find('.tit').innerWidth();
    //    const real_bor = 'calc(100% - ' + (span_w + 15) + 'px)';
    //    $(this).find('.tit').siblings('.border_span').css({
    //    width: real_bor,
    //    color: 'red'
    //    });
    //    //console.log(span_w);
    //});
    //각 섹션마다 h2 span span 다른 비율로 줄때  
    /*
    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 400)
    });
    
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(350);
        } else {
            $('.toTop').fadeOut(1000);
        }
        if (sct > 300) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    }); */

})
/* https://zenn.dev/nontan/articles/0cd8ea48bdf05faf1c26 */
//$(function(){
//
//    var moreNum = 6;
//    $(".feed div:nth-child(n + " + (moreNum + 1) + ")").addClass("is-hidden");
//    $(".more").on("click", function () {
//    $(".feed div.is-hidden").slice(0, moreNum).removeClass("is-hidden");
//    if ($(".feed div.is-hidden").length == 0) {
//        $(".btm_more").fadeOut();
//    }
//    });
//
//
//});

//$(function () {
//    $(".modal_open").on('click', function () {
//        $(".modal").show();
//    })
//})

// 한 가로의 높이를 계산
// 세로로 들어갈 셀의 개수를 정함
// f 클릭했을 때 한가로의 높이만큼 높이를 추가함 +=

//css height, groH overfloe: hidden;
$(function () {
    //var momH = 530;
    var groH = $('.feed_pic').outerHeight(true);
    //console.log(groH);
    /* var seroG = 3; */

    var h= 1
    $('.btm_more').on('click', () => {
        // $('.feed').height(momH + groH * h);
        $('.feed').animate({height : groH + groH * h}, 1000)
        h = h + 1;
        if (h > 5) {
           // $('.btm_more').text('up')
            $('.btm_more').hide();
        }
    });
})











