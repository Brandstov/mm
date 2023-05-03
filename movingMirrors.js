
$(document).ready(function () {
    let n = 10;
    for (let i = 0; i < n; i++)
        $('body').append('<div class="p' + i + '"></div>');
    setInterval(function () {
        for (let i = 0; i < n; i++)place(i);
    }, 8000);
    randomize = (max, min) => Math.random() * (max - min) + min;
    place = (index) => $('.p' + index).css({
        'position': 'absolute',
        'height': randomize(80, 30) + 'px',
        'width': randomize(80, 30) + 'px',
        'top': randomize($(window).height(), 0) - 40 + 'px',
        'left': randomize($(window).width(), 0) - 40 + 'px',
        'border-radius': randomize(50, 10) + '%',
        'background': 'rgba(255,255,255,.1)',
        'opacity': '0.75',
        'transition': 'all 4s linear',
        'animation': 'scale 4s linear ' + index / 100 + 's infinite alternate'
    });
});