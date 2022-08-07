$(document).ready(function(){
//  slick
  $('.sl').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
   ]
  });

//Scroll slow
    $(".scroll").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    });
// Button go-top
    $('go-top').show();
    $(function() {
        $.fn.scrollToTop = function() {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });
    $(function() {
        $("#go-top").scrollToTop();
    });
    // щоб приховати і показати btn menu bootstrap див у загальній папці reed me
// menu hide show
    $(".menu-lang-mobile").click(function(){
        if ($( "button.navbar-toggler" ).attr( "aria-expanded", "true" )) {
            $( "button.navbar-toggler").addClass("collapsed");
            $( "button.navbar-toggler" ).attr( "aria-expanded", "false" );
            $(".navbar-collapse.collapse").removeClass("show");
            $(".navbar-collapse.collapse" ).css({"display": "none"})
            $("div.menu-lang").toggle();
        }
        else if ($( "button.navbar-toggler" ).attr( "aria-expanded", "false" )) {
                $("div.menu-lang").toggle();
        }
    });
    $("button.navbar-toggler").click(function(){
        if ($( ".menu-lang" ).css({"display": "none"})) {
            $(".navbar-collapse.collapse").toggle();;
        } else if ($( ".menu-lang" ).css({"display": "block"})) {
            $( ".menu-lang" ).css({"display": "none"});
            $(".navbar-collapse.collapse").toggle();;
        }
    });
//alert message style
    if ($(".contact div").hasClass("alert")) {
        $( ".contact-form" ).css({"margin-top": "0"});
    }
});
window.onresize = function() {
    if (window.innerWidth >= 768) {
        $(".menu-lang").hide();
    }
};

