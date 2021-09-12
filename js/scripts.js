$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
    });
});
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topbtn').fadeIn();
    } else{
      $('#topbtn').fadeOut();
    }
  });

  $("#topbtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
