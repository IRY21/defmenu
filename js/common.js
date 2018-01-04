
$(document).ready(function(){

    var myDefMenu = new DefMenu({
        //menu : ".defmenu",
        //build : true,
        btn : ".defmenu-btn",
        //links: "auto"
    });

    function animatedAnchorScroll(self, btnOn) {
        var target = $(self).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 1000);
    }

    $('a[href^="#"]').click(function(){
        animatedAnchorScroll(this);
        myDefMenu.close();
    });

});
