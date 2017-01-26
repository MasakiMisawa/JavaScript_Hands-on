$(document).on('click', '#jsi-do-calculation', function() {
    var val1 = parseInt($('#jsi-input-value1').val()); // 数値に変換
    var val2 = parseInt($('#jsi-input-value2').val()); // 数値に変換
    if (isNaN(val1) || isNaN(val2)) {
        // val1 か val2のどちらか片方でも数値以外だった場合は、アラートを出して終了
        alert('数値以外が入力されています');
        return;
    }
    var calcResult = val1 + val2;
    $('#jsi-calculation-result').text(calcResult);
});
