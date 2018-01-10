$(document).ready(function(){
    
    
    
    $("#signup-form").submit(function(event){
        event.preventDefault();
        $.post('signup', {
            
        username : $("input[name='rusername']").val(),
        password : $("input[name='rpassword']").val(),
        email : $("input[name='remail']").val()
        });
        alert("bahcac");
    });
    
    
    $("#wp1,#wp2,#wp3,#wp4,#crn-btn").hide();
    
    if($(window).width()<=414 ){
        $("#logo-div").css({"height":"50px"});
    }
    
    if($(window).width()<=414){
        $(".gaps").remove();
    }
    
    var scroll_start = 0;
    var startchange = $('#buttons');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $("#buttons").css('background-color', 'rgba(22,22,22,0.8)');
                
            } 
            else {
                $('#buttons').css('background-color', 'transparent');
                      }
   });
    }
    

window.setTimeout(function() {
				$("#wp1").addClass("animated fadeInUp").show();
				}, 1000);
    window.setTimeout(function() {
				$("#wp2").addClass("animated fadeInUp").show();
				}, 1500);
    window.setTimeout(function() {
				$("#wp3").addClass("animated fadeInUp").show();
				}, 2000);
    window.setTimeout(function() {
				$("#wp4").addClass("animated fadeInUp").show();
				}, 2500);
    window.setTimeout(function() {
				$("#crn-btn").addClass("animated fadeInUp").show();
				}, 3000);

        
        
    
    /* Scrolling */
    $("#scroll-to-home").click(function(){
       $("html,body").animate({
           scrollTop: $("#home").offset().top}, 1122);
       });
    $("#scroll-to-why-us").click(function(){
       $("html,body").animate({
           scrollTop: $("#why-us").offset().top}, 1122);
       });
    $("#scroll-to-gallery").click(function(){
       $("html,body").animate({
           scrollTop: $("#gallery").offset().top}, 1122);
       });
    $("#scroll-to-contact").click(function(){
       $("html,body").animate({
           scrollTop: $("#contact").offset().top}, 1122);
       });
    
    /* Open Sign In Up */
    $("#open-sign-in1, #open-sign-in2,#home-sec-but").click(function(){
        $("#buttons").hide();
        $("#log-sign-div").show();
        $("#log-sign-div").removeClass("animated slideOutUp");
        $("#log-sign-div").addClass("animated slideInDown");
    });
    
    
    
    /* code to show and hide signup section */
    $("#skip-text").click(function(){
        $("#log-sign-div").removeClass("animated slideInDown");
        $("#log-sign-div").addClass("animated slideOutUp");
        $("#buttons").show();
        });
    
    
    /*nav-bar height setting*/
    var navbarheight=$("#buttons").height();
    navbarheight += navbarheight;
    /*alert("ABC:" + navbarheight);*/
    $("#why-us,#gallery,#contact").css({"padding-top":navbarheight});
    
    
    $("#home, #why-us,#gallery").css({"height": $(window).height()});
    
    $("#footer").css({"height": $("#buttons").height()*1.5});
    
    $("#contact").css({"height": $(window).height()-$("#footer").height()});
    
    /* CSS Animated */
    $(".target").hover(function(){
        $(this).addClass("animated pulse");});
    $(".target").mouseleave(function(){
        $(this).removeClass("animated pulse");});   
    
    $(".thumbnail").hover(function(){
        $(this).addClass("animated pulse-rev");});
    $(".thumbnail").mouseleave(function(){
        $(this).removeClass("animated pulse-rev");});   
});
