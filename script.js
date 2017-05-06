particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Checking the console! Smart move ... Hope you like the website');
});


$(document).ready(function() {
    TweenMax.to($('#about-col'), 0.8, {y : -450, ease: 'Power4.easeInOut'});
    $('#about-me').on('click', function() {
        TweenMax.to($('#about-col'), 0.8, {y : 0, ease: 'Power4.easeInOut'});
        $('#top-image').addClass('darken');
        $('video').addClass('darken');
        $('#design').addClass('darken');
        $('#code').addClass('darken');
        $('.mg').addClass('darken');
        $('#arrow').addClass('darken');
    });
    $('.fa-times').on('click', function() {
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
