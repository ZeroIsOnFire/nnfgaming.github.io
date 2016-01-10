
jQuery(document).ready(function() {

    $('.showcase').backstretch('assets/img/backgrounds/background.jpg');  

    var parallax = document.querySelectorAll(".parallaxbg"),
      speed = 0.5;

    $(window).scroll(function () {
        [].slice.call(parallax).forEach(function(el,i){

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });

        //Display or hide scroll to top button 
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }

    });

    if ($(window).scrollTop() > 100) {
            $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }

    /*
    Function for scroliing to top
    ************************************/
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

        
    $('.links a[href*=#]').each(function () {
        if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
            var $targetId = $(this.hash),
            $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;

            if ($target) {

                $(this).click(function () {
                   var targetOffset = $target.offset().top - 63;
                    $('html, body').animate({
                        scrollTop: targetOffset
                    }, 800);
                    return false;
                });
            }
        }
    });

});

function openPopup(url)
{
    newwindow=window.open(url,'name','height=300,width=500');
    if (window.focus) {newwindow.focus()}
}

function filterPath(string) {
    return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
}



