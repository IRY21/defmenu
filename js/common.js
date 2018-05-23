
$(document).ready(function(){

    var myDefMenu = new DefMenu({
        btn : ".DefmenuBtn"
        //menu : ".mydefmenu",
        //build : true,
        //links: "auto"
    });

    function animatedAnchorScroll(self) {
        var target = $(self).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 1000);
    }

    $('a[href^="#"]').click(function(){
        animatedAnchorScroll(this);
        myDefMenu.close();
    });

});
