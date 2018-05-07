(function (){
    var currentSection = "";

    $(".menu > li").click(MainMenuClick);

    $(".btn-gameDev, .btn-illustrator, .btn-webDesigner, .btn-aboutMe").click(NavMenuClick);

    $(".btn-hamburger").click(HamburgerClick);

    $(".btn-backArrow").click(NavBackClick);

    $(".portfolio-main > .btn-x").click(XOutClick);

    $(window).resize(ResizeEvent);
    function ResizeEvent(){
        var w = $(window).width();
       console.log(w);
       if (currentSection != "" && w > 1000 && !$(currentSection + " .portfolio-nav-name").hasClass(".portfolio-nav-nameSlideIn")){
           AnimatePortfolioNav(currentSection);
       }
    }

    function MainMenuClick(e){
        console.log(e.currentTarget);

        //which section was clicked?
        currentSection = "#" +  e.currentTarget.id.replace("btn-mm", "portfolio");

        //which wrapper is in that section?
        var wrapper = $(currentSection + " .portfolio-nav-wrapper");

        //Change the current section's position to 0,0.
        $(currentSection).css({top: "0", left: "0"});

        //If the nav's default position is out, activate menu animations.
        if (wrapper.css("margin-left") == "0px"){
             AnimatePortfolioNav(currentSection);
        }
    }

    function NavMenuClick(e){
        console.log(e.currentTarget);

        var previousSection = "#" + e.currentTarget.parentElement.parentElement.parentElement.parentElement.id;

        $("#portfolio-gameDev, #portfolio-illustrator, #portfolio-webDesigner, #portfolio-aboutMe").css({top:"", left:""});


        currentSection = "#" + e.currentTarget.className.replace("btn", "portfolio");
        
        
        var wrapper = $(currentSection + " .portfolio-nav-wrapper");
        setTimeout(function(){
            $(currentSection).css({top:"0", left:"0"});
            if (wrapper.css("margin-left") == "0px"){
                AnimatePortfolioNav(currentSection);
            }
        }, 400);
        
        ResetNavMenuSlide(previousSection);
    }

    function AnimatePortfolioNav(currentSection){
        $(currentSection + " .portfolio-nav-name").addClass("portfolio-nav-nameSlideIn");
        $(currentSection + " .portfolio-nav").addClass("portfolio-navSlideIn");
        $(currentSection + " .portfolio-nav-wrapper .socialLinks-wrapper").addClass("portfolio-nav-socialLinksSlideIn");
    }

    function HamburgerClick(e){
        console.log(e.currentTarget);

        //var currentSection = "#" + e.currentTarget.parentElement.parentElement.id;

        //$(currentSection + " .portfolio-nav-wrapper").css({"transform": "translateX(0%)"});
        $(currentSection + " .portfolio-nav-wrapper").css("margin-left", "0");
        AnimatePortfolioNav(currentSection);
    }

    function NavBackClick(e){
        console.log(e.currentTarget);

        //var currentSection = "#" + e.currentTarget.parentElement.parentElement.parentElement.id;
        
        ResetNavMenuSlide(currentSection);

    }

    function XOutClick(e){
        console.log(e.currentTarget);

        //var currentSection = "#" + e.currentTarget.parentElement.parentElement.id;

        $(currentSection).css({top:"", left:""});
        
        ResetNavMenuSlide(currentSection);
    }

    function ResetNavMenuSlide(section){
        //$(section + " .portfolio-nav-wrapper").css({"transform": ""});
        $(section + " .portfolio-nav-wrapper").css("margin-left", "");
    }

    function CheckIfNavIsOut(whichNav){
        
    }

})();