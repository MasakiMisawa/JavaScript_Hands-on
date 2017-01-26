$(function() {
    $('.jsc-nine-box').click(function() {
        var $clickBox = $(this);
        $('.jsc-nine-box').each(function() {
            if ($(this).text() == $clickBox.text()) {
                $(this).css('background-color', 'blue');
            } else {
                $(this).css('background-color', 'white');
            }
        });
    });
});

/*
下記の書き方で書く事も多いです。
$(document).on('click', '.jsc-nine-box', function() {
    var $clickBox = $(this);
    $('.jsc-nine-box').each(function() {
        if ($(this).text() == $clickBox.text()) {
            $(this).css('background-color', 'blue');
        } else {
            $(this).css('background-color', 'white');
        }
    });
});
*/
