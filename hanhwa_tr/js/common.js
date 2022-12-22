
$(function () {
    
    
    // $('#header').mouseover(function() {
    //     $(this).addClass('on');
    // });
    // $('#header').mouseleave(function() {
    //     $(this).removeClass('on')        
    //     var sct = $(window).scrollTop();
    //     if (sct > 0) {
    //         $('#header').addClass('on');
    //     }
    // });

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow img').removeClass('on')
        if (c === 1) {
            $('.mainArrow img').addClass('on')
        }       
    });
    
    $('.mainSlider').slick({
        arrows:false,
        //autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus:false,        
    });

    
    $('.mainArrow img:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });
    $('.mainArrow img:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });


    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 400)
    });
    

    /* $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        console.log(sct);
    }); 이까지하면 스크롤 숫자 console에 찍힘 */

     $(window).on('scroll', function () {
         var sct = $(window).scrollTop();
         if (sct > 400) {
             $('.toTop').fadeIn(350);
         } else {
             $('.toTop').fadeOut(1000);
         }
         /* if (sct > 300) {
            $('#header').addClass('on');
         } else {
            $('#header').removeClass('on');
         } */
     });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            //$('.gnb>ul>li>a').next().hide();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });


    $('#fl').on('change', function () {
        console.log($(this), $(this).val())
        var lnk = $(this).val();
        //lnk && window.open(lnk);
        if (lnk) {
            window.open(lnk);
        }
    });

    const work = $(".main_work_main .work");
    //console.log(work.length);

    /* $(work).each(function (idx, val) {
        let sliderName = 'leftSlider_0' + index;
        let sliderNavName = 'rightSlider_0' + index;
        $(work)[index].id = sliderName;
        
    }  */

    $('.leftSlider_01').slick({
        arrows:false,
        //autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,     
        asNavFor: ".rightSlider_01"
    });
    $('.leftSlider_02').slick({
        arrows:false,
        //autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,     
        asNavFor: ".rightSlider_02"
    });
    $('.leftSlider_03').slick({
        arrows:false,
        //autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,     
    asNavFor: ".rightSlider_03"
    });
    $('.leftSlider_04').slick({
        arrows:false,
        //autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,     
        asNavFor: ".rightSlider_04"
    });

    $('.rightSlider_01').slick({
        arrows:false,
        //autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus:false,  
        asNavFor: ".leftSlider_01"       
    });
    $('.rightSlider_02').slick({
        arrows:false,
        //autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus:false,  
        asNavFor: ".leftSlider_02"       
    });
    $('.rightSlider_03').slick({
        arrows:false,
        //autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus:false,  
        asNavFor: ".leftSlider_03"       
    });
    $('.rightSlider_04').slick({
        arrows:false,
        //autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus:false,  
        asNavFor: ".leftSlider_04"       
    });

    const work_left = $(work).find(".xi-angle-left");
    const work_right = $(work).find(".xi-angle-right");

    $(work_left).on('click', function () {
        //console.log('zzzzz');
        //https://ismydream.tistory.com/94 (closet함수에 대해서 공부하기)
        $(this).closest(".work").find(".pic .left").slick('slickPrev');
    });
    $(work_right).on('click', function () {
        //console.log('rrr')
        $(this).closest('.work').find(".pic .right").slick('slickNext');
    })
    // $('.rightArrow_01 i:nth-child(1)').on('click', function () {
    //     $('.rightSlider_01').slick('slickPrev')
    // });
    // $('.rightArrow_01 i:nth-child(2)').on('click', function () {
    //     $('.rightSlider_01').slick('slickNext')
    // });
    // $('.rightArrow_02 i:nth-child(1)').on('click', function () {
    //     $('.rightSlider_02').slick('slickPrev')
    // });
    // $('.rightArrow_02 i:nth-child(2)').on('click', function () {
    //     $('.rightSlider_02').slick('slickNext')
    // });
    // $('.rightArrow_03 i:nth-child(1)').on('click', function () {
    //     $('.rightSlider_03').slick('slickPrev')
    // });
    // $('.rightArrow_03 i:nth-child(2)').on('click', function () {
    //     $('.rightSlider_03').slick('slickNext')
    // });
    // $('.rightArrow_04 i:nth-child(1)').on('click', function () {
    //     $('.rightSlider_04').slick('slickPrev')
    // });
    // $('.rightArrow_04 i:nth-child(2)').on('click', function () {
    //     $('.rightSlider_04').slick('slickNext')
    // });


})

