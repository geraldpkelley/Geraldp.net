(function (){
    $(".menu > li").click(MainMenuClick);

    $(".btn-gameDev, .btn-illustrator, .btn-webDesigner, .btn-aboutMe").click(NavMenuClick);

    $(".portfolio-x").click(XOutClick);

    function MainMenuClick(e){
        console.log(e.currentTarget);

        var whichSection = "#" +  e.currentTarget.id.replace("btn-mm", "portfolio");

        $(whichSection).css({top: "0", left: "0"});
        AnimatePortfolioNav(whichSection);
    }

    function NavMenuClick(e){
        console.log(e.currentTarget);

        $("#portfolio-gameDev, #portfolio-illustrator, #portfolio-webDesigner, #portfolio-aboutMe").css({top:"", left:""});
        var whichSection = "#" + e.currentTarget.className.replace("btn", "portfolio");
        setTimeout(function(){
            $(whichSection).css({top:"0", left:"0"});
            AnimatePortfolioNav(whichSection);
        }, 400);
    }

    function AnimatePortfolioNav(whichSection){
        $(whichSection + " .portfolio-nav-name").addClass("portfolio-nav-nameSlideIn");
        $(whichSection + " .portfolio-nav").addClass("portfolio-navSlideIn");
        $(whichSection + " .socialLinks-wrapper").addClass("portfolio-nav-socialLinksSlideIn");
    }

    function XOutClick(e){
        console.log(e.currentTarget);

        $("#" + e.currentTarget.parentElement.parentElement.id).css({top:"", left:""});
        console.log($(e.currentTarget.parentElement.parentElement));
    }

})();