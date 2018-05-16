(function (){
    var currentSection = "";

    $(".menu > li").click(MainMenuClick);

    $(".btn-gameDev, .btn-illustrator, .btn-webDesigner, .btn-aboutMe").click(NavMenuClick);

    $(".btn-hamburger").click(HamburgerClick);

    $(".btn-backArrow").click(NavBackClick);

    $(".portfolio-main > .btn-x").click(XOutClick);

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

    //Setting up illustrator examples

    //These are the file names - description pairings for each of the portfolio pieces. They will be input into urls later.
    var illustratorPieces = [
        "ArtBashGraphic_desktop",
            "<span><strong>Finish Him!</strong></span><br>My submission for <strong>Bit Bash: Art Bash 2014</strong>.",
        "GeorgeHufnagl",
            "<strong>George Hufnagl, Sound Designer</strong>.",
        "PaleoGame_ELPermian",
            "<span>Another piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Permian period in Earth's history.</span><br>The scene is of an ancient lake that used to exist in Southern Tanzania. An extinct species of dicynodonts, ancient human ancestors, are foraging in the foreground.",
        "PaleoGame_LLPermian",
            "<span>Another piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Permian period in Earth's history.</span><br>The scene is of an ancient flood plain that used to exist in Southern Tanzania. In the foreground, the long since extinct species of dicynodonts, <strong>diictodon</strong>, are in conflict over a burrow.",
        "PaleoGame_MTriassic",
            "<span>A piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Middle Triassic period of Earth's history.</span><br>The scene is of an ancient pond that used to exist in Southern Tanzania. A family of Asilisaurus, an early species of dinosaur, is eyeing a family of Stenaulorhynchus Stockleyi from across the water.",
        "PaleoGame_title_desktop",
            "<strong>Paleontology Manager</strong>'s title illustration.",
        "Rocky_desktop",
            "<strong>Rocky In A Blanket</strong>",
        "WhitakerTrebella",
            "<strong>Whitaker Trebella, Game Developer</strong>"
    ];

    var illustratorPiecesOrder = [4, 1, 2, 7, 3, 5, 6, 0];
    var illustratorSqrPieces = [];

    var illustratorElement = $("#portfolio-illustrator .portfolio-main");
    
    for (let i=0; i<illustratorPieces.length/4; i++){
         var row = $("<div>", {class:"row"});
         illustratorElement.append(row);
    }
    var illustratorRows = $("#portfolio-illustrator .row");
    console.log(illustratorRows);

    for (let i=0; i<illustratorPieces.length / 2; i++){
        var whichImg = illustratorPiecesOrder[i]*2;
        var whichDescription = illustratorPiecesOrder[i]*2+1;
        var newFigure = $("<a>", {class:"portfolio-item", href:"#", id:illustratorPieces[whichImg]});
        
        illustratorRows[Math.floor(i/2)].appendChild(newFigure[0]);
        newFigure[0].innerHTML = "<figure><img src='images/illustrator/" + illustratorPieces[whichImg] + ".jpg'><figcaption class='img-caption'>" + illustratorPieces[whichDescription] + "</figcaption></figure>";
        if (illustratorPieces[whichImg].includes("_desktop")){
            illustratorSqrPieces.push($("#" + illustratorPieces[whichImg] + " img"));
        }
    }

    console.log(illustratorElement[0]);

    $(window).resize(ResizeEvent);
    function ResizeEvent(){
        var w = $(window).width();
       if (currentSection != "" && w > 1000 && !$(currentSection + " .portfolio-nav-name").hasClass(".portfolio-nav-nameSlideIn")){
           AnimatePortfolioNav(currentSection);
       }

       SquareOrUnSquareImgs();
    }

    function SquareOrUnSquareImgs(){
        if ($(window).width() > 1000 && !illustratorSqrPieces[0].attr("src").includes("_desktop")){
            for (let i=0; i<illustratorSqrPieces.length; i++){
                var n = illustratorSqrPieces[i].attr("src").indexOf(".jpg");
                illustratorSqrPieces[i].attr("src", illustratorSqrPieces[i].attr("src").slice(0, n) + "_desktop.jpg");
            }
        } else if ($(window).width() <= 1000 && illustratorSqrPieces[0].attr("src").includes("_desktop")){
            for (let i=0; i<illustratorSqrPieces.length; i++){
                var n = illustratorSqrPieces[i].attr("src").indexOf("_desktop");
                illustratorSqrPieces[i].attr("src", illustratorSqrPieces[i].attr("src").slice(0, n) + ".jpg");
            }
        }
    }

    $(".portfolio-item").click(TestClick);

    function TestClick(e){
        console.log(e.currentTarget);
    }

    
    SquareOrUnSquareImgs();

})();