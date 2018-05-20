(function (){
    var lightbox = $("#lightbox");
    var currentSection = "";

    $(".menu > li").click(MainMenuClick);

    $(".btn-gameDev, .btn-illustrator, .btn-webDesigner, .btn-aboutMe").click(NavMenuClick);

    $(".btn-hamburger").click(HamburgerClick);

    $(".btn-backArrow").click(NavBackClick);

    $(".portfolio-main > .btn-x").click(XOutClick);

    $("#lightbox, #lightbox .btn-x").click(XOutLightboxClick);

    function MainMenuClick(e){
        console.log(e.currentTarget);

        GoToNewSection("#" +  e.currentTarget.id.replace("btn-mm", "portfolio"), 0);
    }

    function NavMenuClick(e){
        console.log(e.currentTarget);

        
        GoToNewSection("#" + e.currentTarget.className.replace("btn", "portfolio"), 400);
        
    }

    function GoToNewSection(targetSection, newSectionDelay){
        var previousSection = currentSection;

        if (previousSection){
            var ps = $(previousSection);
            ps.css({top:"", left:""});
            AddClass(ps[0], "hide");
            ResetNavMenuSlide(previousSection);
        }

        
        var wrapper = $(targetSection + " .portfolio-nav-wrapper");
        setTimeout(function(){
            var ts = $(targetSection);
            ts.css({top:"0", left:"0"});
            RemoveClass(ts[0], "hide");

            if (wrapper.css("margin-left") == "0px"){
                AnimatePortfolioNav(targetSection);
            }
        }, newSectionDelay);

        currentSection = targetSection;
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

        var cs = $(currentSection);
        cs.css({top:"", left:""});
        AddClass(cs[0], "hide");
        
        ResetNavMenuSlide(currentSection);
        
    }

    function XOutLightboxClick(e){
        console.log(e.currentTarget);

        if (e.currentTarget.id == "lightbox")
            lightbox.toggleClass("displayNone");
    }

    function ResetNavMenuSlide(section){
        //$(section + " .portfolio-nav-wrapper").css({"transform": ""});
        $(section + " .portfolio-nav-wrapper").css("margin-left", "");
    }

    function CheckIfNavIsOut(whichNav){
        
    }

    //Setting up illustrator examples

    //These are the file names - description pairings for each of the portfolio pieces. They will be input into urls later.
    var illustratorImgs = [
        "ArtBashGraphic_desktop",
        "GeorgeHufnagl",
        "PaleoGame_ELPermian",
        "PaleoGame_LLPermian",
        "PaleoGame_MTriassic",
        "PaleoGame_title_desktop",
        "Rocky_desktop",
        "WhitakerTrebella"
    ];

    var illustratorDescriptions = [
        "<span><strong>Finish Him!</strong></span><br>My submission for <strong>Bit Bash: Art Bash 2014</strong>.",
        "<strong>George Hufnagl, Sound Designer</strong>.",
        "<span>Another piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Permian period in Earth's history.</span><br>The scene is of an ancient lake that used to exist in Southern Tanzania. An extinct species of dicynodonts, ancient human ancestors, are foraging in the foreground.",
        "<span>Another piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Permian period in Earth's history.</span><br>The scene is of an ancient flood plain that used to exist in Southern Tanzania. In the foreground, the long since extinct species of dicynodonts, <strong>diictodon</strong>, are in conflict over a burrow.",
        "<span>A piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Middle Triassic period of Earth's history.</span><br>The scene is of an ancient pond that used to exist in Southern Tanzania. A family of Asilisaurus, an early species of dinosaur, is eyeing a family of Stenaulorhynchus Stockleyi from across the water.",
        "<strong>Paleontology Manager</strong>'s title illustration.",
        "<strong>Rocky In A Blanket</strong>",
        "<strong>Whitaker Trebella, Game Developer</strong>"
    ];

    var illustratorImgsOrder = [4, 1, 2, 7, 3, 5, 6, 0];
    var illustratorSqrPieces = [];

    var illustratorElement = $("#portfolio-illustrator .portfolio-main");
    
    for (let i=0; i<illustratorImgs.length/2; i++){
         var row = $("<div>", {class:"row"});
         illustratorElement.append(row);
    }
    var illustratorRows = $("#portfolio-illustrator .row");
    console.log(illustratorRows);

    for (let i=0; i<illustratorImgs.length; i++){
        var whichImg = illustratorImgsOrder[i];
        var newFigure = $("<a>", {class:"portfolio-item", href:"#", id:illustratorImgs[whichImg]});
        newFigure[0].dataset.orderNum = i;
        
        illustratorRows[Math.floor(i/2)].appendChild(newFigure[0]);
        newFigure[0].innerHTML = "<figure><img src='images/illustrator/" + illustratorImgs[whichImg] + ".jpg'><figcaption class='img-caption'>" + illustratorDescriptions[whichImg] + "</figcaption></figure>";
        if (illustratorImgs[whichImg].includes("_desktop")){
            illustratorSqrPieces.push($("#" + illustratorImgs[whichImg] + " img"));
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

    
    SquareOrUnSquareImgs();




    //////////////    Lightbox stuff   /////////////////////



    var paleoScreenshots = [];
    for (let i=0; i<6; i++){
        paleoScreenshots.push("images/gameDeveloper/paleoGame/PaleoGame_" + i + ".jpg");
    }

    var paleoCaptions = [
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    // Add directory path to illustrator image names. Also grab order from illustratorImgsOrder.
    var illustratorLightbox = [];
    var illustratorCaptions = [];
    var ic = [
        "Finish Him!",
        "George Hufnagl, Sound Designer",
        "Dicynodonts of the Late Permian",
        "Diictodons Argue Over a Burrow",
        "A Family of Asilisaurus Eyeing Some Dicynodonts",
        "Paleontology Manager's Title Page",
        "Rocky in a Blanket",
        "Whitaker Trebella, Game Developer"
    ];
    for (let i=0; i<illustratorImgs.length; i++){
        illustratorLightbox.push("images/illustrator/" + illustratorImgs[illustratorImgsOrder[i]] + ".jpg");
        illustratorLightbox[i] = illustratorLightbox[i].replace("_desktop", "");

        illustratorCaptions.push(ic[illustratorImgsOrder[i]]);
    }


    var lightboxImg = $("#lightbox-img");
    var lightboxCaption = $("#lightbox-caption");
    var lightboxButtons = $("#btn-lightbox-left, #btn-lightbox-right");
    var lightboxLeft = $("#btn-lightbox-left");
    var lightboxRight = $("#btn-lightbox-right");
    console.log(lightboxButtons);
    lightboxButtons.click(LightboxArrowClick);


    /*  New Lightbox setup
    1. Default placeholder for LB img is "Loading..." text
    2. When LB is activated, JS code injects each gallery pic as a new img element, all starting off with "displayNone" class.
    3. The current img that will be shown has the "displayNone" class toggled on.

    This way, the images load when someone activates LB, and not at page load.
     */


    var currentImg = 0;
    var currentGallery = illustratorLightbox;
    var currentCaptions = illustratorCaptions;

    function ResetLightbox(){
        currentImg = 0;
        if (!lightboxLeft.hasClass("hide")) lightboxLeft.addClass("hide");
        if (lightboxRight.hasClass("hide")) lightboxRight.removeClass("hide");
        SetLightboxImg(0);
    }

    ResetLightbox();

    function LightboxArrowClick(e, imgClick){
        console.log(e.currentTarget);
        e.stopPropagation();
        

        if (e.currentTarget.id.includes("left") && currentImg > 0){
            currentImg--;
        }

        if ((e.currentTarget.id.includes("right") || imgClick) && currentImg < currentGallery.length - 1){
            currentImg++;
        }


        SetLightboxImg(currentImg);

    }

    function SetLightboxImg(imgNum){
        
        lightboxImg.attr("src", currentGallery[imgNum]);
        lightboxCaption[0].innerHTML = currentCaptions[imgNum];

        if ((currentImg > 0 && lightboxLeft.hasClass("hide")) || (currentImg == 0 && !lightboxLeft.hasClass("hide"))) 
            lightboxLeft.toggleClass("hide");
        if ((currentImg < currentGallery.length - 1 && lightboxRight.hasClass("hide")) || (currentImg == currentGallery.length - 1 && !lightboxRight.hasClass("hide"))) 
            lightboxRight.toggleClass("hide");

    }


    var paleoScreenshotsButton = $("#btn-paleoGame");
    paleoScreenshotsButton.click(PaleoShotsClick);

    function PaleoShotsClick(e){

        currentGallery = paleoScreenshots;
        currentCaptions = paleoCaptions;

        ResetLightbox();

        lightbox.toggleClass("displayNone");
    }



    var illustratorItems = $("#portfolio-illustrator .portfolio-item");
    illustratorItems.click(IllustratorItemClick);

    function IllustratorItemClick(e){
        console.log(e.currentTarget);

        currentGallery = illustratorLightbox;
        currentCaptions = illustratorCaptions;

        ResetLightbox();
        currentImg = e.currentTarget.dataset.orderNum;
        SetLightboxImg(currentImg);

        lightbox.toggleClass("displayNone");
    }


    lightboxImg.click(LightboxImgClick);
    function LightboxImgClick(e){
        console.log(e.currentTarget);
        e.stopPropagation();

        LightboxArrowClick(e, true);
    }








    // Generic functions

    function AddClass(el, c){
        if (!el.className.includes(c)){
            el.className = el.className + " " + c;
        }
    }

    function RemoveClass(el, c){
        if (el.className.includes(c)){
            el.className = el.className.replace(" " + c, "");
        }
    }


})();