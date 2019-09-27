$(document).ready(function () {
    // carousel
    $('.carousel').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        //   adaptiveHeight: true,
        // dots:true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $("#form").submit(function (e) {
        return false;
    })
    $("#form").validate({
        rules: {
            email: {
                required: true,
                email: true,
                depends: function(){
                           $("#form-email").css("border","2px #C9A059 solid");
                    }
            },
            nome: {
                required: true,
                depends: function(){
                           $("#form-name").css("border","2px #C9A059 solid");
                    }
                
            },
            texto: {
                required: true,
                depends: function(){
                    $("#form-text").css("border","2px #C9A059 solid");
             }
            }

        },
        submitHandler: function (form) {
            alert("Seu contato foi submetido !");

        },
     
    });

    $("#subirTopo").hide();

    $('a#subirTopo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('#subirTopo').fadeIn();
        } else {
            $('#subirTopo').fadeOut();
        }
    });

});