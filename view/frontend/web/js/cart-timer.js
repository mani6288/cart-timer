define(['jquery'], function($) {
    'use strict';

    return {
        start: function () {
            var timerDuration = 20 * 60; // 20 minutes in seconds
            var display = $('#cart-timer-clock');

            var timer = setInterval(function () {
                var minutes = parseInt(timerDuration / 60, 10);
                var seconds = parseInt(timerDuration % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.text(minutes + ":" + seconds);

                if (--timerDuration < 0) {
                    clearInterval(timer);
                    $.ajax({
                        url: '/carttimer/cart/clear',
                        type: 'POST',
                        complete: function () {
                            location.reload();
                        }
                    });
                }
            }, 1000);
        }
    };
});
