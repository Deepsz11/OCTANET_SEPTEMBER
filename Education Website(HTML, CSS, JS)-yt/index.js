$(document).ready(function () {

    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle')
    });

    $(window).on('scroll', function () {
        $('.fa-bars').removeClass('fa-times')
        $('.navbar').removeClass('nav-toggle')

        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active')
        }
        else {
            $('header').removeClass('header-active')
        }
        $('section').each(function () {
            var id = $(this).attr('id');
            var height = $(this).height();
            var top = $(window).scrollTop();
            var offset=$(this).offset().top-200;
            if (top >= offset && top < height + offset) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');
            }
        });
    });
});