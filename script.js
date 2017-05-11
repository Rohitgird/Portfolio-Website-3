particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Checking the console! Smart move ... Hope you like the website');
});


$(document).ready(function() {
    TweenMax.to($('#about-col'), 0.8, {y : -450, ease: 'Power4.easeInOut'});
    $('#about-me').on('click', function() {
        TweenMax.to($('#about-col'), 0.8, {y : 0, ease: 'Power4.easeInOut'});
        TweenMax.from($('.fa-times'), 0.8, {y : -60, ease: 'Power2.easeInOut', delay: 0.2});
        $('#top-image').addClass('darken');
        $('video').addClass('darken');
        $('#design').addClass('darken');
        $('#code').addClass('darken');
        $('.mg').addClass('darken');
        $('#arrow').addClass('darken');
    });
    $('.fa-times').on('click', function() {
        TweenMax.to($('.fa-times'), 0.8, {y : 0, ease: 'Power2.easeInOut', delay: 0.2});
        TweenMax.to($('#about-col'), 0.8, {y : -450, ease: 'Power4.easeInOut'});
        $('#top-image').removeClass('darken');
        $('video').removeClass('darken');
        $('#design').removeClass('darken');
        $('#code').removeClass('darken');
        $('.mg').removeClass('darken');
        $('#arrow').removeClass('darken');
    });

    $('#work-together').mouseover(function() {
        $(this).removeClass('blur-text');
    });

    $('#work-together').mouseout(function() {
        $(this).addClass('blur-text');
    });

    $('#work-together').on('click', function() {
        TweenMax.to($('.work-section'), 0.9, { transform: "translate3d(100vw, 0, 0)" , ease: 'Power2.easeInOut'});
        TweenMax.to($('#top-image'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#work-together'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('video'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#design'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#code'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#self-name'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.3'});
        TweenMax.to($('.img-container'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#arrow'), 0.3, { transform: "translate3d(12vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.from($('#email-address'), 0.7, { x: -400 , ease: 'Power4.easeInOut', delay: '-1'});

        $('#top-image').addClass('darken');
        $('#work-together').addClass('darken');
        $('video').addClass('darken');
        $('#design').addClass('darken');
        $('#code').addClass('darken');
        $('#self-name').addClass('darken');
        $('.img-container').addClass('darken');
        $('#arrow').addClass('darken');
    });

    $('.fa-angle-left').on('click', function() {
        TweenMax.to($('.work-section'), 0.7, { transform: "translate3d(0vw, 0, 0)" , ease: 'Power2.easeInOut'});
        TweenMax.to($('#top-image'), 0.3, { transform: "translate3d(0vw, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#work-together'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('video'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#design'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#code'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#self-name'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('.img-container'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});
        TweenMax.to($('#arrow'), 0.3, { transform: "translate3d(0, 0, 0)" , ease: 'Power4.easeInOut', delay: '-0.1'});

        $('#top-image').removeClass('darken');
        $('#work-together').removeClass('darken');
        $('video').removeClass('darken');
        $('#design').removeClass('darken');
        $('#code').removeClass('darken');
        $('#self-name').removeClass('darken');
        $('.img-container').removeClass('darken');
        $('#arrow').removeClass('darken');
    });


    $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
for(i=0; i<10; i++) {
    setInterval(function() {$('#code').animateCss('bounce');
}, 5000);
}

for(i=0; i<10; i++) {
    setInterval(function() {$('#design').animateCss('shake');
}, 5000);
}
});
