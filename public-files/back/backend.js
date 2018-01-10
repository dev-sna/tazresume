$(document).ready(function(){
    
    var skillsLevels = [0, 0, 0, 0, 0, 0, 0, 0];
    
    alert("Vlll");
    
    $.get('/get-form-data', function(rows){
        alert(rows.username);
        
        $("input[name='firstName']").val(rows.firstName),
        $("input[name='lastName']").val(rows.lastName),  
        $("input[name='dob']").val(rows.dob),
        $("input[name='address']").val(rows.address),
        $("input[name='cellNumOne']").val(rows.cellNumOne),
        $("input[name='cellNumTwo']").val(rows.cellNumTwo),  
        $("input[name='email']").val(rows.email),
        $("input[name='skypeID']").val(rows.skypeID),
        $("input[name='postApplied']").val(rows.postApplied),
            
        $("input[name='instNameOne']").val(row.instNameOne),
        $("input[name='degreeOne']").val(rows.degreeOne),
        $("input[name='qperiodOne']").val(rows.qperiodOne),
        $("input[name='cgpaOne']").val(rows.cgpaOne),
        $("input[name='instNameTwo']").val(rows.instNameTwo), 
        $("input[name='degreeTwo']").val(rows.degreeTwo),
        $("input[name='qperiodTwo']").val(rows.qperiodTwo),
        $("input[name='cgpaTwo']").val(rows.cgpaTwo),
        $("input[name='instNameThree']").val(rows.instNameThree),
        $("input[name='degreeThree']").val(rows.degreeThree),
        $("input[name='qperiodThree']").val(rows.qperiodThree),
        $("input[name='cgpaThree']").val(rows.cgpaThree),
        $("input[name='instNameFour']").val(rows.instNameFour),
        $("input[name='degreeFour']").val(rows.degreeFour),
        $("input[name='qperiodFour']").val(rows.qperiodFour),
        $("input[name='cgpaFour']").val(rows.cgpaFour),
        $("input[name='orgyNameOne']").val(rows.orgyNameOne),
        $("input[name='jobTitleOne']").val(rows.jobTitleOne),
        $("input[name='eperiodOne']").val(rows.eperiodOne),
        $("input[name='orgyNameTwo']").val(rows.orgyNameTwo),
        $("input[name='jobTitleTwo']").val(rows.jobTitleTwo),
        $("input[name='eperiodTwo']").val(rows.eperiodTwo),
  

        $("input[name='orgyNameThree']").val(rows.orgyNameThree),
        $("input[name='jobTitleThree']").val(rows.jobTitleThree),
        $("input[name='eperiodThree']").val(rows.eperiodThree),
        $("input[name='orgyNameFour']").val(rows.orgyNameFour),
        $("input[name='jobTitleFour']").val(rows.jobTitleFour),
        $("input[name='eperiodFour']").val(rows.eperiodFour),
 
        $("input[name='skOne']").val(rows.skOne),
        $("input[name='skTwo']").val(rows.skTwo),
        $("input[name='skThree']").val(rows.skThree),
        $("input[name='skFour']").val(rows.skFour),
        $("input[name='skFive']").val(rows.skFive),
        $("input[name='skSix']").val(rows.skSix),
        $("input[name='skSeven']").val(rows.skSeven),
        $("input[name='skEight']").val(rows.skEight),
        
        $("input[name='lvOne']").val(rows.lvOne), 
        $("input[name='lvTwo']").val(rows.lvTwo),
        $("input[name='lvThree']").val(rows.lvThree),
        $("input[name='lvFour']").val(rows.lvFour) ,
        $("input[name='lvFive']").val(rows.lvFive) ,
        $("input[name='lvSix']").val(rows.lvSix) ,
        $("input[name='lvSeven']").val(rows.lvSeven),
        $("input[name='lvEight']").val(rows.lvEight)
        });

    $("#submit-form").click(function(){
        
        if($("input[name='lvOne']").val() != "")
            skillsLevels[0] = $("input[name='lvOne']").val();
        
        if($("input[name='lvTwo']").val() != "")
            skillsLevels[1] = $("input[name='lvTwo']").val();
        
        if($("input[name='lvThree']").val() != "")
            skillsLevels[2] = $("input[name='lvThree']").val();
        
        if($("input[name='lvFour']").val() != "")
            skillsLevels[3] = $("input[name='lvFour']").val();
        
        if($("input[name='lvFive']").val() != "")
            skillsLevels[4] = $("input[name='lvFive']").val();
        
        if($("input[name='lvSix']").val() != "")
            skillsLevels[5] = $("input[name='lvSix']").val();
        
        if($("input[name='lvSeven']").val() != "")
            skillsLevels[6] = $("input[name='lvSeven']").val();
        
        if($("input[name='lvEight']").val() != "")
            skillsLevels[7] = $("input[name='lvEight']").val();
        
    $.post('/post-form', {
    
        /* Profile Section */
    firstName       :   $("input[name='firstName']").val(),
    lastName        :   $("input[name='lastName']").val(),  
    dob             :   $("input[name='dob']").val(),
    address         :   $("input[name='address']").val(),
    cellNumOne      :   $("input[name='cellNumOne']").val(),
    cellNumTwo      :   $("input[name='cellNumTwo']").val(),  
    email           :   $("input[name='email']").val(),
    skypeID         :   $("input[name='skypeID']").val(),
    postApplied     :   $("input[name='postApplied']").val(),
    /* Qualification Section */
    instNameOne     :   $("input[name='instNameOne']").val(),
    degreeOne       :   $("input[name='degreeOne']").val(),
    qperiodOne      :   $("input[name='qperiodOne']").val(),
    cgpaOne         :   $("input[name='cgpaOne']").val(),
    
    instNameTwo     :   $("input[name='instNameTwo']").val(),
    degreeTwo       :   $("input[name='degreeTwo']").val(),
    qperiodTwo      :   $("input[name='qperiodTwo']").val(),
    cgpaTwo         :   $("input[name='cgpaTwo']").val(),

    instNameThree   :   $("input[name='instNameThree']").val(),
    degreeThree     :   $("input[name='degreeThree']").val(),
    qperiodThree    :   $("input[name='qperiodThree']").val(),
    cgpaThree       :   $("input[name='cgpaThree']").val(),

    instNameFour    :   $("input[name='instNameFour']").val(),
    degreeFour      :   $("input[name='degreeFour']").val(),
    qperiodFour     :   $("input[name='qperiodFour']").val(),
    cgpaFour        :   $("input[name='cgpaFour']").val(),
    
    /* Experience Section */
    orgyNameOne     :   $("input[name='orgyNameOne']").val(),
    jobTitleOne     :   $("input[name='jobTitleOne']").val(),
    eperiodOne      :   $("input[name='eperiodOne']").val(),
    
    orgyNameTwo     :   $("input[name='orgyNameTwo']").val(),
    jobTitleTwo     :   $("input[name='jobTitleTwo']").val(),
    eperiodTwo      :   $("input[name='eperiodTwo']").val(),
    
    orgyNameThree   :   $("input[name='orgyNameThree']").val(),
    jobTitleThree   :   $("input[name='jobTitleThree']").val(),
    eperiodThree    :   $("input[name='eperiodThree']").val(),
    
    orgyNameFour    :   $("input[name='orgyNameFour']").val(),
    jobTitleFour    :   $("input[name='jobTitleFour']").val(),
    eperiodFour     :   $("input[name='eperiodFour']").val(),
    
    /* Skills Section */
    skOne           :   $("input[name='skOne']").val(),
    lvOne           :   skillsLevels[0],

    skTwo           :   $("input[name='skTwo']").val(),
    lvTwo           :   skillsLevels[1],

    skThree         :   $("input[name='skThree']").val(),
    lvThree         :   skillsLevels[2],
    
    skFour          :   $("input[name='skFour']").val(),
    lvFour          :   skillsLevels[3],

    skFive          :   $("input[name='skFive']").val(),
    lvFive          :   skillsLevels[4],

    skSix           :   $("input[name='skSix']").val(),
    lvSix           :   skillsLevels[5],

    skSeven         :   $("input[name='skSeven']").val(),
    lvSeven         :   skillsLevels[6],
    
    skEight         :   $("input[name='skEight']").val(),
    lvEight         :   skillsLevels[7]
});
    });
    
    
    
    if($(window).width()<=414){
        alert("Working");
        $("#left-div-btn").hide();
         
        
        $(window).on("swipe",function(){
           $("#left-div-btn").removeClass("animated slideOutLeft");
            $("#left-div-btn").addClass("animated slideInLeft");
            $("#left-div-btn").show();
        });
        
        /* Swipe Left */
         $(window).on("swipeleft",function(){
             $("#left-div-btn").removeClass("animated slideInLeft");
             $("#left-div-btn").addClass("animated slideOutLeft");
             
             /* Wait one second then hide */
             setTimeout(function() {
                $("#left-div-btn").hide();
                }, 1000 );
             
            /* $("#left-div-btn").hide(); */

         });
    }
    /*Validation code started*/
    /**/
    $("#qual-section,#exp-section,#ski-section").hide();
    $("#pro").addClass("current-active-btn");
    
    $("#pro-section").addClass("current-active-form");
    var navbarHeight=$("#navheader").height()+2;
    $("#left-div-btn,#right-div,#slideout-btn").css({"padding-top": navbarHeight});
    $("#main-container").css({"height": $(window).height()});
    $(".gallery-img").mouseenter(function(){
       $(this).addClass("animated pulse"); 
    });
    $(".gallery-img").mouseleave(function(){
       $(this).removeClass("animated pulse"); 
    });
    /*Color remover and animation remover*/
    var classOps=function(btn,form){
        
        
        
        $(".current-active-form").hide(function(){
            $(".current-active-form").removeClass("animated fadeIn");
            $(".current-active-form").addClass("animated fadeOut");
        $(".current-active-btn").removeClass("current-active-btn");
        });
        
        $(form).show(function(){
            $(btn).addClass("current-active-btn");
        $(form).addClass("current-active-form");
            $(form).removeClass("animated fadeOut")
            $(form).addClass("animated fadeIn");
        });
    };
    
    /*Color remover and animation remover*/
    
    
    
    
    /*Color changer and animation adder functions*/
    /*<*****************************************>*/
    $("#pro").click(function(){
        
        if(!$(this).hasClass("current-active-btn")){
        classOps("#pro","#pro-section");    
        }
        });
    $("#exp").click(function(){
        if(!$(this).hasClass("current-active-btn")){
        classOps("#exp","#exp-section");    
        }
    });
    $("#ski").click(function(){
        if(!$(this).hasClass("current-active-btn")){
        classOps("#ski","#ski-section");    
        }
    });
    
    $("#qual").click(function(){
        if(!$(this).hasClass("current-active-btn")){
        classOps("#qual","#qual-section");    
        }
    });
    /*<*****************************************>*/
    /*Color changer and animation adder functions*/
}); 