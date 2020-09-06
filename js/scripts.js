
$('.count').each(function () {
    $(this).prop('counter',0).animate({
        counter:$(this).text()
    },{
        duration: 4000,
        easing: 'swing',
        step:function (now){
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});