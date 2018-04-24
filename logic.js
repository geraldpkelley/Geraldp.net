(function (){
    $(".menu > li").click(MainMenuClick);

    $(".portfolio-x").click(XOutClick);

    function MainMenuClick(e){
        console.log(e.currentTarget);

        var whichBtn = e.currentTarget.id.replace("btn-mm", "portfolio");

        $("#" + whichBtn).css({top: "0", left: "0"});
    }

    function XOutClick(e){
        console.log(e.currentTarget);

        $("#" + e.currentTarget.parentElement.parentElement.id).css({top:"", left:""});
        console.log($(e.currentTarget.parentElement.parentElement));
    }


})();