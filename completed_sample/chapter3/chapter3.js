$(function(){
    // setting jQuery datepicker.
    $('#jsi-date').datepicker();

    // setting PNotify.
    $('#jsi-show-notify').click(function() {
        new PNotify({
            title: '通知タイトル',
            text: '通知本文'
        });
    });
});

/*
下記の書き方で書くことも多いです。
$(document).on('click', '#jsi-show-notify', function() {
    new PNotify({
        title: '通知タイトル',
        text: '通知本文'
    });
});
*/
