(function (){
    $(".menu > li").click(MainMenuClick);

    $(".btn-gameDev, .btn-illustrator, .btn-webDesigner, .btn-aboutMe").click(NavMenuClick);

    $(".btn-hamburger").click(HamburgerClick);

    $(".btn-backArrow").click(NavBackClick);

    $(".portfolio-main > .btn-x").click(XOutClick);

    function MainMenuClick(e){
        console.log(e.currentTarget);

        var whichSection = "#" +  e.currentTarget.id.replace("btn-mm", "portfolio");
        var wrapper = $(whichSection + " .portfolio-nav-wrapper");

        $(whichSection).css({top: "0", left: "0"});
        if (wrapper.position().left == 0){
             AnimatePortfolioNav(whichSection);
        }
    }

    function NavMenuClick(e){
        console.log(e.currentTarget);

        var currentSection = "#" + e.currentTarget.parentElement.parentElement.parentElement.parentElement.id;

        $("#portfolio-gameDev, #portfolio-illustrator, #portfolio-webDesigner, #portfolio-aboutMe").css({top:"", left:""});
        var whichSection = "#" + e.currentTarget.className.replace("btn", "portfolio");
        var wrapper = $(whichSection + " .portfolio-nav-wrapper");
        setTimeout(function(){
            $(whichSection).css({top:"0", left:"0"});
            if (wrapper.position().left == 0){
                AnimatePortfolioNav(whichSection);
            }
        }, 400);
        
        ResetNavMenuSlide(currentSection);
    }

    function AnimatePortfolioNav(whichSection){
        $(whichSection + " .portfolio-nav-name").addClass("portfolio-nav-nameSlideIn");
        $(whichSection + " .portfolio-nav").addClass("portfolio-navSlideIn");
        $(whichSection + " .portfolio-nav-wrapper .socialLinks-wrapper").addClass("portfolio-nav-socialLinksSlideIn");
    }

    function HamburgerClick(e){
        console.log(e.currentTarget);

        var whichSection = "#" + e.currentTarget.parentElement.parentElement.id;

        $(whichSection + " .portfolio-nav-wrapper").css({"transform": "translateX(0%)"});
        AnimatePortfolioNav(whichSection);
    }

    function NavBackClick(e){
        console.log(e.currentTarget);

        var whichSection = "#" + e.currentTarget.parentElement.parentElement.parentElement.id;
        
        ResetNavMenuSlide(whichSection);

    }

    function XOutClick(e){
        console.log(e.currentTarget);

        var whichSection = "#" + e.currentTarget.parentElement.parentElement.id;

        $(whichSection).css({top:"", left:""});
        
        ResetNavMenuSlide(whichSection);
    }

    function ResetNavMenuSlide(whichSection){
        $(whichSection + " .portfolio-nav-wrapper").css({"transform": ""});
    }

})();