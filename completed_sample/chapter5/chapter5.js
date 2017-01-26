$(function(){
    // HTMLのbody要素を変数に保存
    var $body = $('body');
    // スクロールボタンを作成
    var $page_top = $('<a>PAGE TOP</a>');
    // チラツキ回避の為の判定変数
    var isHidden = true;
    // スクロールボタンの表示、非表示を切り替える境界線height値
    var borderLineHeight = 300;

    // body要素の最後尾にスクロールボタンを追加
    $body.append($page_top);
    // cssのdisplay属性をhiddenに設定(= $page_top.css('display', 'hidden');)
    $page_top.hide();

    //ウィンドウのスクロールに対してイベントを設定
    $(window).scroll(function() {
        // 一定値以上スクロールしたらスクロールしたタイミングでスクロールボタン表示
        if($(this).stop(true, true).scrollTop() > borderLineHeight) {
            if(isHidden) {
                $page_top.slideDown();
	              isHidden = false;
            }
        } else {
            if(!isHidden) {
                $page_top.stop(true, true).slideUp();
                isHidden = true;
            }
        }
    });

    // スクロールボタンのクリックイベントを設定
    $(document).on('click', $page_top, function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
