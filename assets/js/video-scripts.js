
jQuery(document).ready(function() {

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

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

});

function openPopup(url)
{
    newwindow=window.open(url,'name','height=300,width=500');
    if (window.focus) {newwindow.focus()}
}



