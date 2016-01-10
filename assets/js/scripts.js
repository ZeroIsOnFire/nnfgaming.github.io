
jQuery(document).ready(function() {

    $('.showcase').backstretch('assets/img/backgrounds/background.jpg');  

    /*
        Gallery
    */
    $('.gallery-images .img-wrapper').hover(
        function() {
            $(this).find('.img-background').fadeIn('fast');
        },
        function() {
            $(this).find('.img-background').fadeOut('fast');
        }
    );

    /*
        Gallery prettyPhoto
    */
    $(".gallery-images a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});

    /*
        Show latest tweet
    */
    $(".show-tweet").tweet({
        username: "anli_zaimi",
        join_text: "auto",
        count: 1,
        loading_text: "loading tweet...",
        template: "{text} {time}"
    });

    /*
        Contact form
    */
    $('.contact-us form').submit(function() {
        $('.contact-us form .name').css('border-top', '0');
        $('.contact-us form .email').css('border-top', '0');
        $('.contact-us form textarea').css('border-top', '0');
        var postdata = $('.contact-us form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.nameMessage != '') {
                    $('.contact-us form .name').css('border-top', '1px solid #518d8a');
                }
                if(json.emailMessage != '') {
                    $('.contact-us form .email').css('border-top', '1px solid #518d8a');
                }
                if(json.messageMessage != '') {
                    $('.contact-us form textarea').css('border-top', '1px solid #518d8a');
                }
                if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
                    $('.contact-us form').fadeOut('fast', function() {
                        $('.contact-us').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                    });
                }
            }
        });
        return false;
    });

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



