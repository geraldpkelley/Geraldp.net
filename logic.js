(function (){
    var currentSection = "";

    $(".menu > li > a").click(MainMenuClick);

    $(".btn-gameDev, .btn-illustrator, .btn-webDesigner, .btn-aboutMe").click(NavMenuClick);

    $(".btn-hamburger").click(HamburgerClick);

    $(".btn-backArrow").click(NavBackClick);

    $(".portfolio-main > .btn-x").click(XOutClick);

    $("#lightbox, #lightbox .btn-x").click(XOutLightboxClick);

    function MainMenuClick(e){
        console.log(e.currentTarget);

        GoToNewSection("#" +  e.currentTarget.parentElement.id.replace("btn-mm", "portfolio"), 0);
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

    function ResetNavMenuSlide(section){
        //$(section + " .portfolio-nav-wrapper").css({"transform": ""});
        $(section + " .portfolio-nav-wrapper").css("margin-left", "");
    }

    function CheckIfNavIsOut(whichNav){
        
    }

    //Setting up illustrator examples

    //These are the file names - description pairings for each of the portfolio pieces. They will be input into urls later.
    var illustratorImgs = [
        "ArtBashGraphic",
        "GeorgeHufnagl",
        "PaleoGame_ELPermian",
        "PaleoGame_LLPermian",
        "PaleoGame_MTriassic",
        "PaleoGame_title",
        "Rocky",
        "WhitakerTrebella"
    ];

    var illustratorDescriptions = [
        "<span><strong>Finish Him!</strong></span><br>My submission for <strong>Bit Bash: Art Bash 2014</strong>, a risograph poster competition.<br><span class='clickForFullImage'>Click for full image</span>",
        "<strong>George Hufnagl, Sound Designer</strong>.",
        "<span>Another piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Permian period in Earth's history.</span><br>The scene is of an ancient lake that used to exist in Southern Tanzania. An extinct species of dicynodonts, ancient human ancestors, are foraging in the foreground.",
        "<span>Another piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Permian period in Earth's history.</span><br>The scene is of an ancient flood plain that used to exist in Southern Tanzania. In the foreground, the long since extinct species of dicynodonts, <strong>diictodon</strong>, are in conflict over a burrow.",
        "<span>A piece made for the educational game, <strong>Paleontology Manager</strong>, illustrating the Middle Triassic period of Earth's history.</span><br>The scene is of an ancient pond that used to exist in Southern Tanzania. A family of Asilisaurus, an early species of dinosaur, is eyeing a family of Stenaulorhynchus Stockleyi from across the water.",
        "<strong>Paleontology Manager</strong>'s title illustration.",
        "<strong>Rocky in a Blanket</strong><br><span class='clickForFullImage'>Click for full image</span>",
        "<strong>Whitaker Trebella, Game Developer</strong>"
    ];

    var illustratorImgsOrder = [4, 1, 2, 7, 3, 5, 6, 0];
    var illustratorSqrPieces = [];

    var illustratorElement = $("#portfolio-illustrator .portfolio-main");
    
    for (var i=0; i<illustratorImgs.length/2; i++){
         var row = $("<div>", {class:"row"});
         illustratorElement.append(row);
    }
    var illustratorRows = $("#portfolio-illustrator .row");
    console.log(illustratorRows);

    for (var i=0; i<illustratorImgs.length; i++){
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

       //SquareOrUnSquareImgs();
    }

    function SquareOrUnSquareImgs(){
        if ($(window).width() > 1000 && !illustratorSqrPieces[0].attr("src").includes("_desktop")){
            for (var i=0; i<illustratorSqrPieces.length; i++){
                var n = illustratorSqrPieces[i].attr("src").indexOf(".jpg");
                illustratorSqrPieces[i].attr("src", illustratorSqrPieces[i].attr("src").slice(0, n) + "_desktop.jpg");
            }
        } else if ($(window).width() <= 1000 && illustratorSqrPieces[0].attr("src").includes("_desktop")){
            for (var i=0; i<illustratorSqrPieces.length; i++){
                var n = illustratorSqrPieces[i].attr("src").indexOf("_desktop");
                illustratorSqrPieces[i].attr("src", illustratorSqrPieces[i].attr("src").slice(0, n) + ".jpg");
            }
        }
    }

    
    //SquareOrUnSquareImgs();




    //////////////    Lightbox stuff   /////////////////////

    ////////  Variables  /////////

    //generic lightbox variables
    var lightbox = $("#lightbox");
    var lightboxLoading = $("#lightbox-loading");
    var lightboxCaption = $("#lightbox-caption");
    var lightboxArrowButtons = $("#btn-lightbox-left, #btn-lightbox-right");
    var lightboxLeft = $("#btn-lightbox-left");
    var lightboxRight = $("#btn-lightbox-right");
    var currentImg = 0;
    var currentGallery = [];
    var currentCaptions = [];

    // Paleo Game variables
    var paleoGallery = [];
    var paleoCaptions = [
        "Customize your avatar",
        "Dig up fauna, flora, and mineral specimens",
        "Prepare fauna specimens for transport",
        "Record your findings in your journal",
        "Discuss the discoveries with your academic advisor",
        "Analyze your data and reconstruct the past"
    ];
    var paleoGalleryButton = $("#btn-paleoGame");

    // Illustrator variables
    var illustratorPortItems = $("#portfolio-illustrator .portfolio-item");
    var illustratorMain = $("#portfolio-illustrator .portfolio-main");
    var illustratorGallery = [];
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


    ///////  Fill gallery arrays  //////////
    
    for (var i=0; i<6; i++){
        paleoGallery.push("images/gameDeveloper/paleoGame/PaleoGame_" + i + ".jpg");
    }

    for (var i=0; i<illustratorImgs.length; i++){
        illustratorGallery.push("images/illustrator/" + illustratorImgs[illustratorImgsOrder[i]] + ".jpg");
        illustratorGallery[i] = illustratorGallery[i].replace("_desktop", "");

        illustratorCaptions.push(ic[illustratorImgsOrder[i]]);
    }

    var paleoGalleryImgElements = [];
    var illustratorGalleryImgElements = [];


    //////  Setting up click events  ///////
    lightboxArrowButtons.click(LightboxArrowClick);
    paleoGalleryButton.click(InitializeLightBox);
    illustratorPortItems.click(InitializeLightBox);


    


    
    function ResetLightbox(){
        currentImg = 0;
        SetLightboxImg(0);
    }
    ResetLightbox();



    function LightboxArrowClick(e, imgClick){
        console.log(e.currentTarget);
        e.stopPropagation();

        
        TurnElementOnOff(currentGallery[currentImg][0], false);
        

        if (e.currentTarget.id.includes("left") && currentImg > 0){
            currentImg--;
        }

        if ((e.currentTarget.id.includes("right") || imgClick) && currentImg < currentGallery.length - 1){
            currentImg++;
        }


        SetLightboxImg(currentImg);

    }

    

    function LightboxImgClick(e){
        console.log(e.currentTarget);
        e.stopPropagation();

        LightboxArrowClick(e, true);
    }



    function SetLightboxImg(imgNum){
        
        if (currentGallery.length > 0){

            if (currentGallery[imgNum][0].dataset.isLoaded){
                TurnElementOnOff(lightboxLoading[0], false);
                TurnElementOnOff(currentGallery[imgNum][0], true);
            } else {
                TurnElementOnOff(lightboxLoading[0], true);
            }
            //lightboxImg.attr("src", currentGallery[imgNum]);
            lightboxCaption[0].innerHTML = currentCaptions[imgNum];
        }

        if ((currentImg > 0 && lightboxLeft.hasClass("hide")) || (currentImg == 0 && !lightboxLeft.hasClass("hide"))) 
            lightboxLeft.toggleClass("hide");
        if ((currentImg < currentGallery.length - 1 && lightboxRight.hasClass("hide")) || (currentImg == currentGallery.length - 1 && !lightboxRight.hasClass("hide"))) 
            lightboxRight.toggleClass("hide");

    }



    function InitializeLightBox(e){
        console.log(e.currentTarget, "initializing");

        if (e.currentTarget.id == "btn-paleoGame"){

            if (paleoGalleryImgElements.length == 0){
                for(var i=0; i<paleoGallery.length; i++){
                    CreateGalleryImg(paleoGallery[i], paleoGalleryImgElements);
                }
            }

            currentGallery = paleoGalleryImgElements;
            console.log(currentGallery);
            currentCaptions = paleoCaptions;

            ResetLightbox();

        } else if ($.contains(illustratorMain[0], e.currentTarget)){

            if (illustratorGalleryImgElements.length == 0){
                for(var i=0; i<illustratorGallery.length; i++){
                    CreateGalleryImg(illustratorGallery[i], illustratorGalleryImgElements);
                }
            }

            currentGallery = illustratorGalleryImgElements;
            currentCaptions = illustratorCaptions;

            ResetLightbox(); 
            TurnElementOnOff(currentGallery[currentImg][0], false); 
            currentImg = e.currentTarget.dataset.orderNum;
            SetLightboxImg(currentImg);          
        }

        lightbox.toggleClass("displayNone");
    }


    function CreateGalleryImg(whichImg, elementArray){

        var orderNum = elementArray.length;
        var newImg = $("<img>", {class: "lightbox-img displayNone", src: whichImg});
        newImg[0].dataset.orderNum = orderNum;
        newImg[0].dataset.isLoaded = 0;
        newImg.ready(function(){
            ImgLoaded(elementArray[orderNum]);
        });
        newImg.click(LightboxImgClick);

        elementArray.push(newImg);

        lightboxLoading.after(newImg);

        console.log(newImg);
    }

    function ImgLoaded(imgElement){
        imgElement[0].dataset.isLoaded = 1;

        if (currentImg == currentGallery.indexOf(imgElement)){
            TurnElementOnOff(lightboxLoading[0], false);
            TurnElementOnOff(imgElement[0], true);
        }
    }

    function TurnElementOnOff(el, turnOn){
        if (turnOn){
            RemoveClass(el, "displayNone");
        } else {
            AddClass(el, "displayNone");
        }
    }

    function XOutLightboxClick(e){
        console.log(e.currentTarget);

        if (e.currentTarget.id == "lightbox"){
            lightbox.toggleClass("displayNone");
            TurnElementOnOff(currentGallery[currentImg][0], false);
        }
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