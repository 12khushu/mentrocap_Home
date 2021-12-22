$(window).scroll(function(){
    if (window.scrollY > 270) 
    {
        $("nav.navbar").addClass("fixed-top");
        $("body").css("padding-top","38px");
     } else {
          $("body").css("padding-top","0px");
          $("nav.navbar").removeClass("fixed-top");
     } 
  });